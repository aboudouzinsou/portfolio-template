"use client";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12",
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Développeur web full-stack
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Je transforme vos idées en SaaS qui génèrent des revenus
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Développeur Full Stack spécialisé dans la création de plateformes SaaS
          et d&apos;applications web performantes. De l&apos;e-commerce aux
          systèmes de gestion, je livre des solutions modernes qui font la
          différence. 🚀
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-full text-base"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Voir mes réalisations{" "}
            <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
