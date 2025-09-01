"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Star, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockPets } from '@/lib/data';
import { useRef } from 'react';


export default function Home() {
  const happyPets = mockPets.slice(0, 6);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
          <Image
            src="https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg"
            alt="Un perro y un gato sentados juntos"
            fill
            className="object-cover -z-10"
            data-ai-hint="cute pets group"
            priority
          />
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-headline font-black tracking-tight">
                  PetScore
                </h1>
                <p className="max-w-[600px] mx-auto text-white/90 md:text-xl">
                  El carnet de comportamiento que tu mascota merece.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg">
                  <Link href="/register">Registra a tu mascota</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/login?role=hotel">Soy un Hotel</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Confianza y Transparencia</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Una herramienta esencial para dueños responsables y establecimientos pet-friendly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/register" className="block">
                <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/20 text-primary p-4 rounded-full w-fit">
                      <Award className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-4 font-headline">Carnet Digital</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Un perfil único y verificable para tu mascota, con su historial de comportamiento siempre a mano.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/register" className="block">
                <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/20 text-primary p-4 rounded-full w-fit">
                      <Star className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-4 font-headline">Puntuaciones Reales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Evaluaciones objetivas de hoteles y cuidadores que reflejan la conducta real de tu compañero.</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/register" className="block">
                <Card className="text-center h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/20 text-primary p-4 rounded-full w-fit">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-4 font-headline">Confianza para Todos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Facilita la admisión en nuevos lugares y genera confianza en la comunidad pet-friendly.</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Nuestros Miembros Felices</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {happyPets.map((pet) => (
                <Link onClick={playSound} href={`/dashboard/pets/${pet.id}`} key={pet.id} className="block aspect-square relative rounded-lg overflow-hidden shadow-md group">
                  <Image src={pet.imageUrl} alt={pet.name} data-ai-hint={pet.type === 'dog' ? "happy dog" : "happy cat"} fill className="object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-3 text-white">
                    <p className="font-bold">{pet.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <audio ref={audioRef} src="data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU2LjQwLjEwMQAAAAAAAAAAAAAA//OEAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6v////////////////////////////////8AAAAATGF2YzU2LjQxAAAAAAAAAAAAAAAAIMFtxzsAAASIAnWGABwAAAAAAAAAAAAAAAAFADYABQAAAP8A//OUxAsAAANIAAAAAExBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==" preload="auto" />
    </div>
  );
}
