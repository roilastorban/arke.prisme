import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* SECTION HERO : L'INSTANT DE VÉRITÉ */}
      <HeroSection 
        videoSrc="/videos/hero-home-spectacular.mp4"
        title="L'INSTANT DE VÉRITÉ"
        subtitle="VOTRE EXCELLENCE EST INVISIBLE."
        description="Vous avez le meilleur produit du marché. Pourtant, vos clients doutent encore. Pourquoi ? Parce que sur l'étagère du monde, votre image trahit votre talent. Ne laissez plus un design médiocre être le plafond de votre ambition."
        ctaText="REPRENDRE LE POUVOIR SUR VOTRE IMAGE"
      />

      {/* SECTION LE CONSTAT : L'HÉMORRAGIE DE CRÉDIBILITÉ */}
      <section className="bg-[#1F3D2B] text-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] mb-12 md:mb-16 border-l-4 border-[#C6A75E] pl-6 md:pl-8">
            LA FRACTURE QUI VOUS COÛTE VOS MARCHÉS.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6 md:space-y-8 p-8 border-2 border-[#C6A75E]/30 bg-[#F5F1E8]/5 text-[#F5F1E8]">
              <p className="text-lg md:text-xl font-bold text-[#C6A75E] uppercase tracking-widest">Le Choc</p>
              <p className="text-base md:text-lg opacity-80 leading-relaxed">
                70% des échecs à l'exportation des produits africains ne sont pas dus à la qualité du contenu, mais à une faillite de l'emballage et du récit.
              </p>
            </div>
            <div className="space-y-6 md:space-y-8 p-8 border-2 border-[#C6A75E]/30 bg-[#F5F1E8]/5 text-[#F5F1E8]">
              <p className="text-lg md:text-xl font-bold text-[#C6A75E] uppercase tracking-widest">La Réalité</p>
              <p className="text-base md:text-lg opacity-80 leading-relaxed">
                Si votre marque semble "artisanale" au sens amateur du terme, le marché international vous traitera comme tel : un produit de seconde zone, négociable à bas prix.
              </p>
            </div>
          </div>
          <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t-2 border-[#C6A75E] text-center">
            <p className="text-xl md:text-2xl font-bold text-[#C6A75E] mb-4 uppercase tracking-widest">La Mission d'Arké</p>
            <p className="text-xl md:text-2xl italic font-light max-w-3xl mx-auto leading-relaxed">
              "Nous ne sommes pas des décorateurs. Nous sommes des réparateurs de crédibilité. Nous alignons ce que vous êtes avec ce que le monde voit."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION LA PSYCHOLOGIE : L'EFFET DE HALO */}
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] mb-8 text-[#1F3D2B]">
              HACKER LA DÉCISION D'ACHAT.
            </h2>
            <p className="text-base md:text-lg mb-8 leading-relaxed">
              Le cerveau de votre client décide en 50 millisecondes. C'est l'Effet de Halo : une présentation impeccable projette une qualité supérieure sur le produit lui-même.
            </p>
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-bold text-[#1F3D2B] uppercase tracking-widest">Le Résultat</p>
              <p className="text-lg md:text-xl font-bold text-[#1F3D2B] leading-relaxed">
                Ce n'est pas de la magie, c'est de l'ingénierie cognitive. En structurant votre marque, nous permettons à votre client de justifier rationnellement son désir émotionnel de payer le prix fort pour votre excellence.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 neo-brutalism-card p-8 md:p-12 bg-white aspect-square flex flex-col justify-center items-center text-center">
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-8 flex items-center justify-center">
              <Image 
                src="/images/sceau-arke.png" 
                alt="Le Sceau Arké" 
                fill 
                className="object-contain"
              />
            </div>
            <p className="font-cinzel tracking-[0.3em] text-xs md:text-sm font-bold">LE SCEAU ARKÉ</p>
            <div className="mt-8 w-full h-[2px] bg-[#1F3D2B]" />
            <p className="mt-8 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold opacity-60">Ingénierie de la Valeur</p>
          </div>
        </div>
      </section>

      {/* SECTION L'AUTORITÉ : L'ARTISAN DE L'OMBRE */}
      <section className="bg-[#F5F1E8] py-32 md:py-48 px-[5vw] md:px-[10vw] text-center border-t-2 border-[#1F3D2B]">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
          <h2 className="text-[18px] md:text-[24px] tracking-[0.5em] text-[#C6A75E] font-black">L'ARTISAN DE L'OMBRE</h2>
          <p className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight">
            Arké n'est pas là pour briller. Nous sommes l'armature invisible qui soutient les futurs champions nationaux.
          </p>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto">
            Nous appliquons des codes de prestige internationaux à l'authenticité de vos racines.
          </p>
          <div className="pt-8 md:pt-12">
            <p className="font-cinzel text-xl md:text-2xl tracking-[0.3em] font-black border-y-2 border-[#1F3D2B] py-6 inline-block px-8">
              NOUS CRÉONS DES ICÔNES. PAS DES TENDANCES.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION TRANSITION : LE PREMIER PAS CLINIQUE */}
      <section className="bg-[#1F3D2B] text-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw] text-center">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
          <p className="text-xl md:text-2xl leading-relaxed">
            L'excellence commence par un diagnostic sans complaisance. Êtes-vous prêt à voir la vérité sur votre marque ?
          </p>
          <div className="w-full flex justify-center">
            <Link href="/audit">
              <Button className="neo-brutalism-button w-full sm:w-auto bg-[#C6A75E] text-[#1F3D2B] rounded-none px-8 md:px-12 py-6 md:py-8 font-inter text-sm md:text-lg uppercase tracking-[0.2em] h-auto">
                INITIER L'AUDIT DE CRÉDIBILITÉ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
