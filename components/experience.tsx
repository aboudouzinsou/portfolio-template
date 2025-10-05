import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
  link,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted last:hidden">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background group-hover:scale-125 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6 rounded-xl border border-border bg-card hover:bg-accent/30 transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 size-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Building2 className="size-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{company}</h3>
              <p className="text-sm text-muted-foreground">{title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="size-4" />
            <span className="whitespace-nowrap">{period}</span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">
              Réalisations clés :
            </p>
            <ul className="space-y-1.5">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="rounded-full text-xs hover:bg-primary/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Link if available */}
        {link && (
          <Button variant="link" className="p-0 h-auto text-primary" asChild>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 group/link"
            >
              <span className="group-hover/link:underline">Voir le projet</span>
              <ExternalLink className="size-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Développement SaaS - Wizemly",
      company: "EAZYSELL BJ",
      period: "Janvier 2025 - Présent",
      description:
        "Conception et développement d'une plateforme SaaS e-commerce permettant aux entrepreneurs de créer et gérer leurs boutiques en ligne sans compétences techniques.",
      achievements: [
        "Architecture multi-tenant scalable pour supporter plusieurs boutiques",
        "Système de gestion complet (produits, commandes, clients)",
        "Interface d'administration intuitive et performante",
        "Optimisation SEO et performances (Core Web Vitals)",
      ],
      technologies: [
        "Next.js",
        "Supabase",
        "Prisma",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS",
      ],
      link: "https://wizemly.eazysell-bj.com/",
    },
    {
      title: "Développeur Full Stack - Stage Académique",
      company: "BUCO International",
      period: "Avril - Juin 2024",
      description:
        "Développement d'une application web complète de gestion de librairie avec système d'inventaire sophistiqué.",
      achievements: [
        "Application de gestion complète avec authentification sécurisée",
        "Module d'inventaire avec suivi en temps réel des stocks",
        "Gestion multi-entités (produits, fournisseurs, commandes)",
        "Interface responsive et intuitive",
        "Collaboration sur l'architecture et les bonnes pratiques code",
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Next.js"],
    },
    {
      title: "Licence en Informatique de Gestion",
      company: "ENEAM - École Nationale d'Économie Appliquée et de Management",
      period: "2022 - Présent",
      description:
        "Formation académique avec spécialisation en administration des réseaux informatiques. Focus sur la gestion d'infrastructures réseaux, serveurs de base de données et de sécurité.",
      achievements: [
        "Conception de bases de données relationnelles complexes",
        "Développement d'applications web",
        "Analyse et modélisation de systèmes d'information",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Python",
        "SQL",
        "UML",
        "Administration de bases de données",
        "Administration de réseaux informatiques",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6 bg-muted/30">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Expérience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Parcours & Réalisations
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-2xl mx-auto">
            Des projets concrets qui démontrent ma capacité à livrer des
            solutions en production
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
