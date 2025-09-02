import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff,
  Volume2,
  VolumeX,
  Languages,
  BookOpen,
  Lightbulb,
  Bug,
  Cloud,
  Sprout,
  ArrowLeft
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Message = {
  id: number;
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
  hasAudio?: boolean;
};

const topicSuggestions = [
  { icon: Sprout, text: "Como plantar milho?", category: "Cultivo" },
  { icon: Bug, text: "Pragas no tomateiro", category: "Pragas" },
  { icon: Cloud, text: "Previsão do tempo", category: "Clima" },
  { icon: Lightbulb, text: "Melhores práticas", category: "Dicas" }
];

const AssistenteIA = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      content: 'Olá! Sou o seu assistente agrícola inteligente. Como posso ajudá-lo hoje? Pode fazer perguntas sobre cultivo, pragas, clima ou qualquer outra dúvida agrícola.',
      timestamp: new Date(),
      hasAudio: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pt');
  const [audioEnabled, setAudioEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇲🇿' },
    { code: 'mua', name: 'Makua', flag: '🌍' },
    { code: 'seh', name: 'Sena', flag: '🌍' },
    { code: 'tsc', name: 'Changana', flag: '🌍' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        sender: 'ai',
        content: generateAIResponse(content),
        timestamp: new Date(),
        hasAudio: audioEnabled
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('milho') || input.includes('plantar')) {
      return 'Para plantar milho em Moçambique, recomendo:\n\n• Plante no início da estação chuvosa (Outubro-Novembro)\n• Use sementes certificadas adaptadas ao clima local\n• Faça sulcos de 2-3cm de profundidade\n• Mantenha distância de 25cm entre plantas\n• Aplique fertilizantes NPK na plantação\n\nPrecisa de mais detalhes sobre algum destes pontos?';
    }
    
    if (input.includes('praga') || input.includes('inseto') || input.includes('tomate')) {
      return 'Para controlo de pragas no tomateiro:\n\n• Identifique o tipo de praga (lagarta, pulgão, mosca-branca)\n• Use armadilhas cromáticas amarelas\n• Aplique inseticidas biológicos como Bacillus thuringiensis\n• Faça rotação de culturas\n• Mantenha o terreno limpo de ervas daninhas\n\nQuer que explique como identificar pragas específicas?';
    }
    
    if (input.includes('tempo') || input.includes('chuva') || input.includes('clima')) {
      return 'Previsão climática para agricultura:\n\n• Esta semana: possibilidade de chuvas ligeiras\n• Temperatura: 25-32°C\n• Humidade: 65-80%\n• Vento: moderado de sudeste\n\nRecomendações:\n• Bom momento para plantação\n• Prepare drenagem para excesso de água\n• Monitore pragas que aumentam com humidade';
    }
    
    return 'Obrigado pela sua pergunta! Sou especializado em agricultura moçambicana e posso ajudar com:\n\n• Técnicas de cultivo\n• Controlo de pragas e doenças\n• Previsões climáticas\n• Melhores práticas agrícolas\n• Gestão de solo e água\n\nPode reformular a sua pergunta ou escolher um dos tópicos sugeridos?';
  };

  const handleTopicClick = (topic: string) => {
    sendMessage(topic);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here would be voice recording logic
  };

  const playAudio = (messageId: number) => {
    // Here would be audio playback logic
    console.log('Playing audio for message:', messageId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
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
              <Bot className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Assistente IA</span> Agrícola
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conselhos personalizados sobre cultivo, pragas, clima e melhores práticas agrícolas. 
            Disponível em 4 idiomas locais.
          </p>
        </div>

        {/* Language and Settings */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Languages className="h-4 w-4 text-muted-foreground" />
            <select 
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-background border border-border rounded-md px-3 py-1 text-sm"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setAudioEnabled(!audioEnabled)}
          >
            {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
        </div>

        {/* Chat Interface */}
        <Card className="mb-6 border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg">
              <Bot className="h-5 w-5 mr-2 text-primary" />
              Conversa com o Assistente
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Messages */}
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <p className="whitespace-pre-line text-sm leading-relaxed">
                        {message.content}
                      </p>
                      {message.hasAudio && message.sender === 'ai' && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-2 p-2 h-auto text-primary hover:text-primary-hover hover:bg-primary/10"
                          onClick={() => playAudio(message.id)}
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString('pt-MZ', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Input
                  placeholder="Digite a sua pergunta sobre agricultura..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
                  className="pr-12"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className={`absolute right-1 top-1 h-8 w-8 p-0 ${isRecording ? 'text-red-500' : ''}`}
                  onClick={toggleRecording}
                >
                  {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
              </div>
              <Button onClick={() => sendMessage(inputMessage)} disabled={!inputMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Topic Suggestions */}
        <Card className="mb-6 border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg">
              <Lightbulb className="h-5 w-5 mr-2 text-accent" />
              Temas Populares
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {topicSuggestions.map((topic, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex-col items-center justify-center space-y-2 hover:bg-primary/5"
                  onClick={() => handleTopicClick(topic.text)}
                >
                  <topic.icon className="h-5 w-5 text-primary" />
                  <div className="text-center">
                    <p className="text-xs font-medium">{topic.text}</p>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {topic.category}
                    </Badge>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 border-border/50">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Languages className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">4 Idiomas Locais</h3>
            <p className="text-sm text-muted-foreground">
              Suporte em Português, Makua, Sena e Changana
            </p>
          </Card>

          <Card className="text-center p-6 border-border/50">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Volume2 className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Respostas em Áudio</h3>
            <p className="text-sm text-muted-foreground">
              Ouça as respostas mesmo com baixa literacia
            </p>
          </Card>

          <Card className="text-center p-6 border-border/50">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-success/10">
                <BookOpen className="h-6 w-6 text-success" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Conteúdo Técnico</h3>
            <p className="text-sm text-muted-foreground">
              Acesso a vídeos, guias e informações especializadas
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AssistenteIA;