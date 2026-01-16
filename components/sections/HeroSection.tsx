"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  ctaText: string;
  description?: string;
}

export function HeroSection({ videoSrc, title, subtitle, ctaText, description }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center px-[5vw] md:px-[10vw] pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <span className="text-[#C6A75E] font-cinzel text-xs md:text-sm tracking-[0.3em] mb-6 block border-l-2 border-[#C6A75E] pl-4">
            {title}
          </span>
          <h1 className="text-[32px] sm:text-[48px] md:text-[72px] lg:text-[90px] leading-[1.1] mb-8 font-black break-words w-full">
            {subtitle}
          </h1>
          {description && (
            <p className="text-base md:text-xl max-w-2xl mb-12 opacity-90 leading-relaxed font-bold">
              {description}
            </p>
          )}
          <div className="w-full sm:w-auto">
            <Link href="/audit">
              <Button className="neo-brutalism-button w-full sm:w-auto bg-[#C6A75E] text-[#1F3D2B] rounded-none px-8 md:px-12 py-6 md:py-8 font-inter text-xs md:text-sm uppercase tracking-[0.2em] h-auto">
                {ctaText}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1F3D2B]" />
    </section>
  );
}
