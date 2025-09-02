// Componente Features Section - Exibe as principais funcionalidades da plataforma
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Bot, 
  Sprout, 
  Handshake,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Smartphone,
  Globe,
  Shield
} from "lucide-react";

// Lista das principais funcionalidades com ícones e descrições
const features = [
  {
    icon: MapPin,
    title: "Marketplace de Terras",
    description: "Encontre e arrendam terrenos agrícolas com características detalhadas, fotos e localização GPS.",
    benefits: ["Filtros inteligentes", "Mapa interativo", "Comunicação direta"],
    color: "text-primary",
    gradient: "gradient-primary"
  },
  {
    icon: Bot,
    title: "Assistente IA Agrícola",
    description: "Receba conselhos personalizados sobre cultivo, pragas, clima e melhores práticas agrícolas.",
    benefits: ["Suporte em 4 idiomas", "Respostas por voz", "Conteúdo técnico"],
    color: "text-accent",
    gradient: "gradient-hero"
  },
  {
    icon: Sprout,
    title: "Gestão de Produção",
    description: "Planeie, monitorize e otimize os seus cultivos com ferramentas intuitivas e alertas inteligentes.",
    benefits: ["Planos de cultivo", "Alertas personalizados", "Histórico detalhado"],
    color: "text-success",
    gradient: "gradient-card"
  },
  {
    icon: Handshake,
    title: "Negociações Seguras",
    description: "Crie contratos digitais, gerencie pagamentos e faça transações seguras com outros utilizadores.",
    benefits: ["Contratos digitais", "Pagamentos móveis", "Histórico completo"],
    color: "text-warning",
    gradient: "gradient-earth"
  }
];

const additionalFeatures = [
  {
    icon: MessageSquare,
    title: "Comunicação Integrada",
    description: "Chat direto entre utilizadores com suporte a texto, voz e imagens."
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    description: "Dashboards simples com métricas importantes para o seu negócio."
  },
  {
    icon: Smartphone,
    title: "100% Mobile-First",
    description: "Interface otimizada para telemóveis, funcionando perfeitamente offline."
  },
  {
    icon: Globe,
    title: "Multilíngue",
    description: "Suporte nativo para Português, Makua, Sena e Changana."
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Dados protegidos e verificação de identidade para maior segurança."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Funcionalidades</span> que Transformam
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo o que precisa para revolucionar a sua atividade agrícola numa única plataforma intuitiva e acessível.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-strong transition-spring border-border/50 gradient-card">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-xl ${feature.gradient} shadow-medium`}>
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary/10 transition-smooth"
                >
                  Saber Mais
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-medium transition-smooth border-border/50">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-muted">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/registo">
            <Button variant="hero" size="lg">
              Experimente Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Sem cartão de crédito. Configure em menos de 2 minutos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;