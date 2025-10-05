import { Separator } from "@/components/ui/separator";
import { Logo } from "./navbar/logo";
import Link from "next/link";
import { FacebookLogo, GithubLogo } from "./icons";

const footerLinks = [
  {
    title: "À propos",
    href: "#about",
  },
  {
    title: "Expérience",
    href: "#experience",
  },
  {
    title: "Projets",
    href: "#projects",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <Logo />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} ZINSOU François Mawutô Aboudou.
            Tous droits réservés.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="https://github.com/aboudouzinsou" target="_blank">
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com/francois.SaasXpert/"
              target="_blank"
            >
              <FacebookLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
