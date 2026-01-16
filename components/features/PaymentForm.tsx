"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Script from "next/script";

interface PaymentFormProps {
  title: string;
  amount: number;
  method: "momo" | "card";
  callbackUrl: string;
}

export function PaymentForm({ title, amount, method, callbackUrl }: PaymentFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    if (typeof (window as any).openKkiapayWidget === 'function') {
      (window as any).openKkiapayWidget({
        amount: amount,
        key: "8d810e82c04368c5d2c7592b1ac9d71095a51a05",
        callback: callbackUrl,
        sandbox: false,
        paymentmethod: [method],
        theme: "#C6A75E",
        position: "center",
        name: name,
        email: email,
      });
    } else {
      alert("Le module de paiement n'a pas chargé. Veuillez rafraîchir la page.");
    }
  };

  return (
    <main className="min-h-screen pt-[80px]">
      <Header />
      <Script src="https://cdn.kkiapay.me/k.js" strategy="lazyOnload" />
      
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <span className="text-[#C6A75E] font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase font-black">
              Finalisation de l'Investissement
            </span>
            <h1 className="text-[32px] md:text-[56px] font-black leading-tight uppercase">
              {title}
            </h1>
            <div className="inline-block border-2 border-[#1F3D2B] px-8 py-4 bg-white shadow-[6px_6px_0px_#C6A75E]">
              <p className="text-3xl md:text-5xl font-black text-[#1F3D2B]">{amount.toLocaleString()} FCFA</p>
            </div>
            <p className="text-sm font-black uppercase tracking-widest opacity-60">
              Mode de paiement : {method === "momo" ? "Mobile Money" : "Carte Bancaire"}
            </p>
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
                  type="email" 
                  required 
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
                  VALIDER LE PAIEMENT SÉCURISÉ 🔒
                </Button>
              </div>
            </form>
            
            <div className="mt-12 pt-8 border-t border-[#1F3D2B]/10 flex flex-wrap gap-4 justify-center">
              <div className="px-4 py-2 border border-[#1F3D2B]/20 text-[10px] font-black uppercase tracking-widest opacity-50">SSL Secure</div>
              <div className="px-4 py-2 border border-[#1F3D2B]/20 text-[10px] font-black uppercase tracking-widest opacity-50">Kkiapay Verified</div>
              <div className="px-4 py-2 border border-[#1F3D2B]/20 text-[10px] font-black uppercase tracking-widest opacity-50">No Hidden Fees</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
