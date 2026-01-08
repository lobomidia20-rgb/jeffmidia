import { Newspaper, ExternalLink, Calendar, Maximize2 } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import portalDoArrocha from "@/assets/portal-do-arrocha.png";
import ptnNews from "@/assets/ptn-news.png";
import ligacaoBahia from "@/assets/ligacao-bahia.png";
import informe73 from "@/assets/informe-73.png";
import portalGanduzao from "@/assets/portal-ganduzao.png";
import ligacaoBahiaWeb from "@/assets/ligacao-bahia-web.png";
import bandAppearance from "@/assets/band-appearance.jpg";
import recordCabraliaAppearance from "@/assets/record-cabralia-appearance.png";

import recordSalvadorAppearance from "@/assets/record-salvador-appearance.png";
import teocityNews from "@/assets/teocity-news.jpg";
import bandVerao2026 from "@/assets/band-verao-2026.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PressArticle {
  title: string;
  source: string;
  date: string;
  url: string;
  excerpt: string;
  image?: string;
  placeholder?: boolean;
}

interface MediaAppearance {
  type: string;
  name: string;
  date: string;
  placeholder?: boolean;
  image?: string;
  description: string;
}

const pressArticles: PressArticle[] = [
  {
    title: "O ÁLBUM 'ESKEMINHA DE VERÃO' VEIO COM TUDO...",
    source: "Portal do Arrocha",
    date: "DEZ/2025",
    url: "#",
    excerpt: "Música 'Sua Mãe Vai Me Amar' está presente no novo lançamento do cantor Jeff Torres com repertório top que promete tocar muito nesse verão...",
    image: portalDoArrocha,
    placeholder: false,
  },
  {
    title: "JEFF TORRES GRAVA PRIMEIRO PROJETO AUDIOVISUAL E MARCA NOVA FASE NA CARREIRA",
    source: "PTN News",
    date: "DEZ/2025",
    url: "#",
    excerpt: "Jeff Torres grava primeiro projeto audiovisual e marca nova fase na carreira...",
    image: ptnNews,
    placeholder: false,
  },
  {
    title: "JEFF TORRES REALIZOU GRAVAÇÃO DO PROJETO ESKEMINHA DE VERÃO NO ÚLTIMO SÁBADO (20)",
    source: "Informe 73",
    date: "DEZ/2025",
    url: "#",
    excerpt: "Neste sábado (20), aconteceu a gravação do primeiro projeto audiovisual do cantor Jeff Torres, intitulado Eskeminha de Verão...",
    image: informe73,
    placeholder: false,
  },
  {
    title: "ESKEMINHA DE VERÃO: Jeff Torres grava projeto audiovisual e inaugura nova fase na carreira",
    source: "Portal Ganduzão",
    date: "DEZ/2025",
    url: "#",
    excerpt: "Neste sábado (20), aconteceu a gravação do primeiro projeto audiovisual do cantor Jeff Torres, intitulado Eskeminha de Verão. O trabalho marca um momento importante...",
    image: portalGanduzao,
    placeholder: false,
  },
  {
    title: "Jeff Torres se apresenta nesta sexta no Balanço Geral com Tom Ribeiro direto de Cabrália",
    source: "Ligação Bahia",
    date: "DEZ/2025",
    url: "#",
    excerpt: "O cantor Jeff Torres, revelação musical de Wenceslau Guimarães, volta a ganhar destaque na televisão baiana...",
    image: ligacaoBahia,
    placeholder: false,
  },
  {
    title: "Jeff Torres se apresenta nesta sexta no Balanço Geral com Tom Ribeiro direto de Cabrália",
    source: "Ligação Bahia",
    date: "DEZ/2025",
    url: "#",
    excerpt: "Artista de Wenceslau Guimarães se apresenta no Balanço Geral e reforça seu crescimento na cena musical baiana.",
    image: ligacaoBahiaWeb,
    placeholder: false,
  },
  {
    title: "Jeff Torres grava primeiro audiovisual e inaugura nova fase da carreira",
    source: "TeoCity Notícias",
    date: "DEZ/2025",
    url: "#",
    excerpt: "Jeff Torres grava primeiro audiovisual e inaugura nova fase da carreira com repertório top que promete tocar muito...",
    image: teocityNews,
    placeholder: false,
  },
];

