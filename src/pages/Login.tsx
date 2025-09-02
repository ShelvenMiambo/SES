import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  Smartphone,
  Shield,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    telefone: '',
    senha: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here would be actual authentication logic
    console.log('Login attempt:', formData);
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
      </div>
      
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center shadow-medium">
              <span className="text-primary-foreground font-bold text-lg">AC</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-primary mb-2">AgroConecta AI</h1>
          <p className="text-muted-foreground">Entre na sua conta</p>
        </div>

        <Card className="border-border/50 shadow-medium">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-xl text-center">Iniciar Sessão</CardTitle>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-xs">
                🇲🇿 Feito para Moçambique
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="telefone" className="flex items-center text-sm font-medium">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  Número de Telefone
                </Label>
                <Input
                  id="telefone"
                  placeholder="+258 84 123 4567"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="senha" className="flex items-center text-sm font-medium">
                  <Lock className="h-4 w-4 mr-2 text-primary" />
                  Palavra-passe
                </Label>
                <div className="relative">
                  <Input
                    id="senha"
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite a sua palavra-passe"
                    value={formData.senha}
                    onChange={(e) => handleInputChange('senha', e.target.value)}
                    className="h-12 pr-12"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-10 w-10 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link to="/recuperar-senha" className="text-sm text-primary hover:underline">
                  Esqueceu a palavra-passe?
                </Link>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Entrando...
                  </div>
                ) : (
                  <>
                    Entrar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-border" />
              <span className="px-4 text-xs text-muted-foreground">ou</span>
              <div className="flex-1 border-t border-border" />
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Ainda não tem conta?
              </p>
              <Link to="/registo">
                <Button variant="outline" className="w-full">
                  <User className="mr-2 h-4 w-4" />
                  Criar Nova Conta
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
          <div className="p-4 rounded-lg border border-border/50 bg-background/50">
            <Smartphone className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Mobile First</p>
          </div>
          <div className="p-4 rounded-lg border border-border/50 bg-background/50">
            <Shield className="h-5 w-5 text-success mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Seguro e Confiável</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;