import { Star, Calendar, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Eskeminha de Verão",
    year: "2024",
    type: "Audiovisual",
    description: "Projeto audiovisual especial de verão com músicas inéditas e parcerias regionais.",
    featured: true,
    placeholder: "Adicione mais detalhes sobre o projeto",
  },
  {
    title: "Projeto 2",
    year: "20XX",
    type: "Álbum/EP",
    description: "Descrição do projeto. Adicione informações sobre lançamentos, parcerias e destaques.",
    featured: false,
    placeholder: "Edite este card com seu projeto",
  },
  {
    title: "Projeto 3",
    year: "20XX",
    type: "Single",
    description: "Descrição do projeto. Adicione informações sobre lançamentos, parcerias e destaques.",
    featured: false,
    placeholder: "Edite este card com seu projeto",
  },
];

const recentShows = [
  { name: "Adicione show recente", location: "Local", date: "Data" },
  { name: "Adicione show recente", location: "Local", date: "Data" },
  { name: "Adicione show recente", location: "Local", date: "Data" },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Portfólio</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projetos e Lançamentos
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                project.featured ? "border-primary/50 ring-2 ring-primary/20" : "border-border hover:border-primary/30"
              }`}
            >
              {project.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-orange text-primary-foreground text-xs font-medium text-center py-1.5 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3" />
                  Destaque
                </div>
              )}

              {/* Project Image Placeholder */}
              <div className={`aspect-video bg-muted flex items-center justify-center border-b border-border ${project.featured ? "mt-7" : ""}`}>
                <div className="text-center">
                  <span className="text-3xl">🎵</span>
                  <p className="text-xs text-muted-foreground mt-2">Adicionar capa</p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {project.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                {project.placeholder && (
                  <p className="text-xs text-muted-foreground/70 italic">{project.placeholder}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Shows */}
        <div className="bg-background rounded-2xl border border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-semibold text-lg text-foreground">Shows Recentes</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentShows.map((show, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-muted/50 border border-dashed border-primary/20"
              >
                <p className="font-medium text-foreground mb-1">{show.name}</p>
                <p className="text-sm text-muted-foreground">{show.location} • {show.date}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground/70 mt-4 text-center">
            * Adicione seus shows recentes para mostrar sua agenda ativa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
