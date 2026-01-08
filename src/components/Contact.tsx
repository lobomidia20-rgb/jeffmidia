import { Mail, Phone, MapPin, Send, Instagram, Youtube, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@jefftorres.com.br",
    placeholder: true,
  },
  {
    icon: Phone,
    label: "Telefone/WhatsApp",
    value: "(XX) XXXXX-XXXX",
    placeholder: true,
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Gandu, Bahia",
    placeholder: false,
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "#", placeholder: true },
  { icon: Youtube, label: "YouTube", url: "#", placeholder: true },
  { icon: Music2, label: "TikTok", url: "#", placeholder: true },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Mensagem enviada! (Conecte um backend para funcionalidade real)");
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 uppercase tracking-wide text-sm">Vamos Conversar</p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interessado em contratar Jeff Torres para seu evento? Entre em contato para mais informações sobre cachê, disponibilidade e rider técnico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">
                      {info.value}
                      {info.placeholder && (
                        <span className="text-xs text-muted-foreground/70 ml-2">(editar)</span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground/70 mt-2">
                * Adicione os links das suas redes sociais
              </p>
            </div>

            {/* Press Section */}
            <div className="p-6 bg-background rounded-2xl border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Matérias e Imprensa</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-muted/50 border border-dashed border-primary/20">
                  <p className="text-sm text-muted-foreground">Adicione link de matéria 1</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 border border-dashed border-primary/20">
                  <p className="text-sm text-muted-foreground">Adicione link de matéria 2</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 border border-dashed border-primary/20">
                  <p className="text-sm text-muted-foreground">Adicione link de matéria 3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl border border-border p-6 lg:p-8">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-6">Envie sua Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Nome</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">E-mail</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Telefone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Assunto</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="show">Contratação de Show</option>
                    <option value="parceria">Parceria/Feat</option>
                    <option value="imprensa">Imprensa</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Mensagem</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Descreva sua proposta, data do evento, local, etc."
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
