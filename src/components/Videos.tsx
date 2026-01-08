import { Play, ExternalLink } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

const youtubeVideos = [
  { title: "Vídeo 1", placeholder: "Cole o ID do vídeo do YouTube", embedId: "" },
  { title: "Vídeo 2", placeholder: "Cole o ID do vídeo do YouTube", embedId: "" },
  { title: "Vídeo 3", placeholder: "Cole o ID do vídeo do YouTube", embedId: "" },
  { title: "Vídeo 4", placeholder: "Cole o ID do vídeo do YouTube", embedId: "" },
];

const reelsLinks = [
  { title: "Reel 1", url: "#", placeholder: true },
  { title: "Reel 2", url: "#", placeholder: true },
  { title: "Reel 3", url: "#", placeholder: true },
];

const Videos = () => {
  return (
    <section id="videos" className="py-20">
      <div className="container">
        {/* YouTube Videos Grid Removed as per request */}


        {/* Reels Section */}
        <div className="bg-muted/50 rounded-2xl p-6 border border-border">
          <h3 className="font-heading font-semibold text-lg text-foreground mb-6 text-center">
            Reels em Destaque
          </h3>

          <div className="grid sm:grid-cols-3 gap-4">
            {reelsLinks.map((reel, index) => (
              <MotionWrapper key={index} delay={0.2 + index * 0.15} direction="up">
                <motion.a
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-background rounded-xl border border-dashed border-primary/20 hover:border-primary/50 transition-all group hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-orange flex items-center justify-center flex-shrink-0">
                    <Play className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground">{reel.title}</p>
                    {reel.placeholder && (
                      <p className="text-xs text-muted-foreground">Adicione link do reel</p>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              </MotionWrapper>
            ))}
          </div>

          <p className="text-xs text-muted-foreground/70 mt-4 text-center">
            * Substitua os links pelos URLs dos seus reels no Instagram
          </p>
        </div>
      </div>
    </section>
  );
};

export default Videos;
