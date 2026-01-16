import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Gouvernance() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Header />
      
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-4xl mx-auto text-center space-y-10 md:space-y-12">
          <h1 className="text-[32px] md:text-[64px] border-b-4 border-[#1F3D2B] pb-8 inline-block font-black">
            LA CONSTITUTION ARKÉ
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            On ne construit rien de grand dans l'anarchie. Une marque forte est une dictature de la cohérence. Ce document définit les règles de protection de votre capital-marque. En travaillant avec Arké, vous n'achetez pas un service, vous signez un pacte de prestige.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw] border-t-2 border-[#1F3D2B]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <div className="neo-brutalism-card aspect-square bg-[#1F3D2B] flex items-center justify-center shadow-[12px_12px_0px_#C6A75E]">
             <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-[#C6A75E] rounded-full flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-[#C6A75E] rounded-full" />
             </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-black">LA CHARTE D’USAGE : LE PRINCIPE D’IMMUABILITÉ</h2>
            <p className="text-lg leading-relaxed">
              Votre identité visuelle est un actif financier. Toute modification — aussi infime soit-elle — détruit la confiance accumulée.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 p-6 border-2 border-[#1F3D2B] bg-white shadow-[4px_4px_0px_#1F3D2B]">
                <span className="text-[#C6A75E] font-black text-xl">01.</span>
                <p className="text-sm md:text-base"><span className="font-black uppercase tracking-widest">L’Intégrité :</span> Le logo est sacré. Ni déformation, ni changement de couleur, ni retrait d'éléments.</p>
              </li>
              <li className="flex gap-4 p-6 border-2 border-[#1F3D2B] bg-white shadow-[4px_4px_0px_#1F3D2B]">
                <span className="text-[#C6A75E] font-black text-xl">02.</span>
                <p className="text-sm md:text-base"><span className="font-black uppercase tracking-widest">Le Cadre :</span> L'usage des templates Arké est la seule garantie de maintenir l'Effet de Halo. Si vous déviez de la structure, vous dévaluez votre produit.</p>
              </li>
            </ul>
            <p className="text-xl md:text-2xl font-black italic text-[#1F3D2B]">"Nous livrons l'excellence, vous en assurez la discipline."</p>
          </div>
        </div>
      </section>

      <section className="bg-[#1F3D2B] text-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl text-[#C6A75E] font-black">RÉACTIVITÉ & ÉQUITÉ : LE SERMENT DU COLLECTIF</h2>
            <p className="text-lg md:text-xl opacity-80">Pour nos partenaires en accompagnement (P3), le temps est une arme.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="p-8 md:p-10 border-2 border-[#C6A75E] space-y-4 bg-[#F5F1E8]/5 shadow-[8px_8px_0px_#C6A75E]">
              <h3 className="text-4xl md:text-5xl font-black text-[#C6A75E]">30 MIN</h3>
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold">Délai maximal pour obtenir une orientation stratégique du collectif ^Prisme.</p>
            </div>
            <div className="p-8 md:p-10 border-2 border-[#C6A75E] space-y-4 bg-[#F5F1E8]/5 shadow-[8px_8px_0px_#C6A75E]">
              <h3 className="text-xl md:text-2xl text-[#C6A75E] font-black">L'ÉQUITÉ</h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">Nos honoraires reflètent la valeur que nous créons pour votre patrimoine. Nous sommes alignés sur votre succès : si votre marque devient une icône, notre mission est remplie.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw] text-center border-t-2 border-[#1F3D2B]">
        <div className="max-w-3xl mx-auto space-y-10 md:space-y-12">
          <h2 className="text-2xl md:text-3xl font-black">PROPRIÉTÉ : LA TRANSMISSION DU POUVOIR</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            L'architecture vous appartient. Une fois l'investissement honoré, vous êtes le seul souverain de votre marque. Arké s'efface pour laisser place à votre règne, ne conservant que le droit de citer votre transformation comme un exemple de l'émergence des nouveaux champions africains.
          </p>
          <div className="pt-8 md:pt-12 flex flex-col items-center gap-8">
            <Link href="/audit">
              <Button className="neo-brutalism-button w-full sm:w-auto bg-[#1F3D2B] text-[#F5F1E8] rounded-none px-8 md:px-12 py-6 md:py-8 font-inter text-sm md:text-lg uppercase tracking-[0.2em] h-auto">
                SOLLICITER UNE COLLABORATION
              </Button>
            </Link>
            <p className="text-[10px] md:text-xs opacity-50 italic font-bold uppercase tracking-widest">"Arké sélectionne ses partenaires sur la base de leur ambition et de leur respect pour l'excellence."</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
