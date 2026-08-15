import { createFileRoute } from "@tanstack/react-router";
import { MatrixRain } from "@/components/MatrixRain";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALFRED VISION | Assistente de IA de Próxima Geração" },
      { name: "description", content: "Crie um assistente de IA que interage como nos filmes. Visão computacional, automação de tela e controle por voz." },
      { property: "og:title", content: "ALFRED VISION" },
      { property: "og:description", content: "O assistente de IA que enxerga e automatiza seu computador." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ctaLink = "https://alfredcursos.com.br/?ref=I107105867N";

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00ff66] selection:text-black">
      <MatrixRain />
      
      {/* Header */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#00ff66]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#00ff66]">ALFRED VISION</h1>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="border border-[#00ff66] text-[#00ff66] px-4 py-2 rounded-md hover:bg-[#00ff66] hover:text-black transition-all">
            Acessar
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Crie um assistente de IA que interage com você como nos <span className="text-[#00ff66]">FILMES</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Capaz de enxergar o mundo em tempo real, monitorar sua tela e controlar o computador por voz. Sem precisar programar.
        </p>
        <a 
          href={ctaLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-[#00ff66] text-black font-bold text-xl px-10 py-5 rounded-full hover:shadow-[0_0_30px_rgba(0,255,102,0.6)] transition-all transform hover:scale-105"
        >
          QUERO CRIAR MEU ALFRED
        </a>
      </section>

      {/* Pricing/Footer area placeholder as per request */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Oferta Limitada</h2>
            <p className="text-2xl text-[#00ff66] mb-4">De R$ 399,00 por apenas 12x de R$ 20,37 ou R$ 197,00 à vista</p>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 border-t border-[#00ff66]/10 relative z-10">
        <p>© 2026 ALFRED VISION. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
