import { createFileRoute } from "@tanstack/react-router";
import { MatrixRain } from "@/components/MatrixRain";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALFRED VISION | Seu Assistente de IA Personalizado" },
      { name: "description", content: "Crie um assistente de IA que interage com você como nos filmes. Visão computacional, automação de tela e controle por voz." },
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    { title: "Visão Computacional", desc: "Identifica objetos, pessoas e ações em tempo real através da sua câmera." },
    { title: "Interpretação de Tela", desc: "Analisa o que está acontecendo na sua tela para automação inteligente." },
    { title: "Conversação e Escrita", desc: "Interage via voz ou texto com naturalidade e contexto avançado." },
    { title: "Memória Persistente", desc: "Lembra das suas preferências e conversas anteriores para um serviço personalizado." },
    { title: "Automação por Voz", desc: "Execute comandos complexos no Windows apenas falando." }
  ];

  const faqs = [
    { q: "Preciso saber programar?", a: "Absolutamente não! O curso é focado em ferramentas no-code e configurações simples para que qualquer pessoa consiga criar seu assistente." },
    { q: "O acesso é vitalício?", a: "Sim, uma vez adquirido, o curso e as atualizações são seus para sempre." },
    { q: "Como funciona o suporte?", a: "Temos um grupo exclusivo de alunos e suporte direto para tirar todas as suas dúvidas durante a criação do seu Alfred." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00ff66] selection:text-black scroll-smooth">
      <MatrixRain />
      
      {/* Header */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#00ff66]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#00ff66] tracking-tighter">ALFRED VISION</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="#recursos" className="hover:text-[#00ff66] transition-colors">Recursos</a>
            <a href="#oferta" className="hover:text-[#00ff66] transition-colors">Oferta</a>
            <a href="#faq" className="hover:text-[#00ff66] transition-colors">FAQ</a>
          </div>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-[#00ff66]/10 border border-[#00ff66] text-[#00ff66] px-6 py-2 rounded-full hover:bg-[#00ff66] hover:text-black transition-all font-bold text-sm">
            QUERO O MEU
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-white leading-[0.9] tracking-tighter">
          Crie um assistente de IA que interage com você como nos <span className="text-[#00ff66] drop-shadow-[0_0_15px_rgba(0,255,102,0.5)]">FILMES</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Capaz de enxergar o mundo em tempo real, monitorar sua tela e controlar o computador por voz. <span className="text-white font-bold underline decoration-[#00ff66]">Sem precisar programar.</span>
        </p>
        
        <div className="mb-16 max-w-4xl mx-auto aspect-video bg-black/50 border border-[#00ff66]/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#00ff66]/10 to-transparent pointer-events-none"></div>
          {/* Placeholder for Video */}
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Demonstração Alfred Vision"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <a 
          href={ctaLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-[#00ff66] text-black font-black text-2xl px-12 py-6 rounded-full hover:shadow-[0_0_40px_rgba(0,255,102,0.8)] transition-all transform hover:scale-105 uppercase tracking-tighter"
        >
          QUERO CRIAR MEU ALFRED
        </a>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-24 bg-black/40 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tighter uppercase">Recursos <span className="text-[#00ff66]">Elite</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-[#111] border border-[#00ff66]/20 p-8 rounded-2xl hover:border-[#00ff66] transition-all group">
                <div className="w-12 h-12 bg-[#00ff66]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00ff66] transition-colors">
                  <div className="w-6 h-6 border-2 border-[#00ff66] group-hover:border-black"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#00ff66]">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="py-24 container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#111] to-black border-2 border-[#00ff66] p-12 md:p-20 rounded-[3rem] shadow-[0_0_60px_rgba(0,255,102,0.15)]">
          <span className="text-[#00ff66] font-bold tracking-[0.3em] uppercase mb-8 block">Oferta Exclusiva</span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">ACESSO VITALÍCIO</h2>
          <p className="text-gray-400 text-xl mb-12">Inclui 6 videoaulas práticas, suporte exclusivo e garantia total.</p>
          
          <div className="mb-12">
            <p className="text-gray-500 line-through text-2xl mb-2">De R$ 399,00</p>
            <p className="text-xl text-white mb-2 uppercase tracking-widest">Por apenas</p>
            <p className="text-6xl md:text-8xl font-black text-[#00ff66]">12x R$ 20,37</p>
            <p className="text-2xl text-gray-400 mt-4">ou R$ 197,00 à vista</p>
          </div>

          <a 
            href={ctaLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full md:w-auto inline-block bg-[#00ff66] text-black font-black text-2xl px-16 py-8 rounded-2xl hover:shadow-[0_0_50px_rgba(0,255,102,0.6)] transition-all transform hover:scale-105 uppercase"
          >
            GARANTIR MINHA VAGA AGORA
          </a>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <span>✓ Acesso Imediato</span>
            <span>✓ 7 Dias de Garantia</span>
            <span>✓ Suporte VIP</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-black mb-16 text-center tracking-tighter uppercase">Dúvidas <span className="text-[#00ff66]">Comuns</span></h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#00ff66]/20 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#00ff66]/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <span className={`text-[#00ff66] text-2xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="p-6 pt-0 text-gray-400 border-t border-[#00ff66]/10 bg-black/20">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-[#00ff66]/10 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-2xl font-black text-[#00ff66] mb-2 tracking-tighter">ALFRED VISION</h2>
            <p className="text-gray-500 text-sm">Transformando a interação homem-máquina através da IA.</p>
          </div>
          <div className="flex gap-8 text-gray-500 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
          <p className="text-gray-600 text-sm">© 2026 ALFRED VISION. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
