import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold">AC</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">AgroConecta</h3>
                <span className="text-sm text-primary-foreground/70">AI</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Revolucionando a agricultura moçambicana através da tecnologia acessível, 
              conectando pessoas e promovendo o crescimento sustentável.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg font-semibold">Plataforma</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Marketplace de Terras
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Assistente IA
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Gestão de Produção
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Negociações
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Relatórios
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg font-semibold">Suporte</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Centro de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Guias de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Contactar Suporte
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Estado do Sistema
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <div>
                  <p className="text-primary-foreground/80">
                    Maputo, Moçambique
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <p className="text-primary-foreground/80">+258 XX XXX XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <p className="text-primary-foreground/80">info@agroconecta.mz</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/80">
            <p>&copy; 2024 AgroConecta AI. Todos os direitos reservados.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Termos
              </a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">
                Cookies
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
            <span>Feito com</span>
            <span className="text-accent">❤️</span>
            <span>em Moçambique</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;