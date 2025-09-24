import Link from 'next/link';
import Image from 'next/image';
import { PawPrint, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HomePage() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://cdn.pixabay.com/photo/2021/01/02/23/55/dog-5883275_960_720.jpg"
            alt="Perro feliz asomándose por la ventana de un coche"
            fill
            className="object-cover"
            priority
            data-ai-hint="happy dog"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container px-4 md:px-6">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl font-headline">
              El Pasaporte de Confianza para tu Mascota
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
              Un estándar de transparencia para la comunidad pet-friendly. Valora el comportamiento de las mascotas y encuentra alojamientos que las aceptan con los brazos abiertos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Únete a la Comunidad
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8">
                Descubre Cómo Funciona
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <PawPrint className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Pasaporte Digital</h3>
                <p className="text-muted-foreground">
                  Crea un perfil verificado para tu mascota con su historial de comportamiento, facilitando su aceptación en cualquier lugar.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Valoraciones Objetivas</h3>
                <p className="text-muted-foreground">
                  Los alojamientos valoran a las mascotas, creando un sistema de confianza que beneficia a dueños y negocios.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">Comunidad de Confianza</h3>
                <p className="text-muted-foreground">
                  Conecta con hoteles, guarderías y cuidadores que apuestan por un entorno seguro y transparente para todos.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
            <div className="container text-center px-4">
                <h2 className="text-3xl font-bold font-headline mb-4">¿Eres un alojamiento Pet-Friendly?</h2>
                <p className="text-lg max-w-3xl mx-auto mb-8">Únete a nuestra creciente red para atraer a los dueños de mascotas más responsables, reducir la incertidumbre y posicionarte como un líder en la comunidad pet-friendly.</p>
                <Link href="/signup?tab=hotel" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8">
                  Registra tu Negocio
                </Link>
            </div>
        </section>

      </main>
    </div>
  );
}
