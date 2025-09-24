export default function DashboardOverviewPage() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">¡Bienvenido a PetScore!</h3>
        <p className="text-sm text-muted-foreground">
          Este es tu panel de control. Desde aquí puedes gestionar tus mascotas, ver sus valoraciones o administrar el perfil de tu hotel.
        </p>
      </div>
      <div className="p-6 pt-0">
        <p>Usa la navegación de la izquierda para empezar.</p>
      </div>
    </div>
  );
}
