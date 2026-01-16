import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Accompagnement() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* SECTION HERO : L'EXPERTISE DURABLE */}
      <HeroSection 
        videoSrc="/videos/hero-accompagnement-final.mp4"
        title="L'EXPERTISE DURABLE"
        subtitle="ÉCLOSION MAJEURE (LE GARDIEN)."
        description="Arké devient l'architecte et le gardien permanent de votre prestige. Pour le Champion National prêt pour l'exportation qui refuse de voir son image trahir son talent."
        ctaText="SOLLICITER LE GARDIENNAGE"
      />

      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-8 border-l-4 border-[#C6A75E] pl-8">
            <h2 className="text-[28px] md:text-[48px] font-black">LE RÔLE : L'ARCHITECTE PERMANENT</h2>
            <p className="text-lg md:text-xl opacity-80 leading-relaxed">
              Nous ne livrons pas seulement un dossier, nous prenons les rênes de votre image. En tant que Gardien, Arké assure une surveillance mensuelle pour garantir que chaque pixel, chaque mot et chaque interaction reste aligné sur votre Constitution de marque.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border-2 border-[#1F3D2B] bg-white shadow-[8px_8px_0px_#C6A75E]">
              <h3 className="text-xl font-black mb-6 text-[#1F3D2B] uppercase tracking-widest">L'IMPACT STRATÉGIQUE</h3>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-2"><span>•</span> <span>Architecture complète & Storytelling institutionnel</span></li>
                <li className="flex items-start gap-2"><span>•</span> <span>Gouvernance mensuelle de prestige</span></li>
                <li className="flex items-start gap-2"><span>•</span> <span>Protection immuable du Capital-Marque</span></li>
                <li className="flex items-start gap-2"><span>•</span> <span>Réactivité stratégique sous 30 minutes</span></li>
              </ul>
            </div>
            <div className="p-8 border-2 border-[#1F3D2B] bg-[#1F3D2B] text-[#F5F1E8] shadow-[8px_8px_0px_#C6A75E] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black mb-4 text-[#C6A75E] uppercase tracking-widest">INVESTISSEMENT</h3>
                <p className="text-3xl md:text-4xl font-black">747 000 FCFA</p>
                <p className="text-xs mt-2 opacity-60 uppercase tracking-widest">+ 197 000 FCFA / mois</p>
              </div>
              <div className="mt-8">
                <Link href="/audit?level=P3">
                  <Button className="neo-brutalism-button w-full bg-[#C6A75E] text-[#1F3D2B] rounded-none py-6 uppercase tracking-widest font-black h-auto">
                    SOLLICITER L'EXPERTISE
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-12 border-2 border-[#1F3D2B] bg-[#F5F1E8] text-center space-y-8">
            <p className="text-xl md:text-2xl font-black italic">
              "L'excellence n'est pas un acte, c'est une habitude. Le Gardiennage Arké transforme cette habitude en une structure indestructible."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
