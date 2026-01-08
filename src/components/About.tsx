import { Music, Users, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";
import MotionWrapper from "./MotionWrapper";

const bioPoints = [
  {
    icon: Music,
    title: "Identidade Musical",
    description: "Arrocha moderno com influências do piseiro baiano",
  },
  {
    icon: Users,
    title: "Presença Digital",
    description: "+61 mil seguidores e crescimento orgânico constante",
  },
  {
    icon: Sparkles,
    title: "Eskeminha de Verão",
    description: "Projeto audiovisual de destaque com músicas autorais",
  },
];

const releaseText = `Jeff Torres é um cantor e compositor baiano de Gandu, que vem conquistando espaço no cenário do arrocha e piseiro brasileiro. Com mais de 61 mil seguidores no Instagram e uma voz marcante, Jeff conecta seu público através de letras que falam de amor, superação e a alegria da vida nordestina. Seu projeto "Eskeminha de Verão" e presença digital crescente o posicionam como uma das promessas da nova geração do arrocha. "Aqui a pegada é diferente" — é assim que Jeff define sua proposta musical.`;

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(releaseText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <MotionWrapper delay={0.1}>
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Conheça</p>
          </MotionWrapper>
          <MotionWrapper delay={0.2} direction="down">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
              Sobre o Artista
            </h2>
          </MotionWrapper>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Text */}
          <div className="space-y-8">
            <MotionWrapper delay={0.3} direction="left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jeff Torres é um cantor baiano que está redefinindo o arrocha moderno. Com raízes em Gandu, sul da Bahia,
                sua música mistura a energia do piseiro com as letras emotivas do arrocha tradicional. Com o slogan
                <strong className="text-foreground"> "Aqui a pegada é diferente"</strong>, Jeff cria uma sonoridade
                única que ressoa com o público de todas as idades.
              </p>
            </MotionWrapper>

            {/* Authority Points */}
            <div className="grid gap-6">
              {bioPoints.map((point, index) => (
                <MotionWrapper key={index} delay={0.4 + index * 0.1} direction="left">
                  <div
                    className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

          {/* Release Box */}
          <MotionWrapper delay={0.5} direction="right">
            <div className="bg-background rounded-2xl border border-border p-6 shadow-sm h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-semibold text-foreground">Release Curto</h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar
                    </>
                  )}
                </button>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {releaseText}
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground/70">
                  * Texto pronto para uso em materiais de imprensa
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
