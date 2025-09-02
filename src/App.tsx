// Aplicação principal AgroConecta - Plataforma agrícola inteligente para Moçambique
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Marketplace from "./pages/Marketplace";
import AssistenteIA from "./pages/AssistenteIA";
import Producao from "./pages/Producao";
import Negociacoes from "./pages/Negociacoes";
import Login from "./pages/Login";
import Registo from "./pages/Registo";
import Mensagens from "./pages/Mensagens";
import Notificacoes from "./pages/Notificacoes";
import Relatorios from "./pages/Relatorios";
import Subscricoes from "./pages/Subscricoes";

// Cliente de queries para gestão de estado assfíncrono
const queryClient = new QueryClient();

// Componente principal da aplicação com roteamento e providers
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/assistente-ia" element={<AssistenteIA />} />
          <Route path="/producao" element={<Producao />} />
          <Route path="/negociacoes" element={<Negociacoes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registo" element={<Registo />} />
          <Route path="/mensagens" element={<Mensagens />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/subscricoes" element={<Subscricoes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
