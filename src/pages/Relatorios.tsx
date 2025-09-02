// Página de Relatórios e Analytics - Dashboards e métricas de performance
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  Download,
  Sprout,
  Users,
  MapPin,
  Target,
  PieChart,
  LineChart,
  Activity,
  FileText,
  Eye,
  ArrowLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data para relatórios (em produção viria de uma API de analytics)
const mockDashboardData = {
  resumoFinanceiro: {
    totalRecebido: 89500,
    totalGasto: 12300,
    lucroLiquido: 77200,
    crescimentoMensal: 15.2
  },
  producao: {
    totalAreaCultivada: 45,
    numeroPlanos: 8,
    plantosAtivos: 5,
    mediaRendimento: 85
  },
  marketplace: {
    propriedadesListadas: 3,
    visualizacoes: 247,
    interessados: 12,
    taxaConversao: 24
  },
  periodo: 'últimos 6 meses'
};

const mockRelatorioProducao = [
  {
    mes: 'Jul 2024',
    milho: 850,
    feijao: 320,
    tomate: 180,
    total: 1350
  },
  {
    mes: 'Ago 2024',
    milho: 920,
    feijao: 290,
    tomate: 210,
    total: 1420
  },
  {
    mes: 'Set 2024',
    milho: 780,
    feijao: 340,
    tomate: 190,
    total: 1310
  },
  {
    mes: 'Out 2024',
    milho: 1100,
    feijao: 380,
    tomate: 250,
    total: 1730
  },
  {
    mes: 'Nov 2024',
    milho: 950,
    feijao: 310,
    tomate: 200,
    total: 1460
  },
  {
    mes: 'Dez 2024',
    milho: 1200,
    feijao: 420,
    tomate: 280,
    total: 1900
  }
];

const mockRelatorioFinanceiro = [
  {
    categoria: 'Arrendamento de Terras',
    valor: 45000,
    percentual: 50.3,
    crescimento: 12.5
  },
  {
    categoria: 'Venda de Produtos',
    valor: 28500,
    percentual: 31.8,
    crescimento: 8.3
  },
  {
    categoria: 'Parcerias',
    valor: 12000,
    percentual: 13.4,
    crescimento: 22.1
  },
  {
    categoria: 'Consultoria',
    valor: 4000,
    percentual: 4.5,
    crescimento: 5.2
  }
];

