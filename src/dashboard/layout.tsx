export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 font-headline">Panel de Control</h1>
      <p className="mb-8">El panel de control está temporalmente desactivado para asegurar la estabilidad del despliegue. ¡Volverá pronto!</p>
      {children}
    </div>
  );
}
