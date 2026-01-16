"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/approche", label: "Architecture" },
    { href: "/accompagnement", label: "Accompagnement" },
    { href: "/preuves", label: "Preuves" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] z-50 bg-[#F5F1E8]/95 backdrop-blur-[10px] border-b-2 border-[#1F3D2B] flex items-center px-[5vw] md:px-[10vw] justify-between">
      <Link href="/" className="flex items-center">
        <span className="font-cinzel font-bold text-[20px] md:text-[24px] text-[#1F3D2B] tracking-[0.15em]">ARKÉ</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.label}
            href={link.href} 
            className="font-inter text-[12px] uppercase tracking-wider hover:text-[#C6A75E] transition-colors font-medium"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link href="/audit">
          <Button className="neo-brutalism-button hidden sm:flex bg-[#C6A75E] text-[#1F3D2B] rounded-none px-4 md:px-6 py-2 font-inter text-[10px] md:text-[12px] uppercase tracking-widest h-auto">
            INITIER L'AUDIT
          </Button>
        </Link>

        {/* Mobile Menu Trigger */}
        {mounted && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-2 border-[#1F3D2B] rounded-none">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#F5F1E8] border-l-2 border-[#1F3D2B] p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu de Navigation</SheetTitle>
                <SheetDescription>Accédez aux différentes sections du site Arké.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col h-full pt-20 px-8 gap-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href} 
                    className="font-cinzel text-2xl uppercase tracking-widest border-b border-[#1F3D2B]/10 pb-4"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/audit">
                  <Button className="neo-brutalism-button bg-[#C6A75E] text-[#1F3D2B] rounded-none w-full py-6 mt-4">
                    INITIER L'AUDIT
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
}
