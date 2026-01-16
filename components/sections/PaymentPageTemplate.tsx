"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Script from "next/script";

interface PaymentPageTemplateProps {
  level: string;
  method: "momo" | "card";
  amount: number; // This is the TARGET price the customer should pay
  title: string;
  successUrl: string;
}

export function PaymentPageTemplate({ level, method, amount, title, successUrl }: PaymentPageTemplateProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculation to ensure the customer pays EXACTLY the target amount
  // Kkiapay adds 1.5% for Momo. So: BaseAmount * 1.015 = TargetAmount
  // BaseAmount = TargetAmount / 1.015
  const baseAmount = method === "momo" ? Math.round(amount / 1.015) : amount;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Veuillez remplir votre nom et email.");
      return;
    }

    if (typeof (window as any).openKkiapayWidget === 'function') {
      (window as any).openKkiapayWidget({
        amount: baseAmount,
        key: "8d810e82c04368c5d2c7592b1ac9d71095a51a05",
        callback: successUrl,
        sandbox: false,
        paymentmethod: method,
        theme: "#C6A75E",
        position: "center",
        name: name,
        email: email
      });
    } else {
      alert("Le module de paiement n'a pas chargé. Veuillez rafraîchir la page.");
    }
  };

  const formattedAmount = mounted ? amount.toLocaleString() : amount.toString();

  return (
    <main className="min-h-screen pt-[80px]">
      <Header />
      <Script src="https://cdn.kkiapay.me/k.js" strategy="lazyOnload" />
      
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <span className="text-[#C6A75E] font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase font-black">
              Paiement Sécurisé — {method === "momo" ? "Mobile Money" : "Carte Bancaire"}
            </span>
            <h1 className="text-[32px] md:text-[56px] font-black leading-tight uppercase">
              {title}
            </h1>
            <div className="inline-block border-2 border-[#1F3D2B] px-8 py-4 bg-white shadow-[6px_6px_0px_#C6A75E]">
              <p className="text-3xl md:text-5xl font-black text-[#1F3D2B]">{formattedAmount} FCFA</p>
            </div>
          </div>

          <div className="p-8 md:p-12 border-2 border-[#1F3D2B] bg-white shadow-[10px_10px_0px_#1F3D2B]">
            <h2 className="text-xl font-black mb-8 uppercase tracking-widest">Informations du Payeur</h2>
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest">Nom Complet *</label>
                <Input 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" 
                  placeholder="Votre nom" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest">Email Professionnel *</label>
                <Input 
                  required 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" 
                  placeholder="nom@entreprise.com" 
                />
              </div>

              <div className="pt-8">
                <Button 
                  type="submit"
                  className="neo-brutalism-button w-full bg-[#C6A75E] text-[#1F3D2B] rounded-none py-8 text-lg font-black uppercase tracking-[0.2em] h-auto"
                >
                  VALIDER LE PAIEMENT ({formattedAmount} FCFA) 🔒
                </Button>
              </div>
            </form>
            
            <p className="text-[10px] mt-8 text-center opacity-50 italic uppercase tracking-widest leading-relaxed">
              Les frais de transaction sont intégralement pris en charge par Arké. Vous payez exactement le prix affiché.<br/>
              En payant, vous reconnaissez nos pages légales : CGU · Non‑remboursement · RGPD.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
