import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, CheckCheck, Star, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  El Pasaporte de Buen Comportamiento para tu Mascota
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                  Para viajar con tranquilidad, primero une a tu mascota a la comunidad. Registra su perfil y empieza a construir su historial de confianza verificado por profesionales.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Link href="/signup">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Registra a tu mascota
                  </Button>
                </Link>
                <Link href="/signup?tab=hotel">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Soy un Negocio
                  </Button>
                </Link>
              </div>
            </div>
             <div className="relative group animate-[float_4s_ease-in-out_infinite]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-[shine_5s_linear_infinite]"></div>
              <Card className="relative bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="text-center pb-2">
                    <Trophy className="mx-auto h-12 w-12 text-yellow-500" />
                    <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600 font-headline">
                        Mascota Bien Educada del Mes
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <Image
                        src="https://cdn.pixabay.com/photo/2018/05/11/08/11/pets-3389725_960_720.jpg"
                        alt="Mascota del mes"
                        width={400}
                        height={400}
                        className="rounded-lg object-cover aspect-square mx-auto shadow-lg border-4 border-yellow-400"
                        data-ai-hint="well behaved pet"
                    />
                    <p className="mt-4 text-lg font-semibold">Max, el Viajero Ejemplar</p>
                    <p className="text-sm text-muted-foreground">"Max ha demostrado un comportamiento excepcional en todos sus alojamientos."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Características Clave</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Confianza para Viajar, Seguridad para Alojar</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                PetScore es la herramienta que une a dueños responsables con alojamientos pet-friendly que buscan recibir mascotas con total seguridad.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <div className="grid gap-4 text-center p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline">Carnet Digital Verificado</h3>
              <p className="text-sm text-muted-foreground">
                Un perfil único para tu mascota con un historial de comportamiento objetivo, creado por profesionales y cuidadores reales.
              </p>
            </div>
            <div className="grid gap-4 text-center p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Star className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline">Evaluaciones Objetivas</h3>
              <p className="text-sm text-muted-foreground">
                Puntuaciones reales de hoteles que admiten perros y otros animales, reflejando la conducta de tu compañero y generando confianza.
              </p>
            </div>
            <div className="grid gap-4 text-center p-6 rounded-lg border bg-card shadow-sm">
              <div className="flex justify-center items-center mb-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CheckCheck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-headline">Más Admisiones, Menos Riesgos</h3>
              <p className="text-sm text-muted-foreground">
                Facilitamos la admisión en alojamientos pet-friendly y reducimos la incertidumbre para los negocios que quieren aceptar mascotas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Únete a la Comunidad PetScore
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Listo para embarcarte en nuevas aventuras con tu mascota? ¿O quieres mostrar cuánto les das la bienvenida?
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link href="/signup">
                <Button size="lg">Regístrate Ahora</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full">
        <Image
            src="https://cdn.pixabay.com/photo/2022/03/16/18/38/irish-red-setters-7073063_960_720.jpg"
            alt="Two dogs running on the beach"
            width={1280}
            height={400}
            className="w-full h-auto max-h-[400px] object-cover"
            data-ai-hint="dogs beach"
          />
      </section>

       <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              Viaja con la Tranquilidad que te Mereces
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Demuestra el buen comportamiento de tu perro con un historial verificado y accede a los mejores hoteles y alojamientos que admiten mascotas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

