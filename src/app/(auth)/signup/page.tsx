
import Link from "next/link";

export default function SignupPage() {
  // Simplified version without tabs for now
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight font-headline">Crear una Cuenta</h3>
        <p className="text-sm text-muted-foreground">Únete a la comunidad de PetScore.</p>
      </div>
      <div className="p-6 pt-0 space-y-4">
        <div className="space-y-2">
            <label htmlFor="owner-name" className="text-sm font-medium leading-none">Nombre Completo</label>
            <input id="owner-name" placeholder="John Doe" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
        </div>
        <div className="space-y-2">
            <label htmlFor="owner-email" className="text-sm font-medium leading-none">Correo Electrónico</label>
            <input id="owner-email" type="email" placeholder="m@example.com" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
        </div>
        <div className="space-y-2">
            <label htmlFor="owner-password" className="text-sm font-medium leading-none">Contraseña</label>
            <input id="owner-password" type="password" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
        </div>
        <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
            Crear Cuenta
        </button>
      </div>
       <div className="p-6 pt-0 mt-4 text-center text-sm">
        ¿Ya tienes una cuenta?{" "}
        <Link href="/login" className="underline">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}
