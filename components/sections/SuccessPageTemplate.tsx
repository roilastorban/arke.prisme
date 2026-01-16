import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface SuccessPageTemplateProps {
  title: string;
  amount: string;
  method: string;
}

export function SuccessPageTemplate({ title, amount, method }: SuccessPageTemplateProps) {
  return (
    <main className="min-h-screen pt-[80px]">
      <Header />
      <section className="bg-[#F5F1E8] py-20 md:py-40 px-[5vw] md:px-[10vw] text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-[#1F3D2B] rounded-full flex items-center justify-center border-4 border-[#C6A75E] shadow-[8px_8px_0px_#C6A75E]">
              <CheckCircle2 className="w-12 h-12 text-[#C6A75E]" />
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-[#C6A75E] font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase font-black">
              Investissement Confirmé
            </span>
            <h1 className="text-[32px] md:text-[64px] font-black leading-tight uppercase">
              {title}
            </h1>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed">
              Votre paiement de <span className="font-black text-[#1F3D2B]">{amount}</span> par <span className="font-black text-[#1F3D2B]">{method}</span> a été validé avec succès.
            </p>
          </div>

          <div className="p-8 border-2 border-[#1F3D2B] bg-white shadow-[10px_10px_0px_#1F3D2B] space-y-6">
            <h2 className="text-xl font-black uppercase tracking-widest text-[#1F3D2B]">Prochaine Étape</h2>
            <p className="text-sm md:text-base opacity-70">
              La Sentinelle Arké a reçu votre protocole. Un membre du collectif ^Prisme vous contactera par email sous <span className="font-black text-[#1F3D2B]">24 heures</span> pour initier la phase de calibration.
            </p>
          </div>

          <div className="pt-8">
            <Link href="/">
              <Button className="neo-brutalism-button bg-[#1F3D2B] text-[#F5F1E8] rounded-none px-12 py-8 font-inter text-lg uppercase tracking-[0.2em] h-auto">
                RETOUR À L'ACCUEIL
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
