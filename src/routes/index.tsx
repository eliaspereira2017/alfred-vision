import { createFileRoute } from "@tanstack/react-router";
import { MatrixRain } from "@/components/MatrixRain";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALFRED VISION | Seu Assistente de IA Personalizado" },
      { name: "description", content: "Crie um assistente de IA que interage com você como nos filmes. Visão computacional, automação de tela e controle por voz." },
      { property: "og:title", content: "ALFRED VISION | Seu Assistente de IA Personalizado" },
      { property: "og:description", content: "Crie um assistente de IA que interage com você como nos filmes. Visão computacional, automação de tela e controle por voz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ctaLink = "https://pay.hotmart.com/J106663527S?sck=HOTMART_PRODUCT_PAGE&off=othhiiz7&hotfeature=32&bid=1786836653083";
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVideoStarted, setIsVideoStarted] = useState(false);

  const features = [
    { 
      title: "Visão Computacional", 
      desc: "Identifica objetos, pessoas e comportamentos em tempo real para ações proativas e seguras.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    { 
      title: "Interpretação de Tela", 
      desc: "O Alfred entende o que você está fazendo no PC e te auxilia em tarefas repetitivas ou complexas.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    { 
      title: "Comandos de Voz", 
      desc: "Dialogue com sua IA de forma fluida. Sem \"Ok Google\", apenas conversas como entre humanos.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" y1="18" x2="12" y2="22"/>
        </svg>
      )
    },
    { 
      title: "Memória Cognitiva", 
      desc: "Ele lembra das suas preferências, projetos e conversas passadas para um auxílio verdadeiramente único.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1 0-4.88 2.5 2.5 0 0 1 0-4.88A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 0-4.88 2.5 2.5 0 0 0 0-4.88A2.5 2.5 0 0 0 14.5 2Z"/>
        </svg>
      )
    },
    { 
      title: "Automação No-Code", 
      desc: "Configure fluxos de trabalho poderosos arrastando blocos. Do Windows à sua Cafeteira.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      )
    },
    { 
      title: "Privacidade Total", 
      desc: "Seus dados são seus. Configure sua IA para rodar localmente ou com criptografia de ponta.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    }
  ];

  const faqs = [
    { q: "Preciso saber programar?", a: "Absolutamente não! O curso é focado em ferramentas no-code e configurações simples para que qualquer pessoa consiga criar seu assistente." },
    { q: "O acesso é vitalício?", a: "Sim, uma vez adquirido, o curso e as atualizações são seus para sempre." },
    { q: "Funciona com dispositivos inteligentes?", a: "Sim! O Alfred pode ser integrado com sistemas de automação residencial, permitindo controlar sua casa por comandos de voz ou gestos captados pela visão computacional." },
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
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-b from-transparent to-black border border-[#00ff66] text-[#00ff66] px-4 py-1.5 rounded-full hover:from-[#00ff66] hover:to-[#006629] hover:text-black transition-all font-bold text-[10px] uppercase">
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
        
        <div className="mb-16 aspect-[9/16] max-w-[340px] mx-auto bg-black/50 border border-[#00ff66]/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group">
          {!isVideoStarted ? (
            <div 
              className="absolute inset-0 z-20 bg-black flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setIsVideoStarted(true)}
            >
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00ff66]/20 via-transparent to-transparent"></div>
              <div className="w-20 h-20 border-2 border-[#00ff66] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,102,0.5)] animate-pulse mb-4">
                <svg className="w-10 h-10 text-[#00ff66] fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[#00ff66] font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">Vision Interface Activating...</span>
              <div className="absolute bottom-4 w-full px-8 opacity-50">
                <div className="h-0.5 bg-[#00ff66]/20 w-full">
                  <div className="h-full bg-[#00ff66] w-1/3 animate-[loading_2s_infinite]"></div>
                </div>
              </div>
            </div>
          ) : (
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/0DshbSYIeuI?autoplay=1&rel=0&modestbranding=1" 
              title="Alfred Vision" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0 w-full h-full z-10"
            ></iframe>
          )}
        </div>

        <style>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}</style>

        <a 
          href={ctaLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-[#00ff66] text-black font-black text-2xl px-12 py-6 rounded-full hover:shadow-[0_0_40px_rgba(0,255,102,0.8)] transition-all transform hover:scale-105 uppercase tracking-tighter"
        >
          QUERO CRIAR MEU ALFRED
        </a>
      </section>

      {/* Casa Inteligente Section */}
      <section className="py-24 relative z-10 bg-gradient-to-r from-black via-[#00ff66]/5 to-black border-y border-[#00ff66]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase leading-none">
                O Cérebro da sua <span className="text-[#00ff66]">CASA INTELIGENTE</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Imagine controlar luzes, temperatura, câmeras de segurança e aparelhos domésticos com um simples comando de voz ou até mesmo através da detecção de presença e gestos.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">▶</span> Integração direta com sistemas IoT e assistentes domésticos.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">▶</span> Automação baseada em visão: o Alfred reconhece quando você entra na sala.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#00ff66]">▶</span> Comandos personalizados para rotinas complexas de segurança e conforto.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 glass-card border-[#00ff66]/30 p-0 overflow-hidden relative group">
              <img 
                src="/assets/dashboard.png" 
                alt="Dashboard Alfred" 
                className="w-full h-auto block transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-24 bg-black/40 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center tracking-tighter uppercase">Recursos <span className="text-[#00ff66]">Elite</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-[#111] border border-[#00ff66]/20 p-8 rounded-2xl hover:border-[#00ff66] transition-all group">
                <div className="text-[#00ff66] mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-b from-[#00ff66] to-[#006629] bg-clip-text text-transparent uppercase tracking-tighter">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="py-12 container mx-auto px-6 text-center relative z-10">
        <div className="max-w-xl mx-auto bg-gradient-to-b from-[#111] to-black border-2 border-[#00ff66] p-6 md:p-8 rounded-[2.5rem] shadow-[0_0_60px_rgba(0,255,102,0.15)]">
          <span className="text-[#00ff66] font-bold tracking-[0.3em] uppercase mb-3 block text-[8px]">Oferta Exclusiva</span>
          <h2 className="text-2xl md:text-4xl font-black mb-3 tracking-tighter">ACESSO VITALÍCIO</h2>
          <p className="text-gray-400 text-sm mb-6">Inclui 6 videoaulas práticas, suporte exclusivo e garantia total.</p>
          
          <div className="mb-6">
            <p className="text-gray-500 line-through text-base mb-1 font-bold italic">De R$ 399,00</p>
            <p className="text-lg text-white mb-1 uppercase tracking-widest">Por apenas</p>
            <p className="text-4xl md:text-6xl font-black text-[#00ff66]">12x R$ 20,37</p>
            <p className="text-base text-gray-400 mt-2 font-bold uppercase tracking-widest">ou R$ 197,00 à vista</p>
          </div>

          <a 
            href={ctaLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-auto inline-block bg-gradient-to-b from-[#00ff66] to-[#006629] text-black font-black text-[12px] px-8 py-3 rounded-2xl hover:shadow-[0_0_50px_rgba(0,255,102,0.6)] transition-all transform hover:scale-105 uppercase"
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
