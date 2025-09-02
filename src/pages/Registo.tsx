import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  User,
  MapPin,
  UserCheck,
  Upload,
  FileText,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Registo = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome_completo: '',
    telefone: '',
    senha: '',
    confirmar_senha: '',
    tipo_perfil: '',
    provincia: '',
    distrito: '',
    aceitar_termos: false,
    documento_tipo: 'bilhete_identidade'
  });
  const [isLoading, setIsLoading] = useState(false);

  const provincias = [
    'Maputo Cidade', 'Maputo Província', 'Gaza', 'Inhambane', 'Sofala', 
    'Manica', 'Tete', 'Zambézia', 'Nampula', 'Cabo Delgado', 'Niassa'
  ];

  const tiposPerfil = [
    { value: 'agricultor', label: '🌱 Agricultor', desc: 'Cultivo e produção agrícola' },
    { value: 'dono_terra', label: '🏞️ Proprietário de Terra', desc: 'Disponibilizar terrenos' },
    { value: 'comprador', label: '🛒 Comprador/Comerciante', desc: 'Compra de produtos agrícolas' },
    { value: 'tecnico', label: '👨‍🔬 Técnico Agrícola', desc: 'Assistência técnica e consultoria' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Registration data:', formData);
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="nome_completo" className="flex items-center text-sm font-medium">
          <User className="h-4 w-4 mr-2 text-primary" />
          Nome Completo
        </Label>
        <Input
          id="nome_completo"
          placeholder="Digite o seu nome completo"
          value={formData.nome_completo}
          onChange={(e) => handleInputChange('nome_completo', e.target.value)}
          className="h-12"
          required
        />
      </div>

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
        <p className="text-xs text-muted-foreground">Será usado para verificação e login</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="senha" className="flex items-center text-sm font-medium">
          <Lock className="h-4 w-4 mr-2 text-primary" />
          Palavra-passe
        </Label>
        <div className="relative">
          <Input
            id="senha"
            type={showPassword ? "text" : "password"}
            placeholder="Mínimo 6 caracteres"
            value={formData.senha}
            onChange={(e) => handleInputChange('senha', e.target.value)}
            className="h-12 pr-12"
            required
            minLength={6}
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

      <div className="space-y-2">
        <Label htmlFor="confirmar_senha" className="flex items-center text-sm font-medium">
          <Lock className="h-4 w-4 mr-2 text-primary" />
          Confirmar Palavra-passe
        </Label>
        <Input
          id="confirmar_senha"
          type="password"
          placeholder="Digite novamente a palavra-passe"
          value={formData.confirmar_senha}
          onChange={(e) => handleInputChange('confirmar_senha', e.target.value)}
          className="h-12"
          required
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="space-y-3">
        <Label className="flex items-center text-sm font-medium">
          <UserCheck className="h-4 w-4 mr-2 text-primary" />
          Tipo de Perfil
        </Label>
        <div className="grid gap-3">
          {tiposPerfil.map((tipo) => (
            <div
              key={tipo.value}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.tipo_perfil === tipo.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => handleInputChange('tipo_perfil', tipo.value)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">{tipo.label}</p>
                  <p className="text-xs text-muted-foreground">{tipo.desc}</p>
                </div>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  formData.tipo_perfil === tipo.value
                    ? 'border-primary bg-primary'
                    : 'border-border'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label className="flex items-center text-sm font-medium">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Província
          </Label>
          <Select value={formData.provincia} onValueChange={(value) => handleInputChange('provincia', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Selecione a província" />
            </SelectTrigger>
            <SelectContent>
              {provincias.map((provincia) => (
                <SelectItem key={provincia} value={provincia}>
                  {provincia}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="distrito" className="text-sm font-medium">Distrito</Label>
          <Input
            id="distrito"
            placeholder="Digite o distrito"
            value={formData.distrito}
            onChange={(e) => handleInputChange('distrito', e.target.value)}
            className="h-12"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="space-y-3">
        <Label className="flex items-center text-sm font-medium">
          <FileText className="h-4 w-4 mr-2 text-primary" />
          Verificação de Identidade
        </Label>
        <p className="text-sm text-muted-foreground">
          Para sua segurança, precisamos verificar a sua identidade
        </p>
        
        <div className="p-4 border-2 border-dashed border-border rounded-lg text-center">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm font-medium mb-1">Carregar Documento de Identidade</p>
          <p className="text-xs text-muted-foreground mb-3">
            Bilhete de Identidade, Carta de Condução ou Passaporte
          </p>
          <Button variant="outline" size="sm">
            Escolher Ficheiro
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="aceitar_termos"
          checked={formData.aceitar_termos}
          onCheckedChange={(checked) => handleInputChange('aceitar_termos', !!checked)}
        />
        <Label htmlFor="aceitar_termos" className="text-sm">
          Aceito os{' '}
          <Link to="/termos" className="text-primary hover:underline">
            Termos de Uso
          </Link>
          {' '}e{' '}
          <Link to="/privacidade" className="text-primary hover:underline">
            Política de Privacidade
          </Link>
        </Label>
      </div>
    </div>
  );

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
          <p className="text-muted-foreground">Crie a sua conta</p>
        </div>

        <Card className="border-border/50 shadow-medium">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-xl text-center">
              Criar Conta - Passo {currentStep} de 3
            </CardTitle>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-xs">
                🇲🇿 Feito para Moçambique
              </Badge>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}

              <div className="flex gap-2 mt-6">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Voltar
                  </Button>
                )}
                <Button 
                  type="submit" 
                  className="flex-1 h-12"
                  disabled={isLoading || (currentStep === 3 && !formData.aceitar_termos)}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Criando...
                    </div>
                  ) : currentStep === 3 ? (
                    <>
                      Criar Conta
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Continuar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {currentStep === 1 && (
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Já tem conta?
                </p>
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Entrar na Conta Existente
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registo;