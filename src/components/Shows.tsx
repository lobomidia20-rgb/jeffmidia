import { MapPin, Calendar } from "lucide-react";
import showNight from "@/assets/show-night.jpg";
import showBeach from "@/assets/show-beach.jpg";
import showWenceslau from "@/assets/show-wenceslau.jpg";
import MotionWrapper from "./MotionWrapper";

// Placeholder data for realized shows
const realizedShows = [
    {
        id: 1,
        location: "Bahia",
        venue: "Show ao Vivo",
        date: "2025",
        image: showNight,
    },
    {
        id: 2,
        location: "Guaibim - BA",
        venue: "Orla da Praia",
        date: "2025",
        image: showBeach,
    },
    {
        id: 3,
        location: "Wenceslau Guimarães - BA",
        venue: "Praça Pública",
        date: "2025",
        image: showWenceslau,
    },
];

const Shows = () => {
    return (
        <section id="shows" className="py-20 bg-muted/30">
            <div className="container">
                <div className="text-center mb-12">
                    <MotionWrapper delay={0.1}>
                        <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Galeria</p>
                    </MotionWrapper>
                    <MotionWrapper delay={0.2} direction="down">
                        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                            Shows Realizados
                        </h2>
                    </MotionWrapper>
                    <MotionWrapper delay={0.3}>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Registros de apresentações memoráveis e a energia contagiante do público.
                        </p>
                    </MotionWrapper>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {realizedShows.map((show, index) => (
                        <MotionWrapper
                            key={show.id}
                            delay={0.2 + index * 0.1}
                            direction="up"
                            className={index === 2 ? "md:col-span-2" : ""}
                            fullWidth
                        >
                            <div
                                className={`group relative aspect-video bg-background rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${index === 2 ? "aspect-[21/9]" : ""}`}
                            >
                                {/* Photo Placeholder/Image */}
                                <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center text-center group-hover:scale-105 transition-transform duration-700">
                                    <img
                                        src={show.image}
                                        alt={`${show.venue} - ${show.location}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Overlay Content (Optional, enables seeing details on hover) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="text-white">
                                        <div className="flex items-center gap-2 mb-1 text-primary-foreground/80 text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>{show.date}</span>
                                        </div>
                                        <h3 className="font-heading text-xl font-bold mb-1">{show.venue}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <MapPin className="w-4 h-4" />
                                            <span>{show.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        * Fotos oficiais dos últimos eventos
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Shows;
