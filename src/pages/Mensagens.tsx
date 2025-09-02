// Central de Mensagens - Sistema de comunicação direta entre utilizadores
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Send, 
  Search, 
  Phone, 
  Video, 
  MoreVertical,
  Paperclip,
  Mic,
  MicOff,
  Image,
  MapPin,
  Clock,
  ArrowLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data para conversas (em produção viria de uma API WebSocket)
const mockConversas = [
  {
    id: 1,
    participante: 'João Machava',
    ultimaMensagem: 'Gostaria de saber mais sobre a sua propriedade',
    horario: '14:30',
    naoLidas: 2,
    online: true,
    tipo: 'negociacao',
    avatar: 'JM'
  },
  {
    id: 2,
    participante: 'Maria Santos',
    ultimaMensagem: 'Quando podemos finalizar o contrato?',
    horario: '12:15',
    naoLidas: 0,
    online: false,
    tipo: 'contrato',
    avatar: 'MS'
  },
  {
    id: 3,
    participante: 'António Mucavel',
    ultimaMensagem: 'Obrigado pelas dicas sobre o milho!',
    horario: 'Ontem',
    naoLidas: 0,
    online: true,
    tipo: 'consultoria',
    avatar: 'AM'
  },
  {
    id: 4,
    participante: 'Técnico AgroConecta',
    ultimaMensagem: 'Como posso ajudá-lo hoje?',
    horario: '2 dias',
    naoLidas: 0,
    online: true,
    tipo: 'suporte',
    avatar: 'TA'
  }
];

// Mock data para mensagens
const mockMensagens = [
  {
    id: 1,
    conversa_id: 1,
    remetente: 'João Machava',
    conteudo: 'Olá! Vi a sua propriedade no marketplace e gostaria de saber mais detalhes.',
    horario: '14:25',
    tipo: 'texto',
    proprio: false
  },
  {
    id: 2,
    conversa_id: 1,
    remetente: 'Você',
    conteudo: 'Olá João! Fico feliz pelo seu interesse. A propriedade tem 25 hectares e solo muito fértil.',
    horario: '14:27',
    tipo: 'texto',
    proprio: true
  },
  {
    id: 3,
    conversa_id: 1,
    remetente: 'João Machava',
    conteudo: 'Perfeito! Podemos marcar uma visita?',
    horario: '14:28',
    tipo: 'texto',
    proprio: false
  },
  {
    id: 4,
    conversa_id: 1,
    remetente: 'João Machava',
    conteudo: 'Gostaria de saber mais sobre a sua propriedade',
    horario: '14:30',
    tipo: 'texto',
    proprio: false
  }
];

const Mensagens = () => {
  const [conversaSelecionada, setConversaSelecionada] = useState<any>(mockConversas[0]);
  const [mensagemTexto, setMensagemTexto] = useState('');
  const [pesquisa, setPesquisa] = useState('');
  const [gravandoAudio, setGravandoAudio] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [conversaSelecionada]);

  const enviarMensagem = () => {
    if (!mensagemTexto.trim()) return;
    
    // Aqui seria a lógica para enviar mensagem via API
    console.log('Enviando mensagem:', mensagemTexto);
    setMensagemTexto('');
  };

  const getTipoColor = (tipo: string) => {
    const colors = {
      'negociacao': 'bg-blue-100 text-blue-800',
      'contrato': 'bg-green-100 text-green-800',
      'consultoria': 'bg-purple-100 text-purple-800',
      'suporte': 'bg-orange-100 text-orange-800'
    };
    return colors[tipo as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const conversasFiltradas = mockConversas.filter(conversa =>
    conversa.participante.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const mensagensConversa = mockMensagens.filter(msg => 
    msg.conversa_id === conversaSelecionada?.id
  );

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
            <div className="p-3 rounded-xl gradient-primary shadow-medium">
              <MessageCircle className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Central de</span> Mensagens
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comunique-se diretamente com outros utilizadores, técnicos e nossa equipe de suporte.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversas Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span>Conversas</span>
                  <Badge variant="secondary" className="text-xs">
                    {conversasFiltradas.length}
                  </Badge>
                </CardTitle>
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Pesquisar conversas..."
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-[400px] overflow-y-auto">
                  {conversasFiltradas.map((conversa) => (
                    <div
                      key={conversa.id}
                      className={`p-4 cursor-pointer border-b border-border hover:bg-muted/50 transition-colors ${
                        conversaSelecionada?.id === conversa.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                      }`}
                      onClick={() => setConversaSelecionada(conversa)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {conversa.avatar}
                            </AvatarFallback>
                          </Avatar>
                          {conversa.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-sm truncate">
                              {conversa.participante}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                              {conversa.horario}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-sm text-muted-foreground truncate">
                              {conversa.ultimaMensagem}
                            </p>
                            {conversa.naoLidas > 0 && (
                              <Badge variant="destructive" className="text-xs ml-2">
                                {conversa.naoLidas}
                              </Badge>
                            )}
                          </div>
                          <Badge variant="outline" className={`text-xs mt-2 ${getTipoColor(conversa.tipo)}`}>
                            {conversa.tipo.charAt(0).toUpperCase() + conversa.tipo.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="h-full border-border/50 flex flex-col">
              {/* Chat Header */}
              <CardHeader className="pb-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-accent text-accent-foreground">
                          {conversaSelecionada?.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {conversaSelecionada?.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold">{conversaSelecionada?.participante}</h3>
                      <p className="text-sm text-muted-foreground">
                        {conversaSelecionada?.online ? 'Online agora' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {mensagensConversa.map((mensagem) => (
                    <div
                      key={mensagem.id}
                      className={`flex ${mensagem.proprio ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          mensagem.proprio
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {!mensagem.proprio && (
                          <p className="text-xs font-semibold mb-1 text-primary">
                            {mensagem.remetente}
                          </p>
                        )}
                        <p className="text-sm leading-relaxed">{mensagem.conteudo}</p>
                        <div className="flex items-center justify-end mt-2">
                          <span className="text-xs opacity-70">
                            {mensagem.horario}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Image className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Digite a sua mensagem..."
                      value={mensagemTexto}
                      onChange={(e) => setMensagemTexto(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && enviarMensagem()}
                      className="pr-12"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`absolute right-1 top-1 h-8 w-8 p-0 ${gravandoAudio ? 'text-red-500' : ''}`}
                      onClick={() => setGravandoAudio(!gravandoAudio)}
                    >
                      {gravandoAudio ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button onClick={enviarMensagem} disabled={!mensagemTexto.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 border-border/50">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Mensagens Diretas</h3>
            <p className="text-sm text-muted-foreground">
              Comunique-se diretamente com outros utilizadores
            </p>
          </Card>

          <Card className="text-center p-6 border-border/50">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Suporte Técnico</h3>
            <p className="text-sm text-muted-foreground">
              Fale com especialistas agrícolas 24/7
            </p>
          </Card>

          <Card className="text-center p-6 border-border/50">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-success/10">
                <MapPin className="h-6 w-6 text-success" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Grupos Locais</h3>
            <p className="text-sm text-muted-foreground">
              Conecte-se com agricultores da sua região
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Mensagens;