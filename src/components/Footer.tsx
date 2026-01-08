import { Heart, Instagram, ExternalLink } from "lucide-react";

const socialLinks = [
  { 
    icon: Instagram, 
    label: "Instagram", 
    url: "https://instagram.com/jefftorresof",
    username: "@jefftorresof"
  },
  { 
    icon: ExternalLink, 
    label: "TikTok", 
    url: "https://tiktok.com/@jefftorresof",
    username: "@jefftorresof"
  },
  { 
    icon: ExternalLink, 
    label: "Threads", 
    url: "https://threads.net/@jefftorresof",
    username: "@jefftorresof"
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container">
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-primary hover:text-primary transition-all"
            >
              <social.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{social.username}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-foreground">Jeff Torres</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Arrocha & Piseiro</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Todos os direitos reservados
            <Heart className="w-3 h-3 text-primary inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
