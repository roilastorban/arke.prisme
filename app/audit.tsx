"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { toast } from "sonner";

function AuditForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const level = searchParams.get("level") || "P1";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      level,
      name: formData.get("name"),
      email: formData.get("email"),
      brand: formData.get("brand"),
      details: formData.get("details"),
      ambition: formData.get("ambition"),
    };

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Protocole transmis. Redirection vers le choix du paiement...");
        // Redirection vers la page de choix du mode de paiement
        router.push(`/paiement/choix?level=${level}`);
      } else {
        toast.error("Erreur lors de la transmission. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormFields = () => {
    switch (level) {
      case "P3":
        return (
          <>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest">Quelle est votre ambition de rayonnement international à 24 mois ?</label>
              <Textarea name="ambition" required className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" placeholder="Décrivez vos objectifs d'exportation et de prestige..." />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest">Détails du projet (Confidentiel)</label>
              <Textarea name="details" required className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" placeholder="Expliquez pourquoi vous avez besoin d'un gardien permanent..." />
            </div>
          </>
        );
      case "P2":
        return (
          <>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest">Besoin prioritaire en structuration</label>
              <Textarea name="details" required className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" placeholder="Identité visuelle, écosystème digital, guide de marque..." />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest">Ambition à 12 mois</label>
              <Input name="ambition" required className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" placeholder="Exportation, leader national, levée de fonds..." />
            </div>
          </>
        );
      case "P1":
      default:
        return (
          <>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest">Quelle est votre plus grande "fracture" actuelle ?</label>
              <Textarea 
                name="details"
                required
                className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E] min-h-[150px]" 
                placeholder="Décrivez pourquoi vous pensez que votre image trahit votre talent..." 
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest">Où perdez-vous le plus de clients aujourd'hui ?</label>
              <Input name="ambition" required className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" placeholder="En rayon, sur le web, lors des rendez-vous..." />
            </div>
          </>
        );
    }
  };

  const getTitle = () => {
    if (level === "P3") return "SOLLICITER LE GARDIENNAGE";
    if (level === "P2") return "BÂTIR VOTRE STRUCTURE";
    return "INITIER LE DIAGNOSTIC";
  };

  return (
    <section className="bg-[#F5F1E8] py-20 md:py-32 px-[5vw] md:px-[10vw]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 space-y-4">
          <h1 className="text-[32px] md:text-[48px] font-black border-b-4 border-[#1F3D2B] pb-4 inline-block">
            {getTitle()}
          </h1>
          <p className="text-lg opacity-80">
            Niveau sélectionné : <span className="font-black text-[#C6A75E]">{level}</span>. 
            Remplissez ce protocole pour que le collectif ^Prisme puisse analyser votre capital-marque.
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest">Nom Complet</label>
              <Input name="name" required className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" placeholder="Jean Dupont" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest">Email Institutionnel</label>
              <Input name="email" type="email" required className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" placeholder="contact@entreprise.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest">Nom de la Marque / Produit</label>
            <Input name="brand" required className="rounded-none border-2 border-[#1F3D2B] bg-white p-6 focus:ring-0 focus:border-[#C6A75E]" placeholder="Votre Marque" />
          </div>

          {renderFormFields()}

          <div className="pt-8">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="neo-brutalism-button w-full bg-[#1F3D2B] text-[#F5F1E8] rounded-none py-8 text-lg font-black uppercase tracking-[0.2em] h-auto disabled:opacity-50"
            >
              {isSubmitting ? "TRANSMISSION..." : "SOUMETTRE À L'EXPERTISE"}
            </Button>
            <p className="mt-6 text-[10px] text-center opacity-50 italic uppercase tracking-widest">
              En soumettant ce formulaire, vous signez un pacte de confidentialité avec Arké.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function AuditPage() {
  return (
    <main className="min-h-screen pt-[80px]">
      <Header />
      <Suspense fallback={<div className="p-20 text-center">Chargement...</div>}>
        <AuditForm />
      </Suspense>
      <Footer />
    </main>
  );
}
