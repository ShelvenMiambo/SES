// Componente Hero Section - Seção principal da página inicial
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Users, TrendingUp } from "lucide-react";
// Substitua por imagem real em produção
// import heroImage from "@/assets/hero-agriculture.jpg";
const heroImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMTY1NDNFIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg3Rjc4RCIgZm9udC1zaXplPSI0OCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPkFncm9Db25lY3RhPC90ZXh0Pgo8L3N2Zz4K";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Agricultura moderna em Moçambique" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-none">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 lg:items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <Badge variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                  🌱 Revolução Agrícola Digital
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-primary">AgroConecta</span>
                  <br />
                  <span className="gradient-hero bg-clip-text text-transparent">
                    AI para Moçambique
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Conectamos agricultores, donos de terra e compradores numa plataforma 
                  inteligente que revoluciona a agricultura moçambicana com IA, simplicidade e tecnologia acessível.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/registo">
                  <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
                    Começar Agora
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Link to="/marketplace">
                  <Button variant="default" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground">
                    Explorar Marketplace
                  </Button>
                </Link>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-border/50">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start text-primary mb-1 sm:mb-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold">10K+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Utilizadores Ativos</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start text-accent mb-1 sm:mb-2">
                    <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold">500+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Propriedades</p>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start text-success mb-1 sm:mb-2">
                    <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold">95%</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Mobile First</p>
                </div>
              </div>
            </div>

            {/* Right side - Visual elements (hidden on mobile) */}
            <div className="hidden lg:block relative">
              <div className="relative z-10 space-y-4">
                {/* Floating cards */}
                <div className="gradient-card p-6 rounded-2xl shadow-medium backdrop-blur-sm border border-border/50 transform rotate-3 hover:rotate-0 transition-spring">
                  <h3 className="font-semibold text-primary mb-2">🤖 Assistente IA</h3>
                  <p className="text-sm text-muted-foreground">Conselhos personalizados em tempo real</p>
                </div>
                <div className="gradient-card p-6 rounded-2xl shadow-medium backdrop-blur-sm border border-border/50 transform -rotate-2 hover:rotate-0 transition-spring ml-8">
                  <h3 className="font-semibold text-accent mb-2">🏞️ Marketplace</h3>
                  <p className="text-sm text-muted-foreground">Conecte-se com terrenos ideais</p>
                </div>
                <div className="gradient-card p-6 rounded-2xl shadow-medium backdrop-blur-sm border border-border/50 transform rotate-1 hover:rotate-0 transition-spring">
                  <h3 className="font-semibold text-success mb-2">📱 Mobile-First</h3>
                  <p className="text-sm text-muted-foreground">Interface simples e acessível</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-0.5 h-2.5 sm:w-1 sm:h-3 bg-primary rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;