const mediaAppearances: MediaAppearance[] = [
  {
    type: "TV - Nacional",
    name: "Band",
    date: "2025",
    placeholder: false,
    image: bandAppearance,
    description: "RECONHECIMENTO NACIONAL. Jeff Torres brilha na tela da Band, levando sua música e carisma para milhões de lares em todo o Brasil. Um marco de ascensão na carreira.",
  },
  {
    type: "TV - Destaque Estadual",
    name: "Record TV (Salvador / Cabrália)",
    date: "2025",
    placeholder: false,
    image: recordSalvadorAppearance,
    description: "DOMINANDO A BAHIA. De Salvador ao Extremo Sul, Jeff Torres é destaque na Record. Entrevistas exclusivas confirmam: é a nova voz que conquista o estado.",
  },
  {
    type: "Evento Oficial - TV",
    name: "Verão na Band Bahia",
    date: "JAN/2026",
    placeholder: false,
    image: bandVerao2026,
    description: "O SOM DO VERÃO BAIANO. Jeff Torres invade a tela da Band Bahia with a energia do arrocha e piseiro! Uma apresentação imperdível que consagra o artista como a nova revelação da música no estado.",
  },
];

const Press = () => {
  return (
    <section id="imprensa" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <MotionWrapper delay={0.1}>
            <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Na Mídia</p>
          </MotionWrapper>
          <MotionWrapper delay={0.2} direction="down">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Imprensa e Matérias
            </h2>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira as principais aparições de Jeff Torres na mídia e matérias publicadas sobre sua carreira.
            </p>
          </MotionWrapper>
        </div>

        {/* Press Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pressArticles.map((article, index) => (
            <MotionWrapper key={index} delay={0.2 + (index % 3) * 0.1} direction="up">
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group bg-background rounded-2xl border border-dashed border-primary/30 p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer text-left h-full flex flex-col"
                  >
                    {/* Article Image */}
                    <div className="aspect-video bg-muted rounded-xl mb-4 overflow-hidden flex items-center justify-center relative flex-shrink-0">
                      {article.image ? (
                        <>
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="text-white w-8 h-8" />
                          </div>
                        </>
                      ) : (
                        <div className="text-center">
                          <Newspaper className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-xs text-muted-foreground">Imagem da matéria</p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                        {article.source}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>

                    <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors flex-grow">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-1 text-sm text-primary font-medium mt-auto">
                      Ler matéria
                      <ExternalLink className="w-4 h-4" />
                    </div>

                    {article.placeholder && (
                      <p className="text-xs text-muted-foreground/70 mt-3 italic">
                        * Edite com link e detalhes da matéria real
                      </p>
                    )}
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{article.title}</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                        {article.source}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                    </div>

                    {article.image && (
                      <div className="rounded-xl overflow-hidden mb-6 border border-border">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-auto"
                        />
                      </div>
                    )}

                    <p className="text-muted-foreground whitespace-pre-line mb-6">
                      {article.excerpt}
                    </p>

                    {article.url && article.url !== "#" && (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Acessar Fonte Original
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </MotionWrapper>
          ))}
        </div>

        {/* Media Appearances */}
        {/* Media Appearances - Premium Section */}
        <div className="bg-gradient-to-br from-background to-muted/30 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 text-center mb-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-3">
              Ascensão Meteórica
            </span>
            <h3 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
              Jeff Torres na TV
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              O talento que conquistou os palcos agora brilha nas telas de todo o país. A presença constante nas maiores emissoras confirma: <strong>Jeff Torres é o momento.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaAppearances.map((appearance, index) => (
              <MotionWrapper
                key={index}
                delay={0.4 + index * 0.2}
                direction={index === 0 ? "down" : index === 1 ? "left" : "right"}
                className={index === 0 ? "md:col-span-2" : ""}
                fullWidth
              >
                <div
                  className={`group relative bg-background rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full`}
                >
                  {/* Image Area */}
                  <div className={`w-full relative overflow-hidden ${index === 0 ? "aspect-video md:aspect-[21/9]" : "aspect-square md:aspect-video"}`}>
                    {appearance.image ? (
                      <>
                        <img
                          src={appearance.image}
                          alt={appearance.name}
                          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                          style={{ objectPosition: 'center 20%' }}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                        <span className="text-5xl opacity-20">📺</span>
                      </div>
                    )}

                    {/* Badge Overlay - Keep tight */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className={`px-4 py-2 ${index === 0 ? "bg-primary text-primary-foreground" : "bg-black/50 text-white backdrop-blur-md"} text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl`}>
                        {appearance.type}
                      </span>
                    </div>
                  </div>

                  {/* Content Area - BELOW Image */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow bg-card border-t border-border/50">
                    <h4 className={`font-heading font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors ${index === 0 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                      {appearance.name}
                    </h4>
                    {appearance.description && (
                      <p className={`text-muted-foreground leading-relaxed ${index === 0 ? "text-lg md:text-xl" : "text-base md:text-lg"}`}>
                        {appearance.description}
                      </p>
                    )}
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground/60 mt-12 uppercase tracking-widest">
            Acompanhe a trajetória de sucesso
          </p>
        </div>
      </div>
    </section>
  );
};

export default Press;
