import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  Gift,
  AlertCircle,
  BookOpen,
  Gem,
  Crown
} from 'lucide-react';

const COLORS = {
  pink: '#F116CB',
  purple: '#AD06FD',
  yellow: '#FFBF00',
  white: '#FFFFFF',
};

const OfferCard = ({ 
  title, 
  price, 
  cents = "90",
  originalPrice, 
  icon: Icon, 
  features, 
  ctaText, 
  ctaUrl, 
  highlight = false 
}: { 
  title: string, 
  price: string, 
  cents?: string,
  originalPrice: string, 
  icon: React.ElementType, 
  features: string[], 
  ctaText: string, 
  ctaUrl: string,
  highlight?: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className={`bg-white p-8 rounded-[40px] shadow-2xl border-4 ${highlight ? 'border-brand-pink scale-105' : 'border-slate-50'} flex flex-col items-center text-center relative`}
  >
    {highlight && (
      <div className="absolute -top-4 bg-brand-pink text-white px-6 py-1.5 rounded-full font-black text-xs uppercase tracking-widest animate-bounce">
        MELHOR ESCOLHA
      </div>
    )}
    
    <div className={`w-20 h-20 rounded-[24px] flex items-center justify-center mb-6 mt-4 shadow-xl ${highlight ? 'bg-brand-pink text-white shadow-brand-pink/20' : 'bg-slate-50 text-brand-purple'}`}>
      <Icon size={40} />
    </div>
    <h3 className="text-xl font-black text-brand-purple mb-4 uppercase italic tracking-tighter">{title}</h3>
    
    <div className="mb-8">
      <span className="text-sm font-bold text-slate-300 block line-through mb-1">De R$ {originalPrice} por</span>
      <div className="flex items-center justify-center text-brand-purple">
        <span className="text-xl font-bold self-start mt-2">R$</span>
        <span className="text-7xl font-black italic">{price}</span>
        <div className="flex flex-col text-left ml-1.5">
          <span className="text-2xl font-bold">,{cents}</span>
        </div>
      </div>
    </div>

    <ul className="text-left space-y-3 mb-10 w-full font-bold text-slate-500 text-[13px]">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-brand-pink shrink-0" />
          {f}
        </li>
      ))}
    </ul>

    <button
      onClick={() => window.location.href = ctaUrl}
      className={`w-full py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 ${
        highlight ? 'bg-brand-pink text-white shadow-lg shadow-brand-pink/20' : 'bg-slate-100 text-slate-800'
      }`}
    >
      {ctaText} <ArrowRight size={18} />
    </button>
  </motion.div>
);

export default function BackRedirectPage() {
  const [timeLeft, setTimeLeft] = React.useState(600); // 10:00 in seconds

  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Urgency Banner */}
      <div className="fixed top-0 left-0 right-0 bg-brand-pink text-white py-3 px-4 font-black text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-center shadow-lg z-[100]">
        <motion.div
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center gap-4"
        >
          <Zap size={14} fill="currentColor" className="animate-pulse" />
          <span>A OFERTA EXPIRA EM: <span className="bg-white text-brand-pink px-2 py-0.5 rounded ml-1">{formatTime(timeLeft)}</span></span>
          <Zap size={14} fill="currentColor" className="animate-pulse" />
        </motion.div>
      </div>

      {/* Scroll Progress Placeholder or Brand Header */}
      <nav className="fixed top-16 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-4xl z-50">
        <div className="glass rounded-2xl px-5 py-2.5 flex justify-center items-center shadow-xl border-2 border-white/50">
          <img src="https://i.ibb.co/Wv2LjQz6/image.png" alt="Logo" className="h-12 w-auto scale-[2.2] origin-center" />
        </div>
      </nav>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-yellow/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full text-center mx-auto pt-44 pb-16 px-6"
      >
        <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-purple px-6 py-2 rounded-2xl font-black text-sm uppercase tracking-tighter mb-8 shadow-xl">
          <AlertCircle size={18} /> ESPERE! ÚLTIMA CHANCE!
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-brand-purple italic leading-none tracking-tighter mb-6">
          NÃO VÁ EMBORA <br />
          <span className="text-brand-pink">SEM O SEU ACERVO!</span>
        </h1>
        
        <p className="text-slate-500 font-bold text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Liberei um desconto radical de <span className="text-brand-purple underline decoration-brand-yellow decoration-4">última hora</span> para você não ficar de fora. Escolha o seu plano agora:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          <OfferCard 
            title="Plano Básico"
            price="7"
            cents="90"
            originalPrice="10,00"
            icon={BookOpen}
            features={[
              "+250 Dinâmicas Interativas",
              "Acesso Vitalício",
              "Suporte via Email",
              "Material Pedagógico"
            ]}
            ctaText="QUERO O BÁSICO"
            ctaUrl="https://ggcheckout.app/checkout/v5/LgNSmBL5gMbbfoe14zKc"
          />

          <OfferCard 
            title="Plano Premium"
            price="14"
            cents="90"
            originalPrice="27,90"
            icon={Gem}
            highlight={true}
            features={[
              "TUDO do Plano Básico",
              "50 Brincadeiras Musicais",
              "Planner de Aulas Pronto",
              "Pack de Músicas Infantis",
              "Certificado com seu nome"
            ]}
            ctaText="QUERO O PREMIUM"
            ctaUrl="https://ggcheckout.app/checkout/v5/lPqDXADueo8lSWi1FZn1"
          />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-slate-400 font-bold text-sm flex items-center gap-2">
            <ShieldCheck size={16} /> Compra 100% Segura & Acesso Imediato
          </p>
          <button 
            onClick={() => window.history.back()}
            className="text-slate-300 font-bold text-xs underline hover:text-slate-400 transition-colors"
          >
            Não, quero sair sem o desconto
          </button>
        </div>
      </motion.div>

      {/* Floating Support Button */}
      <motion.a
        href="https://wa.me/5537991831171?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+sobre+a+oferta+especial."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[80] cursor-pointer"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="https://i.ibb.co/HDSXGxcz/11.png"
          alt="Suporte WhatsApp"
          className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
        />
      </motion.a>
    </div>
  );
}
