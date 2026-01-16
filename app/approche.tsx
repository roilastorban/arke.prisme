import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import Link from "next/link";
import Image from "next/image";

export default function Approche() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* SECTION L'IMPACT ÉMOTIONNEL : LA TRAHISON DE L'IMAGE */}
      <section className="relative min-h-screen w-full overflow-hidden flex items-center px-[5vw] md:px-[10vw] pt-20 bg-[#F5F1E8]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/artisan-bw.png" 
            alt="Artisan au travail" 
            fill 
            className="object-cover opacity-40 grayscale contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1E8] via-[#F5F1E8]/80 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-4xl">
          <div className="flex flex-col items-start space-y-8">
            <span className="text-[#C6A75E] font-cinzel text-xs md:text-sm tracking-[0.3em] block border-l-2 border-[#C6A75E] pl-4">
              L'IMPACT ÉMOTIONNEL
            </span>
            <h1 className="text-[32px] sm:text-[48px] md:text-[72px] leading-[1.1] font-black">
              VOTRE PLUS GRAND RISQUE EST L'INVISIBILITÉ.
            </h1>
            <p className="text-base md:text-xl opacity-90 leading-relaxed max-w-2xl">
              Vous avez sacrifié des années à perfectionner votre produit. Pourtant, sur l’étagère ou l’écran, il est confondu avec la médiocrité. Chaque seconde où votre image ne reflète pas votre excellence, vous perdez un client, un marché, une part de votre héritage. C'est une trahison silencieuse.
            </p>
            <p className="text-lg md:text-2xl font-bold text-[#1F3D2B] italic">
              Arké ne crée pas de "jolis designs". Nous stoppons cette hémorragie de crédibilité.
            </p>
            <div className="w-full sm:w-auto pt-4">
              <Link href="/audit?level=P1">
                <Button className="neo-brutalism-button w-full sm:w-auto bg-[#C6A75E] text-[#1F3D2B] rounded-none px-8 md:px-12 py-6 md:py-8 font-inter text-xs md:text-sm uppercase tracking-[0.2em] h-auto">
                  STOPPER L'HÉMORRAGIE
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1F3D2B]" />
      </section>

      {/* SECTION LA LOGIQUE : LE MÉCANISME DE L'EFFET DE HALO */}
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw] border-b-2 border-[#1F3D2B]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] mb-16 text-center font-black">L'INGÉNIERIE DE LA CONFIANCE.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="space-y-8">
              <p className="text-base md:text-lg leading-relaxed">
                Le cerveau humain met 50 millisecondes à juger votre valeur. C'est l'Effet de Halo : si l'enveloppe est impeccable, l'esprit conclut que le produit est exceptionnel.
              </p>
              <div className="p-8 border-2 border-[#1F3D2B] bg-white shadow-[8px_8px_0px_#C6A75E]">
                <p className="text-4xl md:text-5xl font-black text-[#1F3D2B] mb-2">300%</p>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold opacity-60">Le Chiffre : Prix supérieur justifiable</p>
              </div>
              <p className="text-lg md:text-xl font-bold leading-relaxed">
                Nous utilisons la géométrie sacrée et la psychologie des couleurs pour hacker ce processus de décision. Nous donnons au cerveau de votre client les preuves visuelles dont il a besoin pour dire "Oui".
              </p>
            </div>
            
            {/* Schéma technique */}
            <div className="relative p-12 border-2 border-[#1F3D2B] bg-white shadow-[12px_12px_0px_#1F3D2B] flex flex-col gap-8 items-center">
               <div className="flex flex-col items-center gap-4 w-full">
                  <div className="w-full p-4 border-2 border-[#C6A75E] text-center font-black uppercase tracking-widest text-sm">Perception</div>
                  <div className="w-0.5 h-8 bg-[#1F3D2B]" />
                  <div className="w-full p-4 border-2 border-[#C6A75E] text-center font-black uppercase tracking-widest text-sm">Confiance</div>
                  <div className="w-0.5 h-8 bg-[#1F3D2B]" />
                  <div className="w-full p-4 border-2 border-[#C6A75E] text-center font-black uppercase tracking-widest text-sm">Décision</div>
                  <div className="w-0.5 h-8 bg-[#1F3D2B]" />
                  <div className="w-full p-4 border-2 border-[#C6A75E] text-center font-black uppercase tracking-widest text-sm">Fidélité</div>
               </div>
               <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Flux Architectural de la Valeur</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION LA MÉTHODOLOGIE : LE PRISME D'ARKÉ */}
      <section className="bg-[#1F3D2B] text-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] mb-16 md:mb-20 text-center text-[#C6A75E] font-black">LE PRISME D'ARKÉ</h2>
          <div className="flex flex-col gap-1">
            {/* Étape 1 */}
            <div className="p-8 md:p-12 border-2 border-[#C6A75E] bg-[#F5F1E8]/5 flex flex-col md:flex-row md:items-center gap-8">
              <span className="text-5xl md:text-7xl font-black opacity-20 font-cinzel md:w-32">01</span>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl md:text-2xl text-[#C6A75E] font-black">Le Diagnostic Clinique (L'Audit de Vérité)</h3>
                <p className="text-base opacity-80 leading-relaxed">
                  Nous identifions les "fractures" : là où votre communication actuelle crée du doute. Nous ne flattons pas, nous opérons.
                </p>
              </div>
            </div>
            {/* Étape 2 */}
            <div className="p-8 md:p-12 border-2 border-[#C6A75E] bg-[#F5F1E8]/5 flex flex-col md:flex-row md:items-center gap-8">
              <span className="text-5xl md:text-7xl font-black opacity-20 font-cinzel md:w-32">02</span>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl md:text-2xl text-[#C6A75E] font-black">L'Architecture de l'Âme (Le Storytelling)</h3>
                <p className="text-base opacity-80 leading-relaxed">
                  Nous extrayons l'ADN de votre projet pour créer une narration qui ne vend pas un produit, mais une appartenance. Votre marque devient une institution.
                </p>
              </div>
            </div>
            {/* Étape 3 */}
            <div className="p-8 md:p-12 border-2 border-[#C6A75E] bg-[#F5F1E8]/5 flex flex-col md:flex-row md:items-center gap-8">
              <span className="text-5xl md:text-7xl font-black opacity-20 font-cinzel md:w-32">03</span>
              <div className="flex-1 space-y-4">
                <h3 className="text-xl md:text-2xl text-[#C6A75E] font-black">L'Infrastructure Visuelle (Le Sceau)</h3>
                <p className="text-base opacity-80 leading-relaxed">
                  Conception de l'identité. Chaque ligne est tracée avec une intention de puissance. Nous livrons un écosystème où chaque pixel travaille pour votre croissance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION LA PREUVE : L'IMMORTALITÉ DE LA STRUCTURE */}
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw] text-center border-t-2 border-[#1F3D2B]">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
          <h2 className="text-[24px] md:text-[32px] font-black">L'IMMORTALITÉ DE LA STRUCTURE</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Pourquoi les grandes maisons durent-elles des siècles ? Parce qu'elles reposent sur des fondations, pas sur des tendances.
          </p>
          <p className="text-xl md:text-2xl font-bold leading-relaxed">
            En choisissant l'approche Arké, vous n'achetez pas un logo. Vous achetez une Constitution. Un cadre de gouvernance qui garantit que dans 10 ans, votre marque sera toujours aussi souveraine qu'au premier jour.
          </p>
        </div>
      </section>

      {/* SECTION TRANSITION : L'APPEL À LA SOUVERAINETÉ */}
      <section className="bg-[#1F3D2B] text-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw] text-center">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
          <p className="text-xl md:text-2xl leading-relaxed">
            On ne demande pas la permission pour être une référence. On le devient par la structure.
          </p>
          <div className="w-full flex justify-center">
            <Link href="/solutions">
              <Button className="neo-brutalism-button w-full sm:w-auto bg-[#C6A75E] text-[#1F3D2B] rounded-none px-8 md:px-12 py-6 md:py-8 font-inter text-sm md:text-lg uppercase tracking-[0.2em] h-auto">
                DÉCOUVRIR NOS SOLUTIONS D'INGÉNIERIE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
