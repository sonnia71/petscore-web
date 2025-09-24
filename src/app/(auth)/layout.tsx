export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)] py-12">
      <div className="w-full max-w-md px-4">
        {children}
      </div>
    </div>
  );
}
