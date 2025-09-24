import Link from 'next/link';
import { Logo } from './Logo';
import { Menu } from 'lucide-react';

export const Header = () => {
  const navLinks = [
    { href: '/how-it-works', label: 'Cómo Funciona' },
    { href: '/directory', label: 'Alojamientos' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        
        <div className="md:hidden mr-4">
            <Menu className="h-6 w-6" />
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
           <div className="md:hidden flex-1">
             <Link href="/">
                <Logo />
            </Link>
           </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Iniciar Sesión
            </Link>
            <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
