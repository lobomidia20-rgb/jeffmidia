import { Instagram, Music2, TrendingUp, Heart, Eye, LucideIcon, Facebook } from "lucide-react";
import tiktokProfile from "@/assets/tiktok-profile.png";
import instagramPrint from "@/assets/instagram-stats.png";
import viewsPrint from "@/assets/views-stats.png";
import CountUp from "react-countup";
import MotionWrapper from "./MotionWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Metric {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix: string;
  prefix: string;
  detail: string;
  highlight?: boolean;
}

interface SocialPrint {
  title: string;
  image: string;
  placeholder?: boolean;
}

const metrics: Metric[] = [
  {
    icon: Eye,
    label: "Visualizações",
    value: 10,
    suffix: " MILHÕES",
    prefix: "+ ",
    detail: "alcance total",
    highlight: true,
  },
  {
    icon: TrendingUp,
    label: "Seguidores Totais",
    value: 100,
    suffix: " mil",
    prefix: "+ ",
    detail: "Insta, TikTok e Facebook",
  },
  {
    icon: Heart,
    label: "Curtidas",
    value: 200,
    suffix: " mil",
    prefix: "+ ",
    detail: "curtidas totais",
  },
  {
    icon: Facebook,
    label: "Engajamento",
    value: 270,
    suffix: "%",
    prefix: "+ ",
    detail: "crescimento constante",
  },
];

// Placeholder para prints - substitua com as imagens reais
const socialPrints: SocialPrint[] = [
  {
    title: "Instagram",
    image: instagramPrint,
    placeholder: false,
  },
  {
    title: "TikTok",
    image: tiktokProfile,
    placeholder: false,
  },
  {
    title: "Visualizações",
    image: viewsPrint,
    placeholder: false,
  },
];

const MetricCard = ({ metric, index }: { metric: Metric; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <MotionWrapper key={index} delay={0.3 + index * 0.15} direction="up" className="h-full">
      <motion.div
        ref={ref}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="group relative bg-background rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-xl transition-all duration-300 text-center h-full"
      >
        {metric.highlight && (
          <div className="absolute top-2 right-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-full">
            Destaque
          </div>
        )}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
          <metric.icon className="w-6 h-6 text-primary" />
        </div>
        <p className="text-xs text-muted-foreground mb-1 font-medium">{metric.label}</p>
        <div className="flex flex-col items-center justify-center min-h-[90px]">
          <div className={`font-heading font-bold text-foreground leading-tight transition-all duration-300 ${metric.highlight ? "text-2xl sm:text-3xl text-primary" : "text-xl sm:text-2xl"
            }`}>
            {isInView ? (
              <CountUp
                start={0}
                end={metric.value}
                duration={3}
                separator="."
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
            ) : (
              <span>{metric.prefix}0{metric.suffix}</span>
            )}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{metric.detail}</p>
      </motion.div>
    </MotionWrapper>
  );
};

const Numbers = () => {
  return (
    <section id="numeros" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <MotionWrapper delay={0.1}>
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Prova Social</p>
          </MotionWrapper>
          <MotionWrapper delay={0.2} direction="down">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Números e Alcance
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Métricas que comprovam o crescimento e a conexão de Jeff Torres com seu público.
            </p>
          </MotionWrapper>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>

        {/* Social Prints Section */}
        <div className="mb-8">
          <h3 className="font-heading font-semibold text-xl text-foreground mb-6 text-center">
            Prints das Redes Sociais
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {socialPrints.map((print, index) => (
              <MotionWrapper key={index} delay={0.5 + index * 0.2} direction="up">
                <motion.div
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="relative bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-gradient-orange text-primary-foreground text-sm font-medium text-center py-2 transition-colors group-hover:bg-primary/90">
                    {print.title}
                  </div>
                  {print.image ? (
                    <img
                      src={print.image}
                      alt={`Print ${print.title} - Jeff Torres`}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="aspect-[9/16] bg-muted flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <span className="text-3xl">📱</span>
                      </div>
                      <p className="font-medium text-foreground mb-1">Print {print.title}</p>
                      <p className="text-sm text-muted-foreground text-center">
                        Adicione o print da aba de {print.title.toLowerCase()}
                      </p>
                    </div>
                  )}
                </motion.div>
              </MotionWrapper>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground">
          * Métricas atualizadas periodicamente. Entre em contato para dados mais recentes.
        </p>
      </div>
    </section>
  );
};

export default Numbers;
