import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1F3D2B] text-[#F5F1E8] py-20 px-[5vw] md:px-[10vw]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-[0.5px] border-[#C6A75E] pt-12">
        <div className="space-y-6">
          <h3 className="text-[#C6A75E] text-sm tracking-[0.2em]">VISION</h3>
          <p className="text-sm opacity-80 max-w-xs">
            "Démocratiser l'excellence marketing pour que le talent africain ne soit plus trahi par son image."
          </p>
          <p className="font-cinzel text-xs tracking-widest">Arké — L’Artisan de l’Ombre.</p>
        </div>

        <div className="space-y-6">
          <h3 className="text-[#C6A75E] text-sm tracking-[0.2em]">GOUVERNANCE</h3>
          <nav className="flex flex-col gap-4 text-xs uppercase tracking-widest">
            <Link href="/gouvernance" className="hover:text-[#C6A75E] transition-colors">Gouvernance</Link>
            <Link href="/mentions" className="hover:text-[#C6A75E] transition-colors">Mentions Légales</Link>
            <Link href="/charte" className="hover:text-[#C6A75E] transition-colors">Charte d'Usage</Link>
          </nav>
        </div>

        <div className="space-y-6">
          <h3 className="text-[#C6A75E] text-sm tracking-[0.2em]">CONTACT & RÉACTIVITÉ</h3>
          <p className="text-xs uppercase tracking-widest opacity-80">Engagement : "Réponse stratégique sous 30 minutes."</p>
          <p className="text-sm font-bold">Contact Institutionnel Uniquement</p>
        </div>
      </div>
      
      <div className="mt-20 flex justify-end">
        <span className="text-[10px] tracking-[0.3em] opacity-50">^PRISME</span>
      </div>
    </footer>
  );
}
