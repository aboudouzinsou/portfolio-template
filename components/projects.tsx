import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  challenge: string;
  impact: string[];
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  challenge,
  impact,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
}: ProjectCardProps) => {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-xl border transition-all hover:shadow-xl ${
        featured
          ? "border-primary/50 bg-primary/5 hover:border-primary"
          : "border-border bg-card hover:border-primary/50"
      }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-primary text-primary-foreground shadow-lg">
            <Sparkles className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Challenge & Impact */}
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-semibold text-foreground mb-1">Le défi :</p>
            <p className="text-muted-foreground">{challenge}</p>
          </div>

          {impact.length > 0 && (
            <div>
              <p className="font-semibold text-foreground mb-1">Impact :</p>
              <ul className="space-y-1">
                {impact.map((item, index) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-full text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-2">
          {liveUrl && (
            <Button variant="default" className="rounded-full flex-1" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-4 w-4" />
                Voir le projet
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1.5 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Wizemly - Plateforme SaaS E-commerce",
      description:
        "Plateforme SaaS complète qui génère automatiquement des boutiques en ligne personnalisables avec gestion intégrée des produits, commandes et paiements.",
      challenge:
        "Permettre aux petites entreprises béninoises de vendre en ligne facilement, sans investissement technique lourd ni compétences en développement.",
      impact: [
        "Plateforme en production accessible publiquement",
        "Architecture multi-tenant prête pour la scalabilité",
        "Interface optimisée pour les utilisateurs non-techniques",
      ],
      image: "/projets/wizemly.png",
      technologies: [
        "Next.js 14",
        "Supabase",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      liveUrl: "https://wizemly.eazysell-bj.com",
      featured: true,
    },
    {
      title: "Eazy Relance - Mini CRM de Relance Client",
      description:
        "Application CRM intuitive permettant de gérer et automatiser les relances clients en fonction des échéances définies.",
      challenge:
        "Simplifier la gestion des relances clients pour les petites entreprises sans système CRM complexe et coûteux.",
      impact: [
        "Automatisation des relances par échéance",
        "Interface simple et efficace",
        "Gestion centralisée des clients",
      ],
      image: "/placeholder.svg",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Tailwind CSS",
        "Shadcn UI",
        "Better-Auth",
      ],
      liveUrl: "https://relance.eazysell-bj.com",
    },
    {
      title: "Eazy FeedbackLite - Collecte de Feedbacks IA",
      description:
        "Application de collecte et d'analyse de feedbacks clients utilisant l'IA pour générer des recommandations actionnables.",
      challenge:
        "Transformer les retours clients bruts en insights exploitables grâce à l'analyse automatisée par IA.",
      impact: [
        "Analyse automatique des feedbacks par IA",
        "Recommandations personnalisées",
        "Dashboard d'insights en temps réel",
      ],
      image: "/projets/feedbacklite.png",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Supabase",
        "Supabase Auth",
        "Shadcn UI",
        "IA",
      ],
      liveUrl: "https://feedbacklite.eazysell-bj.com",
      featured: true,
    },
    {
      title: "Landing Pages Haute Conversion",
      description:
        "Portfolio de landing pages créées pour divers clients et projets, optimisées pour la performance et la conversion.",
      challenge:
        "Créer des pages d'atterrissage qui convertissent les visiteurs en clients tout en maintenant d'excellentes performances.",
      impact: [
        "Scores Lighthouse > 90/100",
        "Design moderne et responsive",
        "SEO on-page optimisé",
        "Temps de chargement < 2s",
      ],
      image: "/projets/landing.png",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn UI",
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projets
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Réalisations Sélectionnées
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-2xl mx-auto">
            Des projets en production qui démontrent ma capacité à concevoir et
            livrer des solutions complètes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 rounded-2xl border border-dashed border-primary/50 bg-primary/5">
          <h3 className="text-2xl font-bold mb-3">
            Vous avez un projet en tête ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Que ce soit un SaaS, une application web sur mesure ou une landing
            page, discutons de comment je peux vous aider à concrétiser votre
            vision.
          </p>
          <Button size="lg" className="rounded-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            Lançons votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
