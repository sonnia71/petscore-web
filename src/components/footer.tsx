import Link from 'next/link';
import { Logo } from './Logo';
import { Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 PetScore. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary">
            Cómo Funciona
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
            Nosotros
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
            Contacto
          </Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
            Privacidad
          </Link>
          <Link href="https://instagram.com/petscore_carnet" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
