// Componente Header - Navegação principal da aplicação
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Bell, MessageCircle, BarChart3, CreditCard, Settings, LogOut, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // Hook para detectar rota ativa
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AC</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-primary">AgroConecta</h1>
              <span className="text-xs text-muted-foreground -mt-1">AI</span>
            </div>
          </Link>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/marketplace" 
              className={`text-sm font-medium transition-smooth ${
                isActive('/marketplace') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Marketplace
            </Link>
            <Link 
              to="/assistente-ia" 
              className={`text-sm font-medium transition-smooth ${
                isActive('/assistente-ia') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Assistente IA
            </Link>
            <Link 
              to="/producao" 
              className={`text-sm font-medium transition-smooth ${
                isActive('/producao') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Produção
            </Link>
            <Link 
              to="/negociacoes" 
              className={`text-sm font-medium transition-smooth ${
                isActive('/negociacoes') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Negociações
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Messages */}
            <Link to="/mensagens">
              <Button variant="ghost" size="sm" className="hidden sm:flex relative">
                <MessageCircle className="h-4 w-4" />
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs flex items-center justify-center">
                  2
                </Badge>
              </Button>
            </Link>
            
            {/* Notifications */}
            <Link to="/notificacoes">
              <Button variant="ghost" size="sm" className="hidden sm:flex relative">
                <Bell className="h-4 w-4" />
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs flex items-center justify-center">
                  5
                </Badge>
              </Button>
            </Link>
            
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/relatorios" className="flex items-center">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Relatórios
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/subscricoes" className="flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Subscrições
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex-1 space-y-2">
                    <Link 
                      to="/marketplace" 
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        isActive('/marketplace') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-medium">Marketplace</span>
                    </Link>
                    <Link 
                      to="/assistente-ia" 
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        isActive('/assistente-ia') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-medium">Assistente IA</span>
                    </Link>
                    <Link 
                      to="/producao" 
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        isActive('/producao') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-medium">Produção</span>
                    </Link>
                    <Link 
                      to="/negociacoes" 
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        isActive('/negociacoes') ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-medium">Negociações</span>
                    </Link>
                  </nav>
                  
                  {/* Mobile Actions */}
                  <div className="border-t pt-4 space-y-2">
                    <Link to="/mensagens" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Mensagens
                        <Badge variant="destructive" className="ml-auto">2</Badge>
                      </Button>
                    </Link>
                    <Link to="/notificacoes" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <Bell className="h-4 w-4 mr-2" />
                        Notificações
                        <Badge variant="destructive" className="ml-auto">5</Badge>
                      </Button>
                    </Link>
                    <Link to="/relatorios" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Relatórios
                      </Button>
                    </Link>
                    <Link to="/subscricoes" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Subscrições
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;