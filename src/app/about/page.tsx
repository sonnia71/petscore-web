import { PawPrint, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Nuestra Misión</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Crear un estándar de confianza y transparencia en la comunidad pet-friendly, facilitando una convivencia armoniosa entre mascotas, dueños y establecimientos.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <PawPrint className="w-36 h-36 text-blue-200" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold font-headline text-gray-800">¿Quiénes Somos?</h2>
            <p className="text-lg text-muted-foreground">
              PetScore nació de la idea de un grupo de amantes de los animales que entendieron la necesidad de un sistema unificado para registrar y compartir el comportamiento de nuestras mascotas. Creemos que cada mascota es única y que tener un historial claro y objetivo beneficia a todos.
            </p>
            <p className="text-lg text-muted-foreground">
              Somos un puente entre dueños responsables que desean lo mejor para sus compañeros y los hoteles, guarderías y cuidadores que se esfuerzan por ofrecer un entorno seguro y acogedor.
            </p>
          </div>
        </div>

        <div className="mt-20 md:mt-32 text-center">
          <h2 className="text-4xl font-bold font-headline text-gray-800">Nuestros Valores</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline text-gray-800">Comunidad</h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  Fomentamos una comunidad basada en el respeto mutuo, la responsabilidad y el amor por los animales.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline text-gray-800">Transparencia</h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  Ofrecemos un sistema de evaluación claro y objetivo que genera confianza entre todas las partes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
