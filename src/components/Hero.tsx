import { Button } from "@/components/ui/button";
import { Play, ArrowDown, BadgeCheck } from "lucide-react";
import jeffProfile from "@/assets/jeff-torres-profile.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/30 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10 animate-blob" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                <p className="text-primary font-medium tracking-wide uppercase text-sm">
                  Arrocha & Piseiro — Wenceslau Guimarães/BA
                </p>
                <BadgeCheck className="w-5 h-5 text-primary" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl sm:text-6xl lg:text-8xl font-black text-foreground mb-6 leading-[0.9] tracking-tighter"
            >
              JEFF<br />
              <span className="text-gradient drop-shadow-[0_0_15px_rgba(255,107,38,0.3)]">TORRES</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-xl font-medium text-foreground mb-2">
                🎤 CANTA JEFF
              </p>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-2 leading-relaxed">
                Aqui a pegada é diferente 💖 E tome no coração!
              </p>
              <p className="text-primary font-semibold text-lg mb-8">
                💜 ESKEMINHA DE VERÃO
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#numeros">
                  <ArrowDown className="mr-2" />
                  Ver Press Kit
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#videos">
                  <Play className="mr-2" />
                  Assistir Vídeo
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Instagram-style gradient border */}
              <div className="relative aspect-square rounded-full p-1.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={jeffProfile}
                    alt="Jeff Torres - Cantor de Arrocha e Piseiro"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Verified badge overlay */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background px-4 py-2 rounded-full shadow-lg border border-border">
                <span className="font-heading font-semibold text-foreground">@jefftorresof</span>
                <BadgeCheck className="w-5 h-5 text-blue-500" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
