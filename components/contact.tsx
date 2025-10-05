"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

type Status = "idle" | "loading" | "success" | "error";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

const Contact = (): React.JSX.Element => {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Simple client-side validation rapide
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.projectType.trim() ||
      !formData.budget.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Tous les champs marqués * sont obligatoires.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const text = await response.text().catch(() => null);
        throw new Error(text || "Erreur lors de l'envoi du message");
      }

      setStatus("success");

      // Reset form
      setFormData(initialData);

      // Fermer le dialog après succès
      setTimeout(() => setIsOpen(false), 1500);

      // Réinitialiser le statut d'affichage du message
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-20 px-6 bg-muted/30">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Lançons votre projet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Parlez-moi de votre projet et recevez un devis personnalisé sous 24h
          </p>
        </div>

        {/* Dialog avec formulaire */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="rounded-full mx-auto flex">
              <ExternalLink className="mr-2 h-4 w-4" />
              Lançons votre projet
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Parlez-moi de votre projet
              </DialogTitle>
              <DialogDescription>
                Remplissez ce formulaire et je vous réponds sous 24h avec un
                devis personnalisé
              </DialogDescription>
            </DialogHeader>

            {/* Success/Error Messages */}
            {status === "success" && (
              <Alert className="mb-6 border-green-500 bg-green-500/10">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertDescription className="text-green-700 dark:text-green-400">
                  Message envoyé avec succès ! Je vous réponds sous 24h.
                </AlertDescription>
              </Alert>
            )}

            {status === "error" && (
              <Alert className="mb-6 border-destructive bg-destructive/10">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <AlertDescription className="text-destructive">
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 space-y-6"
            >
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    Prénom <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Jean"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Nom <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Dupont"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Téléphone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+229 XX XX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <Label htmlFor="projectType">
                  Type de projet <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    handleSelectChange("projectType", value)
                  }
                  disabled={status === "loading"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un type de projet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="saas">SaaS complet</SelectItem>
                    <SelectItem value="web-app">
                      Application web sur mesure
                    </SelectItem>
                    <SelectItem value="landing">Landing page</SelectItem>
                    <SelectItem value="ecommerce">Site e-commerce</SelectItem>
                    <SelectItem value="vitrine">Site vitrine</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label htmlFor="budget">
                  Budget estimé <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => handleSelectChange("budget", value)}
                  disabled={status === "loading"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une fourchette" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="150-250k">150k - 250k FCFA</SelectItem>
                    <SelectItem value="250-500k">250k - 500k FCFA</SelectItem>
                    <SelectItem value="500k-1m">500k - 1M FCFA</SelectItem>
                    <SelectItem value="1m+">Plus de 1M FCFA</SelectItem>
                    <SelectItem value="non-defini">Non défini</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">
                  Décrivez votre projet{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Parlez-moi de votre projet, vos objectifs, vos contraintes..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer ma demande
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Vous recevrez une réponse sous 24h maximum
              </p>
            </form>
          </DialogContent>
        </Dialog>

        {/* Contact Alternatives (en dehors du dialog) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl border border-border bg-card hover:bg-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h4 className="font-semibold mb-1">Email</h4>
            <a
              href="mailto:faboudou.zinsou@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              faboudou.zinsou@gmail.com
            </a>
          </div>

          <div className="text-center p-6 rounded-xl border border-border bg-card hover:bg-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <h4 className="font-semibold mb-1">Téléphone</h4>
            <a
              href="tel:+22967266360"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              +229 67 26 63 60
            </a>
          </div>

          <div className="text-center p-6 rounded-xl border border-border bg-card hover:bg-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <svg
                className="w-6 h-6 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </div>
            <h4 className="font-semibold mb-1">LinkedIn</h4>
            <a
              href="https://linkedin.com/in/aboudouzinsou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              @aboudouzinsou
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
