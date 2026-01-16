import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Charte() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Header />
      
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          <div className="space-y-6">
            <h1 className="text-[#C6A75E] text-[32px] md:text-[64px] font-black leading-tight">LA DISCIPLINE COMME MOTEUR DE VALEUR.</h1>
            <p className="text-lg md:text-xl leading-relaxed">
              La valeur d’une marque ne se construit pas sur la nouveauté, mais sur la répétition. Une identité qui change est une identité qui s'efface. Ce protocole lie l'utilisateur à la préservation rigoureuse de son Capital-Marque pour garantir la pérennité de son investissement.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl text-[#1F3D2B] font-black border-l-4 border-[#C6A75E] pl-6">ARTICLE 1 : L’INTÉGRITÉ DU SCEAU</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 p-8 border-2 border-[#1F3D2B] bg-white shadow-[4px_4px_0px_#C6A75E]">
                  <p className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-[#C6A75E]">L'Interdiction</p>
                  <p className="text-sm md:text-base opacity-80 leading-relaxed">Le logo fourni par Arké est le sceau de votre autorité. Il est strictement interdit de le déformer, de modifier sa colorimétrie, d'en altérer la typographie ou d'isoler ses composants sans validation préalable.</p>
                </div>
                <div className="space-y-4 p-8 border-2 border-[#1F3D2B] bg-white shadow-[4px_4px_0px_#C6A75E]">
                  <p className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-[#C6A75E]">La Conséquence</p>
                  <p className="text-sm md:text-base opacity-80 leading-relaxed">Toute altération annule l'Effet de Halo et réintroduit le doute dans l'esprit de votre client. Une image "bricolée" est un signal de baisse de qualité immédiat pour votre produit.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl text-[#1F3D2B] font-black border-l-4 border-[#C6A75E] pl-6">ARTICLE 2 : L'ARCHITECTURE NUMÉRIQUE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 p-8 border-2 border-[#1F3D2B] bg-white shadow-[4px_4px_0px_#C6A75E]">
                  <p className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-[#C6A75E]">La Règle</p>
                  <p className="text-sm md:text-base opacity-80 leading-relaxed">L’utilisation des templates (réseaux sociaux, présentations, signatures) fournis par Arké est la seule méthode autorisée pour communiquer.</p>
                </div>
                <div className="space-y-4 p-8 border-2 border-[#1F3D2B] bg-white shadow-[4px_4px_0px_#C6A75E]">
                  <p className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-[#C6A75E]">La Restriction</p>
                  <p className="text-sm md:text-base opacity-80 leading-relaxed">L’introduction d’éléments visuels extérieurs (stickers, polices système, filtres non approuvés) rompt la cohérence architecturale. Votre marque doit parler d'une seule voix, sur tous les écrans.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl text-[#1F3D2B] font-black border-l-4 border-[#C6A75E] pl-6">ARTICLE 3 : RESPONSABILITÉ ET PÉRENNITÉ</h2>
              <div className="space-y-6 p-8 border-2 border-[#1F3D2B] bg-white shadow-[8px_8px_0px_#C6A75E]">
                <p className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-[#C6A75E]">Le Transfert de Garde</p>
                <p className="text-sm md:text-base opacity-80 leading-relaxed">À la livraison, l’entrepreneur devient le seul gardien de son prestige. Arké décline toute responsabilité en cas de dépréciation de la marque résultant d'une gestion visuelle anarchique.</p>
                <p className="text-xl md:text-2xl font-black mt-8 border-t-2 border-[#1F3D2B] pt-8">Le Verdict : Nous érigeons la structure ; vous en assurez la survie par la discipline.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
