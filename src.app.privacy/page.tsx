import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function PrivacyPage() {
  // Generamos la fecha de forma estática durante la construcción.
  // Esto evita errores de hidratación en el cliente.
  const lastUpdated = "24 de Julio de 2024";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-16 md:py-24">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8">Política de Privacidad</h1>
          
          <p><strong>Última actualización:</strong> {lastUpdated}</p>

          <h2>1. Introducción</h2>
          <p>
            Bienvenido a PetScore. Nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y salvaguardamos su información cuando visita nuestro sitio web.
          </p>

          <h2>2. Recopilación de su información</h2>
          <p>
            Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en el Sitio incluye:
          </p>
          <ul>
            <li>
              <strong>Datos personales:</strong> Información de identificación personal, como su nombre, dirección de correo electrónico y número de teléfono, que usted nos proporciona voluntariamente cuando se registra en el Sitio.
            </li>
            <li>
              <strong>Información de la mascota:</strong> Información sobre su mascota, como nombre, raza, tipo y fotografías, que usted nos proporciona.
            </li>
            <li>
              <strong>Datos de evaluación:</strong> Comentarios y calificaciones proporcionados por establecimientos asociados sobre el comportamiento de su mascota.
            </li>
          </ul>

          <h2>3. Uso de su información</h2>
          <p>
            Tener información precisa sobre usted y su mascota nos permite ofrecerle una experiencia fluida, eficiente y personalizada. Específicamente, podemos utilizar la información recopilada sobre usted a través del Sitio para:
          </p>
          <ul>
            <li>Crear y gestionar su cuenta.</li>
            <li>Generar un perfil público para su mascota basado en las evaluaciones.</li>
            <li>Comunicarnos con usted sobre su cuenta o nuestros servicios.</li>
            <li>Mejorar la eficiencia y el funcionamiento del Sitio.</li>
          </ul>

          <h2>4. Divulgación de su información</h2>
          <p>
            No compartiremos, venderemos, alquilaremos ni intercambiaremos su información personal con terceros para sus fines promocionales.
          </p>

          <h2>5. Seguridad de su información</h2>
          <p>
            Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporciona, tenga en cuenta que, a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable.
          </p>

          <h2>6. Contacto</h2>
          <p>
            Si tiene preguntas o comentarios sobre esta Política de Privacidad, por favor contáctenos en <a href="mailto:privacidad@petscore.com">privacidad@petscore.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
