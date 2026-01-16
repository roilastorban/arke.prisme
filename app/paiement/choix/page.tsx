"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function ChoiceContent() {
  const searchParams = useSearchParams();
  const level = searchParams.get("level") || "P1";

  const getOfferDetails = () => {
    switch (level) {
      case "P3": return { title: "Éclosion Majeure", price: "747 000 FCFA", path: "p3" };
      case "P2": return { title: "Architecture & Autonomie", price: "497 000 FCFA", path: "p2" };
      case "P1":
      default: return { title: "Diagnostic du Sage", price: "147 000 FCFA", path: "p1" };
    }
  };

  const offer = getOfferDetails();

  return (
    <section className="bg-[#F5F1E8] py-20 md:py-40 px-[5vw] md:px-[10vw] text-center">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-6">
          <span className="text-[#C6A75E] font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase font-black">
            Étape Finale : Mode de Règlement
          </span>
          <h1 className="text-[32px] md:text-[64px] font-black leading-tight uppercase">
            {offer.title}
          </h1>
          <p className="text-2xl md:text-3xl font-black text-[#1F3D2B]">{offer.price}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <Link href={`/paiement/${offer.path}/momo`} className="block">
            <div className="p-10 border-2 border-[#1F3D2B] bg-white shadow-[10px_10px_0px_#C6A75E] hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_#C6A75E] transition-all group">
              <h2 className="text-xl font-black mb-4 uppercase tracking-widest">Mobile Money</h2>
              <p className="text-sm opacity-60 mb-8">Paiement instantané via votre opérateur mobile.</p>
              <Button className="neo-brutalism-button w-full bg-[#C6A75E] text-[#1F3D2B] rounded-none py-6 font-black uppercase tracking-widest">
                SÉLECTIONNER
              </Button>
            </div>
          </Link>

          <Link href={`/paiement/${offer.path}/card`} className="block">
            <div className="p-10 border-2 border-[#1F3D2B] bg-white shadow-[10px_10px_0px_#1F3D2B] hover:translate-x-1 hover:translate-y-1 hover:shadow-[6px_6px_0px_#1F3D2B] transition-all group">
              <h2 className="text-xl font-black mb-4 uppercase tracking-widest">Carte Bancaire</h2>
              <p className="text-sm opacity-60 mb-8">Paiement sécurisé par Visa, Mastercard ou AMEX.</p>
              <Button className="neo-brutalism-button w-full bg-[#1F3D2B] text-[#F5F1E8] rounded-none py-6 font-black uppercase tracking-widest">
                SÉLECTIONNER
              </Button>
            </div>
          </Link>
        </div>

        <p className="text-[10px] opacity-50 uppercase tracking-[0.2em] font-bold">
          Les frais de transaction sont intégralement pris en charge par Arké.
        </p>
      </div>
    </section>
  );
}

export default function ChoicePage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Header />
      <Suspense fallback={<div className="p-20 text-center">Chargement des options...</div>}>
        <ChoiceContent />
      </Suspense>
      <Footer />
    </main>
  );
}
