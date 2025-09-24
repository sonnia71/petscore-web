import { UserPlus, Hotel, Star, ShieldCheck, Building, PawPrint, ClipboardCheck, Users, ArrowDown } from "lucide-react";
import Link from "next/link";


export default function HowItWorksPage() {
  return (
    <div>
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 text-center text-white"
        style={{ 
          backgroundImage: "url('https://cdn.pixabay.com/photo/2021/01/02/23/55/dog-5883275_960_720.jpg')",
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Cómo Funciona PetScore</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Un sistema simple y transparente para crear un estándar de confianza entre dueños de mascotas y alojamientos.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline text-center">Para Dueños de Mascotas</h2>
            <div className="flex flex-col items-center gap-4">

              <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-row items-center gap-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <UserPlus className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline">1. Registra a tu Mascota</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">Crea un perfil único para tu mascota en segundos. Este será su pasaporte digital verificado.</p>
                </div>
              </div>

              <ArrowDown className="w-6 h-6 text-muted-foreground" />

              <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-row items-center gap-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Hotel className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline">2. Alójate en la Red PetScore</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">Encuentra y alójate en hoteles y guarderías que confían en el sistema PetScore.</p>
                </div>
              </div>

              <ArrowDown className="w-6 h-6 text-muted-foreground" />

              <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-row items-center gap-4 p-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-headline">3. Recibe Valoraciones</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">Tras cada estancia, el alojamiento valora el comportamiento de tu mascota, construyendo un historial de confianza.</p>
                </div>
              </div>

                <ArrowDown className="w-6 h-6 text-muted-foreground" />

                <div className="w-full rounded-lg border-primary bg-primary/10">
                    <div className="flex flex-row items-center gap-4 p-6">
                    <div className="bg-primary/20 p-3 rounded-full">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline">4. Viaja con Tranquilidad</h3>
                    </div>
                    <div className="p-6 pt-0">
                    <p>Tu mascota tendrá un carnet verificado que demuestra su buen comportamiento, abriendo puertas a más lugares.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="space-y-8">
             <h2 className="text-3xl font-bold font-headline text-center">Para Negocios y Alojamientos</h2>
             <div className="flex flex-col items-center gap-4">
                <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-row items-center gap-4 p-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <Building className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline">1. Registra tu Negocio</h3>
                    </div>
                    <div className="p-6 pt-0">
                    <p className="text-muted-foreground">Únete a nuestra red de alojamientos pet-friendly y obtén visibilidad ante miles de dueños responsables.</p>
                    </div>
                </div>

                <ArrowDown className="w-6 h-6 text-muted-foreground" />

                <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-row items-center gap-4 p-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <PawPrint className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline">2. Recibe Huéspedes PetScore</h3>
                    </div>
                    <div className="p-6 pt-0">
                    <p className="text-muted-foreground">Reduce la incertidumbre al aceptar mascotas. Accede al historial de comportamiento de cada una antes de confirmar la reserva.</p>
                    </div>
                </div>

                <ArrowDown className="w-6 h-6 text-muted-foreground" />

                <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-row items-center gap-4 p-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <ClipboardCheck className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline">3. Valora a tus Huéspedes</h3>
                    </div>
                    <div className="p-6 pt-0">
                    <p className="text-muted-foreground">Tu opinión es clave. Valora a las mascotas tras su estancia y ayuda a construir una comunidad más segura y transparente.</p>
                    </div>
                </div>

                <ArrowDown className="w-6 h-6 text-muted-foreground" />

                <div className="w-full rounded-lg border-primary bg-primary/10">
                    <div className="flex flex-row items-center gap-4 p-6">
                    <div className="bg-primary/20 p-3 rounded-full">
                        <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-headline">4. Atrae a los Mejores Clientes</h3>
                    </div>
                    <div className="p-6 pt-0">
                    <p>Posiciónate como un negocio de confianza y atrae a los dueños de mascotas más responsables.</p>
                    </div>
                </div>
             </div>
          </div>

        </div>

         <section className="w-full py-12 md:py-24 text-center">
            <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                    Listos para unirse a la comunidad?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Tanto si eres un dueño orgulloso como un negocio innovador, PetScore es tu sitio.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                    <Link href="/signup" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                        Registrarse Ahora
                    </Link>
                     <Link href="/directory" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium h-11 px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                        Ver Alojamientos
                    </Link>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}
