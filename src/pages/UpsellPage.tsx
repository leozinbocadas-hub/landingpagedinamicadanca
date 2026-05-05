import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  Star, 
  Gift, 
  Trophy,
  Sparkles,
  MousePointer2,
  Library,
  Star as StarIcon,
  Crown
} from 'lucide-react';

const COLORS = {
  pink: '#F116CB',
  purple: '#AD06FD',
  yellow: '#FFBF00',
  white: '#FFFFFF',
};

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${className}`}>
    {children}
  </span>
);

const Decoration = ({ className = "", delay = 0, size = 10 }: { className?: string, delay?: number, size?: number }) => (
  <motion.div
    animate={{
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute pointer-events-none ${className}`}
  >
    <div className={`w-${size} h-${size} rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12 border-2 border-yellow-200`}>
      <Sparkles className="text-brand-yellow" size={size * 1.5} />
    </div>
  </motion.div>
);

const OfferCard = ({ 
  title, 
  price, 
  originalPrice, 
  icon: Icon, 
  features, 
  ctaText, 
  ctaUrl, 
  highlight = false,
  badge = ""
}: { 
  title: string, 
  price: string, 
  originalPrice?: string, 
  icon: React.ElementType, 
  features: string[], 
  ctaText: string, 
  ctaUrl: string,
  highlight?: boolean,
  badge?: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    className={`relative bg-white p-6 md:p-8 rounded-[40px] shadow-2xl border-4 ${highlight ? 'border-brand-yellow scale-100 z-10' : 'border-slate-50'} flex flex-col items-center text-center transition-all`}
  >
    {badge && (
      <div className="absolute -top-3 bg-brand-yellow text-brand-purple px-5 py-1.5 rounded-full font-black text-[10px] shadow-xl uppercase tracking-widest animate-pulse">
        {badge}
      </div>
    )}

    <div className={`w-20 h-20 rounded-[28px] flex items-center justify-center mb-6 mt-4 shadow-xl ${highlight ? 'bg-brand-yellow text-brand-purple shadow-brand-yellow/20' : 'bg-slate-50 text-brand-purple'}`}>
      <Icon size={40} />
    </div>
    
    <h3 className={`text-xl font-black mb-3 uppercase tracking-tighter italic leading-tight ${highlight ? 'text-brand-purple' : 'text-slate-700'}`}>
      {title}
    </h3>

    <div className="mb-8">
      {originalPrice && (
        <span className="text-xs font-bold text-brand-pink/50 block line-through mb-1">
          De R$ {originalPrice} por
        </span>
      )}
      <div className={`flex items-center justify-center ${highlight ? 'text-brand-purple' : 'text-slate-800'}`}>
        <span className="text-lg font-bold self-start mt-2">R$</span>
        <span className="text-6xl font-black italic tracking-tighter">{price}</span>
        <div className="flex flex-col text-left ml-2">
          <span className="text-xl font-bold">,90</span>
          {highlight && <span className="text-[10px] font-black uppercase text-brand-pink">HOJE!</span>}
        </div>
      </div>
    </div>

    <ul className="text-left space-y-3 mb-10 w-full font-bold text-slate-500 text-xs">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2.5 leading-tight">
          <div className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${highlight ? 'bg-brand-purple/10 text-brand-purple' : 'bg-slate-100 text-slate-400'}`}>
            <CheckCircle2 size={12} />
          </div>
          {feature}
        </li>
      ))}
    </ul>

    <button
      onClick={() => window.location.href = ctaUrl}
      className={`w-full py-4 px-4 rounded-[20px] font-black text-base md:text-lg transition-all flex items-center justify-center gap-2 group relative overflow-hidden ${
        highlight 
          ? 'bg-brand-purple text-white shadow-brand hover:translate-y-[-2px] active:translate-y-[2px]' 
          : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
      }`}
    >
      <span className="relative z-10 text-center">{ctaText}</span>
      <ArrowRight size={18} className="relative z-10 shrink-0 group-hover:translate-x-1 transition-transform" />
      {highlight && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}
    </button>
  </motion.div>
);

export default function UpsellPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-pink selection:text-white overflow-hidden">
      {/* Urgency Banner */}
      <div className="fixed top-0 left-0 right-0 bg-brand-pink text-white py-3.5 px-4 font-black text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-center shadow-lg z-[100]">
        <motion.div
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center gap-4"
        >
          <Zap size={14} fill="currentColor" className="animate-pulse" />
          <span>Oportunidade Única: Complete seu material com 70% de desconto!</span>
          <Zap size={14} fill="currentColor" className="animate-pulse" />
        </motion.div>
      </div>

      {/* Hero Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-brand-pink/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px]" />
      </div>

      <header className="pt-24 pb-12 px-6 text-center max-w-4xl mx-auto relative">
        <Decoration className="-top-10 left-[10%]" delay={0.2} size={8} />
        <Decoration className="top-20 -right-5" delay={0.5} size={6} />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-8 shadow-sm">
            <CheckCircle2 size={16} /> Compra Aprovada com Sucesso!
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-brand-purple italic leading-[1.1] md:leading-[1] tracking-tighter mb-6 px-2">
            MUITO OBRIGADO! <br className="hidden md:block" />
            <span className="text-brand-pink relative inline-block mt-2 md:mt-0">
              PELA SUA CONFIANÇA
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-brand-yellow/30 -z-10 rounded-full" />
            </span>
          </h1>

          <div className="bg-slate-50 border-2 border-slate-100 p-6 rounded-3xl mb-12 max-w-2xl mx-auto">
            <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed">
              O acesso ao seu material <span className="text-brand-purple">acabou de ser enviado</span> para o seu e-mail. <br />
              <span className="text-brand-pink">IMPORTANTE:</span> Verifique sua caixa de entrada, e também as pastas de <strong>SPAM</strong> ou <strong>Promoções</strong>.
            </p>
          </div>

          <div className="mb-8">
             <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-4">MAS ESPERE UM SEGUNDO...</p>
             <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tighter leading-none italic">
               VOCÊ TEM UMA CHANCE ÚNICA DE <br />
               <span className="text-brand-purple">LEVAR O COMBO VIP POR R$ 19,90</span>
             </h2>
          </div>
        </motion.div>
      </header>

      <section className="pb-32 px-6 relative">
        <div className="max-w-md mx-auto">
          <OfferCard 
            title="+300 Coreografias de Dança Infantil Prontas para Aplicar"
            price="19"
            originalPrice="197"
            icon={StarIcon}
            highlight={true}
            badge="OFERTA EXCLUSIVA"
            features={[
              "Suporte VIP WhatsApp",
              "Acesso Vitalício Garantido"
            ]}
            ctaText="SIM! QUERO ADICIONAR AGORA"
            ctaUrl="https://ggcheckout.app/checkout/v5/SYNcAAp5ewNEEpNViW6W"
          />
        </div>

        {/* Floating Trust elements */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 transition-all">
          <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest">
            <ShieldCheck size={24} className="text-emerald-500" /> COMPRA 100% SEGURA
          </div>
          <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest">
            <Star size={24} className="text-amber-400" fill="currentColor" /> SATISFAÇÃO GARANTIDA
          </div>
          <div className="flex items-center gap-3 font-black text-slate-500 text-xs tracking-widest">
            <Trophy size={24} className="text-brand-purple" /> MATERIAL DE ELITE
          </div>
        </div>
      </section>

      {/* Footer Mini */}
      <footer className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
          <img src="https://i.ibb.co/Wv2LjQz6/image.png" alt="Logo" className="h-20 w-auto mb-8 scale-[1.8]" />
          <p className="text-slate-400 text-[11px] font-bold tracking-widest uppercase italic text-center leading-relaxed px-4">
            Ao clicar em prosseguir, você concorda em adicionar este item ao seu pedido. <br />
            Esta oferta é exclusiva e não aparecerá novamente.
          </p>
          <div className="mt-8 pt-8 border-t border-slate-200 w-full text-center">
            <p className="text-slate-300 text-[10px] font-medium tracking-wide">
              © {new Date().getFullYear()} +250 Dinâmicas Interativas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <motion.a
        href="https://wa.me/5537991831171?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+Combo+VIP."
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
