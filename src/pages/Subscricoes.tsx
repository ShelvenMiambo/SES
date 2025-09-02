// Página de Planos e Subscrições - Sistema de monetização da plataforma
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { 
  Crown, 
  Check, 
  X, 
  Zap, 
  Star,
  Shield,
  Users,
  BarChart3,
  MessageCircle,
  Smartphone,
  Globe,
  Headphones,
  CreditCard,
  Calendar,
  TrendingUp,
  ArrowLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Dados dos planos de subscrição (configurados estaticamente)
const planosSubscricao = [
  {
    id: 'basico',
    nome: 'Básico',
    preco: 0,
    periodo: 'mês',
    descricao: 'Perfeito para começar',
    popular: false,
    recursos: [
      'Até 2 propriedades no marketplace',
      'Até 3 planos de cultivo',
      'Assistente IA básico (10 perguntas/mês)',
      'Suporte por email',
      'Relatórios básicos'
    ],
    limitacoes: [
      'Sem contratos digitais',
      'Sem pagamentos integrados',
      'Sem suporte prioritário'
    ]
  },
  {
    id: 'profissional',
    nome: 'Profissional',
    preco: 299,
    periodo: 'mês',
    descricao: 'Para agricultores ativos',
    popular: true,
    recursos: [
      'Propriedades ilimitadas',
      'Planos de cultivo ilimitados',
      'Assistente IA avançado (100 perguntas/mês)',
      'Contratos digitais seguros',
      'Pagamentos integrados (M-Pesa, eMola)',
      'Relatórios avançados',
      'Suporte prioritário',
      'Alertas personalizados'
    ],
    limitacoes: [
      'Comissão de 3% nas transações'
    ]
  },
  {
    id: 'empresarial',
    nome: 'Empresarial',
    preco: 899,
    periodo: 'mês',
    descricao: 'Para grandes operações',
    popular: false,
    recursos: [
      'Tudo do plano Profissional',
      'Assistente IA ilimitado',
      'API de integração',
      'Gestão de equipas',
      'Análises avançadas',
      'Suporte 24/7',
      'Comissão reduzida (1.5%)',
      'Gestor de conta dedicado',
      'Formação personalizada'
    ],
    limitacoes: []
  }
];

// Mock data para faturação
const mockFaturacao = {
  planoAtual: 'profissional',
  proximoVencimento: '2025-01-15',
  valorProximo: 299,
  historicoUso: {
    perguntasIA: 67,
    limitePerguntasIA: 100,
    propriedades: 5,
    planosCultivo: 12,
    transacoes: 8
  }
};

const Subscricoes = () => {
  const [planoSelecionado, setPlanoSelecionado] = useState(mockFaturacao.planoAtual);
  const [billingAnual, setBillingAnual] = useState(false);

  const getPrecoComDesconto = (preco: number) => {
    return billingAnual ? preco * 10 : preco; // 2 meses grátis no anual
  };

  const getDesconto = () => {
    return billingAnual ? '17% de desconto' : '';
  };

  const planoAtual = planosSubscricao.find(p => p.id === mockFaturacao.planoAtual);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-MZ', {
      style: 'currency',
      currency: 'MZN'
    }).format(value);
  };

  const handleUpgrade = (novoPlano: string) => {
    console.log('Fazendo upgrade para:', novoPlano);
    // Aqui seria a lógica para processar o upgrade
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-xl gradient-hero shadow-medium">
              <Crown className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Planos e</span> Subscrições
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para potencializar a sua atividade agrícola com ferramentas avançadas.
          </p>
        </div>

        {/* Current Plan Status */}
        {planoAtual && (
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-primary" />
                  Plano Atual: {planoAtual.nome}
                </div>
                <Badge variant="default" className="bg-primary">
                  Ativo
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Próximo vencimento</p>
                  <p className="font-semibold">
                    {new Date(mockFaturacao.proximoVencimento).toLocaleDateString('pt-MZ')}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Valor a pagar</p>
                  <p className="font-semibold text-primary">
                    {formatCurrency(mockFaturacao.valorProximo)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Uso da IA este mês</p>
                  <div className="flex items-center space-x-2">
                    <Progress 
                      value={(mockFaturacao.historicoUso.perguntasIA / mockFaturacao.historicoUso.limitePerguntasIA) * 100} 
                      className="flex-1 h-2" 
                    />
                    <span className="text-sm font-medium">
                      {mockFaturacao.historicoUso.perguntasIA}/{mockFaturacao.historicoUso.limitePerguntasIA}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className={`text-sm ${!billingAnual ? 'font-medium' : 'text-muted-foreground'}`}>
            Mensal
          </span>
          <Switch
            checked={billingAnual}
            onCheckedChange={setBillingAnual}
          />
          <span className={`text-sm ${billingAnual ? 'font-medium' : 'text-muted-foreground'}`}>
            Anual
          </span>
          {billingAnual && (
            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
              {getDesconto()}
            </Badge>
          )}
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {planosSubscricao.map((plano) => (
            <Card 
              key={plano.id} 
              className={`border-border/50 relative ${
                plano.popular ? 'border-primary shadow-medium scale-105' : ''
              } ${plano.id === planoSelecionado ? 'ring-2 ring-primary' : ''}`}
            >
              {plano.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">{plano.nome}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">
                      {plano.preco === 0 ? 'Grátis' : formatCurrency(getPrecoComDesconto(plano.preco))}
                    </span>
                    {plano.preco > 0 && (
                      <span className="text-muted-foreground ml-2">
                        /{billingAnual ? 'ano' : plano.periodo}
                      </span>
                    )}
                  </div>
                  {billingAnual && plano.preco > 0 && (
                    <p className="text-sm text-muted-foreground line-through">
                      {formatCurrency(plano.preco * 12)}/ano
                    </p>
                  )}
                  <p className="text-muted-foreground">{plano.descricao}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {plano.recursos.map((recurso, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{recurso}</span>
                    </div>
                  ))}
                  {plano.limitacoes.map((limitacao, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{limitacao}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full" 
                  variant={plano.id === planoSelecionado ? 'outline' : plano.popular ? 'default' : 'outline'}
                  onClick={() => handleUpgrade(plano.id)}
                  disabled={plano.id === planoSelecionado}
                >
                  {plano.id === planoSelecionado ? (
                    'Plano Atual'
                  ) : plano.preco === 0 ? (
                    'Começar Grátis'
                  ) : (
                    `Fazer Upgrade`
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <Card className="mb-8 border-border/50">
          <CardHeader>
            <CardTitle className="text-center">Comparação Detalhada de Recursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Recurso</th>
                    <th className="text-center py-3 px-4">Básico</th>
                    <th className="text-center py-3 px-4">Profissional</th>
                    <th className="text-center py-3 px-4">Empresarial</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Propriedades no Marketplace</td>
                    <td className="text-center py-3 px-4">2</td>
                    <td className="text-center py-3 px-4">Ilimitadas</td>
                    <td className="text-center py-3 px-4">Ilimitadas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Planos de Cultivo</td>
                    <td className="text-center py-3 px-4">3</td>
                    <td className="text-center py-3 px-4">Ilimitados</td>
                    <td className="text-center py-3 px-4">Ilimitados</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Perguntas IA por mês</td>
                    <td className="text-center py-3 px-4">10</td>
                    <td className="text-center py-3 px-4">100</td>
                    <td className="text-center py-3 px-4">Ilimitadas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Contratos Digitais</td>
                    <td className="text-center py-3 px-4">
                      <X className="h-4 w-4 text-red-500 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Comissão Transações</td>
                    <td className="text-center py-3 px-4">N/A</td>
                    <td className="text-center py-3 px-4">3%</td>
                    <td className="text-center py-3 px-4">1.5%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Suporte</td>
                    <td className="text-center py-3 px-4">Email</td>
                    <td className="text-center py-3 px-4">Prioritário</td>
                    <td className="text-center py-3 px-4">24/7 + Dedicado</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="mb-8 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-primary" />
              Métodos de Pagamento Aceites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">M-Pesa</h4>
                  <p className="text-sm text-muted-foreground">Pagamento móvel instantâneo</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className="p-2 bg-green-100 rounded-full">
                  <Smartphone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">eMola</h4>
                  <p className="text-sm text-muted-foreground">Carteira digital segura</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 border rounded-lg">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Smartphone className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Mkesh</h4>
                  <p className="text-sm text-muted-foreground">Solução de pagamento local</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h4>
                <p className="text-sm text-muted-foreground">
                  Sim, pode cancelar a sua subscrição a qualquer momento sem penalizações. 
                  O acesso aos recursos premium mantém-se até ao final do período pago.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Como funciona o período de teste?</h4>
                <p className="text-sm text-muted-foreground">
                  Oferecemos 14 dias de teste gratuito para o plano Profissional. 
                  Não é necessário cartão de crédito para começar.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Posso fazer upgrade ou downgrade?</h4>
                <p className="text-sm text-muted-foreground">
                  Sim, pode alterar o seu plano a qualquer momento. As alterações entram em vigor 
                  no próximo ciclo de faturação.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Os dados ficam seguros?</h4>
                <p className="text-sm text-muted-foreground">
                  Todos os dados são encriptados e armazenados de forma segura. 
                  Seguimos as melhores práticas de segurança e privacidade.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Subscricoes;