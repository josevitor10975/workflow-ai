import { AuthRightPanel } from "@/components/auth/AuthRightPanel";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 font-sans antialiased p-2 sm:p-3 lg:p-4 bg-background">
      {/* Coluna Esquerda — form específico de cada rota */}
      <div className="bg-background text-foreground flex flex-col justify-center items-center p-6 sm:p-12 lg:p-16 order-1">
        {children}
      </div>

      {/* Coluna Direita — painel compartilhado */}
      <AuthRightPanel />
    </div>
  );
}
