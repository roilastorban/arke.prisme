import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/sections/HeroSection";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HUMANIK",
    subtitle: "L'ACCÉLÉRATEUR DE RAYONNEMENT",
    description: "Transformation radicale d'une plateforme d'emploi en un organisme vivant. Nous avons brisé le système de croyances traditionnel pour imposer une 'Marque-Provocatrice'. Ici, l'emploi court après le talent grâce à la preuve vivante et au rayonnement numérique.",
    url: "https://pure-glow.lovable.app/",
    tags: ["Philosophie 'Rayonne ou disparaît!'", "Interface 'Feed Vedette' (TikTok-style)", "Algorithme de réputation 'Human Score'", "Protection cryptographique 'Brevet Moral'"]
  },
  {
    title: "OBJEKTÉ",
    subtitle: "L'INGÉNIERIE DE LA PURETÉ",
    description: "Élévation d'un filtre à eau au rang d'objet design et technologique indispensable. Nous avons créé un 'Océan de Pureté' numérique pour contraster avec la pollution urbaine, utilisant le Glassmorphism pour incarner la transparence et la modernité.",
    url: "https://objekte-amber.vercel.app/",
    tags: ["Concept visuel 'Ocean Blue Sky'", "Structure Bento & Glassmorphism", "Calculatrice d'économie rationnelle", "Tunnel de vente WhatsApp direct"]
  },
  {
    title: "EMILE SOGNON-DES",
    subtitle: "L'INSTITUTION MINIÈRE",
    description: "Cristallisation d'une expertise soviétique en une marque d'autorité absolue. Emile SOGNON-DES n'est plus un individu, c'est 'L'Ultime Recours'. Une architecture de valeur qui transforme l'incertitude en prévisibilité technique pour les investisseurs internationaux.",
    url: "https://emile-sognon-des.vercel.app/",
    tags: ["Positionnement 'Expert-Souverain'", "ADN 'Facteur Moscou' (Rigueur Russe)", "Offre de 'Souveraineté Opérationnelle'", "Esthétique Néo-Brutaliste Industrielle"]
  }
];

export default function Preuves() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* HERO SECTION */}
      <HeroSection 
        videoSrc="/videos/hero-home-new.mp4"
        title="LA PREUVE PAR L'ŒUVRE"
        subtitle="NOS INTERVENTIONS STRATÉGIQUES."
        description="Nous ne décorons pas. Nous bâtissons des institutions. Découvrez comment Arké transforme des visions brutes en autorités souveraines sur leurs marchés respectifs."
        ctaText="VOIR NOS RÉALISATIONS"
      />

      {/* PROJECTS LIST */}
      <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw] space-y-32">
        {projects.map((project, index) => (
          <div key={project.title} className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="space-y-4">
                <span className="text-[#C6A75E] font-cinzel text-xs md:text-sm tracking-[0.3em] font-black uppercase">
                  {project.subtitle}
                </span>
                <h2 className="text-[32px] md:text-[56px] font-black leading-tight text-[#1F3D2B]">
                  {project.title}
                </h2>
              </div>
              <p className="text-lg opacity-80 leading-relaxed">
                {project.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.tags.map(tag => (
                  <div key={tag} className="p-4 border-2 border-[#1F3D2B] bg-white text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_#C6A75E]">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <Link href={project.url} target="_blank">
                  <Button className="neo-brutalism-button bg-[#C6A75E] text-[#1F3D2B] rounded-none px-8 py-6 font-inter text-sm uppercase tracking-[0.2em] h-auto flex gap-4 items-center">
                    EXPLORER L'ŒUVRE <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stylized Preview Card */}
            <div className={`relative aspect-video border-4 border-[#1F3D2B] bg-[#1F3D2B] shadow-[20px_20px_0px_#C6A75E] overflow-hidden group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <iframe 
                src={project.url} 
                className="w-full h-full border-none opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
                title={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D2B] to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[#F5F1E8] font-cinzel text-sm tracking-[0.3em] font-black">APERÇU LIVE</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1F3D2B] text-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw] text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-[32px] md:text-[48px] font-black text-[#C6A75E]">PRÊT À RAYONNER ?</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-80">
            Votre excellence mérite une structure à sa hauteur. Ne laissez plus votre image être le plafond de votre ambition.
          </p>
          <div className="pt-8">
            <Link href="/audit">
              <Button className="neo-brutalism-button bg-[#C6A75E] text-[#1F3D2B] rounded-none px-12 py-8 font-inter text-lg uppercase tracking-[0.2em] h-auto">
                INITIER MA TRANSFORMATION
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