const Relatorios = () => {
  const [periodoSelecionado, setPeriodoSelecionado] = useState('6meses');
  const [tipoRelatorio, setTipoRelatorio] = useState('geral');

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-MZ', {
      style: 'currency',
      currency: 'MZN'
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
  };

  const exportarRelatorio = (tipo: string) => {
    // Aqui seria a lógica para exportar relatório
    console.log('Exportando relatório:', tipo);
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
            <div className="p-3 rounded-xl gradient-earth shadow-medium">
              <BarChart3 className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Relatórios e</span> Analytics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Analise o desempenho das suas atividades, monitore lucros e tome decisões baseadas em dados.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex gap-4">
            <Select value={periodoSelecionado} onValueChange={setPeriodoSelecionado}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Selecionar período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1mes">Último mês</SelectItem>
                <SelectItem value="3meses">Últimos 3 meses</SelectItem>
                <SelectItem value="6meses">Últimos 6 meses</SelectItem>
                <SelectItem value="1ano">Último ano</SelectItem>
              </SelectContent>
            </Select>

            <Select value={tipoRelatorio} onValueChange={setTipoRelatorio}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Tipo de relatório" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="geral">Relatório Geral</SelectItem>
                <SelectItem value="financeiro">Financeiro</SelectItem>
                <SelectItem value="producao">Produção</SelectItem>
                <SelectItem value="marketplace">Marketplace</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={() => exportarRelatorio(tipoRelatorio)}>
            <Download className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
            <TabsTrigger value="producao">Produção</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Receita Total</p>
                      <p className="text-2xl font-bold text-primary">
                        {formatCurrency(mockDashboardData.resumoFinanceiro.totalRecebido)}
                      </p>
                      <p className="text-sm text-success">
                        {formatPercentage(mockDashboardData.resumoFinanceiro.crescimentoMensal)} vs mês anterior
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Área Cultivada</p>
                      <p className="text-2xl font-bold text-accent">
                        {mockDashboardData.producao.totalAreaCultivada}ha
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {mockDashboardData.producao.plantosAtivos} planos ativos
                      </p>
                    </div>
                    <Sprout className="h-8 w-8 text-accent" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Visualizações</p>
                      <p className="text-2xl font-bold text-success">
                        {mockDashboardData.marketplace.visualizacoes}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {mockDashboardData.marketplace.interessados} interessados
                      </p>
                    </div>
                    <Eye className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Lucro Líquido</p>
                      <p className="text-2xl font-bold text-warning">
                        {formatCurrency(mockDashboardData.resumoFinanceiro.lucroLiquido)}
                      </p>
                      <p className="text-sm text-success">
                        Margem de 86%
                      </p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="h-5 w-5 mr-2 text-primary" />
                    Evolução da Receita
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockRelatorioProducao.slice(-3).map((item, index) => (
                      <div key={item.mes} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.mes}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${(item.total / 2000) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-primary">
                            {formatCurrency(item.total * 15)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-accent" />
                    Distribuição de Receita
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockRelatorioFinanceiro.map((item, index) => (
                      <div key={item.categoria} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{item.categoria}</span>
                          <span className="text-sm text-primary font-bold">
                            {formatCurrency(item.valor)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={item.percentual} className="flex-1 h-2" />
                          <span className="text-xs text-muted-foreground w-12">
                            {item.percentual.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-success" />
                  Atividade Recente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-green-100 rounded-full">
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Pagamento recebido</p>
                      <p className="text-sm text-muted-foreground">Arrendamento - Quinta da Esperança</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">+15.000 MT</p>
                      <p className="text-xs text-muted-foreground">Há 2 horas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Sprout className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Plano de cultivo atualizado</p>
                      <p className="text-sm text-muted-foreground">Milho - Progresso 75%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Há 5 horas</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Nova mensagem</p>
                      <p className="text-sm text-muted-foreground">João Machava interessado na propriedade</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Há 1 dia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financeiro" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-success">Receitas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockRelatorioFinanceiro.map((item) => (
                      <div key={item.categoria} className="flex items-center justify-between">
                        <span className="text-sm">{item.categoria}</span>
                        <div className="text-right">
                          <p className="font-bold text-success">{formatCurrency(item.valor)}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatPercentage(item.crescimento)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-destructive">Despesas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Comissões da Plataforma</span>
                      <span className="font-bold text-destructive">-4.500 MT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Fertilizantes</span>
                      <span className="font-bold text-destructive">-3.200 MT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Sementes</span>
                      <span className="font-bold text-destructive">-2.800 MT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Outros</span>
                      <span className="font-bold text-destructive">-1.800 MT</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-primary">Resumo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Total de Receitas</span>
                      <span className="font-bold text-success">89.500 MT</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Total de Despesas</span>
                      <span className="font-bold text-destructive">-12.300 MT</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Lucro Líquido</span>
                        <span className="font-bold text-primary text-lg">77.200 MT</span>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm font-medium text-primary">
                        Margem de Lucro: 86.3%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="producao" className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                  Produção por Cultura (kg)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockRelatorioProducao.map((item) => (
                    <div key={item.mes} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.mes}</span>
                        <span className="font-bold text-primary">{item.total}kg total</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Milho</span>
                            <span className="text-sm font-medium">{item.milho}kg</span>
                          </div>
                          <Progress value={(item.milho / item.total) * 100} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Feijão</span>
                            <span className="text-sm font-medium">{item.feijao}kg</span>
                          </div>
                          <Progress value={(item.feijao / item.total) * 100} className="h-2 [&>div]:bg-accent" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Tomate</span>
                            <span className="text-sm font-medium">{item.tomate}kg</span>
                          </div>
                          <Progress value={(item.tomate / item.total) * 100} className="h-2 [&>div]:bg-success" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marketplace" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Performance das Propriedades</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Quinta da Esperança</span>
                        <span className="text-sm font-medium">124 visualizações</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Terra dos Baobás</span>
                        <span className="text-sm font-medium">89 visualizações</span>
                      </div>
                      <Progress value={65} className="h-2 [&>div]:bg-accent" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Campos do Sul</span>
                        <span className="text-sm font-medium">34 visualizações</span>
                      </div>
                      <Progress value={25} className="h-2 [&>div]:bg-success" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Taxa de Conversão</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">24%</p>
                      <p className="text-sm text-muted-foreground">
                        de visitantes demonstram interesse
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Visualizações</span>
                        <span>247</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Interessados</span>
                        <span>59</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Conversas iniciadas</span>
                        <span>12</span>
                      </div>
                      <div className="flex items-center justify-between text-sm font-medium">
                        <span>Contratos fechados</span>
                        <span>3</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Relatorios;