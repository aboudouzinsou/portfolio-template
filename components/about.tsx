"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Code2, Zap, Layers } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes, useEffect, useState } from "react";
import { GithubLogo } from "./icons";

const TechIcon = ({ name, icon }: { name: string; icon: string }) => (
  <div className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent/50 transition-all duration-300 hover:scale-105">
    <div className="w-10 h-10 relative grayscale group-hover:grayscale-0 transition-all duration-300">
      <Image src={icon} alt={name} fill className="object-contain" />
    </div>
    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
      {name}
    </span>
  </div>
);

const TerminalProfile = ({ className }: { className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "ZINSOU François Mawutô Aboudou";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Vitesse de frappe

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className={cn("w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0", className)}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 shadow-2xl group hover:shadow-primary/20 transition-all duration-500">
        {/* Terminal Header */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/80 border-b border-slate-700 flex items-center px-3 gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-slate-400 font-mono ml-2">
            developer.sh
          </span>
        </div>

        {/* Terminal Content */}
        <div className="absolute inset-0 top-8 p-4 font-mono text-sm flex flex-col justify-center">
          <div className="space-y-2">
            <div className="text-green-400 flex items-center gap-2">
              <span>$</span>
              <span className="text-slate-400">whoami</span>
            </div>
            <div className="text-blue-400 ml-4 flex items-center min-h-[1.5rem]">
              <span className="break-words">{displayedText}</span>
              <span
                className={`ml-0.5 w-2 h-5 bg-green-400 ${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              />
            </div>
            <div className="text-green-400 flex items-center gap-2 mt-4">
              <span>$</span>
              <span className="text-slate-400">role</span>
            </div>
            <div className="text-yellow-400 ml-4">Full Stack Developer</div>
            <div className="text-green-400 flex items-center gap-2 mt-4">
              <span>$</span>
              <span className="text-slate-400">specialty</span>
            </div>
            <div className="text-purple-400 ml-4">SaaS Development</div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-10 animate-scan pointer-events-none" />
      </div>
    </div>
  );
};

const About = () => {
  const techStack = {
    frontend: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
    database: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
    ],
  };

  const services = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Développement SaaS complet",
      description: "De l&apos;idée au produit fini en production",
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Applications web sur mesure",
      description: "Gestion, e-commerce, dashboards personnalisés",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "MVP & Prototypes rapides",
      description: "Validez votre concept rapidement",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12 mb-16">
          <TerminalProfile className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              À propos de moi
            </Badge>
            <TerminalProfile className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Expertise technique, approche orientée business
            </h2>
            <p className="text-muted-foreground mb-4 text-justify leading-relaxed">
              Je suis François Mawutô, développeur Full Stack passionné par la
              création de produits digitaux qui résolvent de vrais problèmes. Ma
              spécialité ? Concevoir et développer des SaaS de bout en bout. De
              l&apos;architecture scalable au déploiement en production, je
              maîtrise chaque étape du cycle de développement.
            </p>

            {/* Mon approche */}
            <div className="bg-accent/30 border border-border rounded-xl p-6 mb-6 hover:bg-accent/40 transition-colors duration-300">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Mon approche
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                J&apos;adopte une méthodologie moderne qui combine expertise
                technique solide et intégration stratégique de l&apos;IA.
                L&apos;intelligence artificielle n&apos;est pas un raccourci,
                mais un outil d&apos;optimisation qui me permet d&apos;accélérer
                le développement, d&apos;améliorer la qualité du code et de
                livrer plus rapidement sans compromis.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full group">
                <GithubLogo className="group-hover:scale-110 transition-transform" />
                Voir mon profil GitHub
              </Button>
              <Button variant="outline" className="rounded-full group">
                <Download className="group-hover:scale-110 transition-transform" />
                Télécharger mon CV
              </Button>
            </div>
          </div>
        </div>

        {/* Services proposés */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Services proposés
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:bg-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack technique */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Stack Technique
          </h3>

          {/* Frontend */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {techStack.frontend.map((tech) => (
                <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Backend
            </h4>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {techStack.backend.map((tech) => (
                <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </div>

          {/* Database & Tools */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Database & Tools
            </h4>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {techStack.database.map((tech) => (
                <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
