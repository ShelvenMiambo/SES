// Central de Notificações - Gestão de alertas e configurações de notificação
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Settings, 
  Check, 
  X, 
  Eye,
  AlertTriangle,
  MessageCircle,
  DollarSign,
  Calendar,
  Sprout,
  Users,
  Smartphone,
  Mail,
  Volume2,
  ArrowLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data para notificações (em produção viria de uma API)
const mockNotificacoes = [
  {
    id: 1,
    tipo: 'Pagamento',
    titulo: 'Pagamento Recebido',
    descricao: 'Recebeu 15.000 MT do arrendamento da Quinta da Esperança',
    data: '2024-12-01 14:30',
    lida: false,
    urgencia: 'normal',
    icone: DollarSign,
    cor: 'text-green-500'
  },
  {
    id: 2,
    tipo: 'Alerta',
    titulo: 'Risco de Pragas',
    descricao: 'Condições climáticas favoráveis para aparecimento de lagartas no seu milho',
    data: '2024-12-01 10:15',
    lida: false,
    urgencia: 'alta',
    icone: AlertTriangle,
    cor: 'text-red-500'
  },
  {
    id: 3,
    tipo: 'Mensagem',
    titulo: 'Nova Mensagem',
    descricao: 'João Machava enviou uma mensagem sobre a propriedade',
    data: '2024-12-01 09:45',
    lida: true,
    urgencia: 'normal',
    icone: MessageCircle,
    cor: 'text-blue-500'
  },
  {
    id: 4,
    tipo: 'Cultivo',
    titulo: 'Hora de Irrigar',
    descricao: 'Solo com baixa humidade no plano de feijão - Campos do Sul',
    data: '2024-11-30 18:00',
    lida: true,
    urgencia: 'media',
    icone: Sprout,
    cor: 'text-green-600'
  },
  {
    id: 5,
    tipo: 'Contrato',
    titulo: 'Contrato Expirado',
    descricao: 'O contrato de parceria com António Mucavel expira em 7 dias',
    data: '2024-11-30 12:00',
    lida: false,
    urgencia: 'media',
    icone: Calendar,
    cor: 'text-orange-500'
  },
  {
    id: 6,
    tipo: 'Sistema',
    titulo: 'Bem-vindo à AgroConecta',
    descricao: 'Sua conta foi verificada com sucesso. Explore todas as funcionalidades!',
    data: '2024-11-29 16:30',
    lida: true,
    urgencia: 'normal',
    icone: Users,
    cor: 'text-primary'
  }
];

const Notificacoes = () => {
  const [filtro, setFiltro] = useState<'todas' | 'nao_lidas'>('todas');
  const [configuracoes, setConfiguracoes] = useState({
    email: true,
    push: true,
    sms: false,
    sound: true,
    alertasPragas: true,
    lembretesCultivo: true,
    notificacoesPagamento: true,
    mensagensDirectas: true,
    actualizacoesContratos: true,
    noticiasPlataforma: false
  });

  const notificacoesFiltradas = filtro === 'nao_lidas' 
    ? mockNotificacoes.filter(n => !n.lida)
    : mockNotificacoes;

  const naoLidas = mockNotificacoes.filter(n => !n.lida).length;

  const marcarComoLida = (id: number) => {
    // Aqui seria a lógica para marcar como lida via API
    console.log('Marcando notificação como lida:', id);
  };

  const marcarTodasComoLidas = () => {
    // Aqui seria a lógica para marcar todas como lidas via API
    console.log('Marcando todas as notificações como lidas');
  };

  const getUrgenciaStyle = (urgencia: string) => {
    switch (urgencia) {
      case 'alta':
        return 'border-l-red-500 bg-red-50/50';
      case 'media':
        return 'border-l-orange-500 bg-orange-50/50';
      default:
        return 'border-l-blue-500 bg-blue-50/50';
    }
  };

  const atualizarConfiguracao = (key: string, value: boolean) => {
    setConfiguracoes(prev => ({ ...prev, [key]: value }));
    // Aqui seria a lógica para salvar configurações via API
    console.log('Atualizando configuração:', key, value);
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
            <div className="p-3 rounded-xl gradient-secondary shadow-medium">
              <Bell className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Central de</span> Notificações
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantenha-se atualizado com alertas importantes, mensagens e atividades da sua conta.
          </p>
        </div>

        <Tabs defaultValue="notificacoes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="notificacoes" className="flex items-center space-x-2">
              <Bell className="h-4 w-4" />
              <span>Notificações</span>
              {naoLidas > 0 && (
                <Badge variant="destructive" className="text-xs ml-1">
                  {naoLidas}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="configuracoes" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Configurações</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notificacoes" className="space-y-6">
            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center space-x-4">
                <Button
                  variant={filtro === 'todas' ? 'default' : 'outline'}
                  onClick={() => setFiltro('todas')}
                  size="sm"
                >
                  Todas ({mockNotificacoes.length})
                </Button>
                <Button
                  variant={filtro === 'nao_lidas' ? 'default' : 'outline'}
                  onClick={() => setFiltro('nao_lidas')}
                  size="sm"
                >
                  Não Lidas ({naoLidas})
                </Button>
              </div>
              
              {naoLidas > 0 && (
                <Button variant="outline" size="sm" onClick={marcarTodasComoLidas}>
                  <Check className="h-4 w-4 mr-2" />
                  Marcar Todas como Lidas
                </Button>
              )}
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
              {notificacoesFiltradas.length === 0 ? (
                <Card className="text-center py-12 border-border/50">
                  <CardContent>
                    <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Nenhuma notificação</h3>
                    <p className="text-muted-foreground">
                      {filtro === 'nao_lidas' ? 'Todas as notificações foram lidas!' : 'Você não tem notificações ainda.'}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                notificacoesFiltradas.map((notificacao) => {
                  const IconComponent = notificacao.icone;
                  return (
                    <Card 
                      key={notificacao.id} 
                      className={`border-l-4 transition-colors hover:bg-muted/30 ${
                        getUrgenciaStyle(notificacao.urgencia)
                      } ${!notificacao.lida ? 'border-border shadow-sm' : 'border-border/30'}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className={`p-2 rounded-lg bg-background shadow-sm ${notificacao.cor}`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className={`font-semibold ${!notificacao.lida ? 'text-foreground' : 'text-muted-foreground'}`}>
                                  {notificacao.titulo}
                                </h3>
                                {!notificacao.lida && (
                                  <div className="w-2 h-2 bg-primary rounded-full" />
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {notificacao.tipo}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                                {notificacao.descricao}
                              </p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(notificacao.data).toLocaleString('pt-MZ')}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            {!notificacao.lida && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => marcarComoLida(notificacao.id)}
                                title="Marcar como lida"
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                            )}
                            <Button variant="ghost" size="sm" title="Ver detalhes">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </TabsContent>

          <TabsContent value="configuracoes" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Métodos de Notificação */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="h-5 w-5 mr-2 text-primary" />
                    Métodos de Notificação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <Label htmlFor="email" className="font-medium">Email</Label>
                        <p className="text-sm text-muted-foreground">Receber notificações por email</p>
                      </div>
                    </div>
                    <Switch
                      id="email"
                      checked={configuracoes.email}
                      onCheckedChange={(checked) => atualizarConfiguracao('email', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Bell className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <Label htmlFor="push" className="font-medium">Push</Label>
                        <p className="text-sm text-muted-foreground">Notificações no navegador</p>
                      </div>
                    </div>
                    <Switch
                      id="push"
                      checked={configuracoes.push}
                      onCheckedChange={(checked) => atualizarConfiguracao('push', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <Label htmlFor="sms" className="font-medium">SMS</Label>
                        <p className="text-sm text-muted-foreground">Notificações por mensagem de texto</p>
                      </div>
                    </div>
                    <Switch
                      id="sms"
                      checked={configuracoes.sms}
                      onCheckedChange={(checked) => atualizarConfiguracao('sms', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <Label htmlFor="sound" className="font-medium">Som</Label>
                        <p className="text-sm text-muted-foreground">Reproduzir som nas notificações</p>
                      </div>
                    </div>
                    <Switch
                      id="sound"
                      checked={configuracoes.sound}
                      onCheckedChange={(checked) => atualizarConfiguracao('sound', checked)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Tipos de Notificação */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-primary" />
                    Tipos de Notificação
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <div>
                        <Label htmlFor="alertasPragas" className="font-medium">Alertas de Pragas</Label>
                        <p className="text-sm text-muted-foreground">Avisos sobre riscos de pragas</p>
                      </div>
                    </div>
                    <Switch
                      id="alertasPragas"
                      checked={configuracoes.alertasPragas}
                      onCheckedChange={(checked) => atualizarConfiguracao('alertasPragas', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Sprout className="h-4 w-4 text-green-500" />
                      <div>
                        <Label htmlFor="lembretesCultivo" className="font-medium">Lembretes de Cultivo</Label>
                        <p className="text-sm text-muted-foreground">Atividades de plantio e colheita</p>
                      </div>
                    </div>
                    <Switch
                      id="lembretesCultivo"
                      checked={configuracoes.lembretesCultivo}
                      onCheckedChange={(checked) => atualizarConfiguracao('lembretesCultivo', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <div>
                        <Label htmlFor="notificacoesPagamento" className="font-medium">Pagamentos</Label>
                        <p className="text-sm text-muted-foreground">Notificações financeiras</p>
                      </div>
                    </div>
                    <Switch
                      id="notificacoesPagamento"
                      checked={configuracoes.notificacoesPagamento}
                      onCheckedChange={(checked) => atualizarConfiguracao('notificacoesPagamento', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      <div>
                        <Label htmlFor="mensagensDirectas" className="font-medium">Mensagens Diretas</Label>
                        <p className="text-sm text-muted-foreground">Conversas com outros utilizadores</p>
                      </div>
                    </div>
                    <Switch
                      id="mensagensDirectas"
                      checked={configuracoes.mensagensDirectas}
                      onCheckedChange={(checked) => atualizarConfiguracao('mensagensDirectas', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <div>
                        <Label htmlFor="actualizacoesContratos" className="font-medium">Contratos</Label>
                        <p className="text-sm text-muted-foreground">Atualizações de contratos</p>
                      </div>
                    </div>
                    <Switch
                      id="actualizacoesContratos"
                      checked={configuracoes.actualizacoesContratos}
                      onCheckedChange={(checked) => atualizarConfiguracao('actualizacoesContratos', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Users className="h-4 w-4 text-purple-500" />
                      <div>
                        <Label htmlFor="noticiasPlataforma" className="font-medium">Notícias da Plataforma</Label>
                        <p className="text-sm text-muted-foreground">Novidades e atualizações</p>
                      </div>
                    </div>
                    <Switch
                      id="noticiasPlataforma"
                      checked={configuracoes.noticiasPlataforma}
                      onCheckedChange={(checked) => atualizarConfiguracao('noticiasPlataforma', checked)}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <h3 className="font-semibold">Configurações Salvas</h3>
                  <p className="text-sm text-muted-foreground">
                    As suas preferências de notificação foram atualizadas automaticamente.
                    Pode alterar estas configurações a qualquer momento.
                  </p>
                  <Button variant="outline">
                    Testar Notificações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Notificacoes;