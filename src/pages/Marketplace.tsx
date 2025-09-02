// Página do Marketplace de Terras - Permite encontrar e visualizar propriedades agrícolas
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Search, 
  Heart,
  Eye,
  MessageCircle,
  ArrowLeft,
  Droplets,
  Ruler,
  TreePine,
  Plus
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Mock data para propriedades (em produção viria de uma API)
// Componente do botão para cadastrar nova propriedade
const AdicionarPropriedadeButton = () => (
  <Button className="mb-6" size="lg">
    <Plus className="h-4 w-4 mr-2" />
    Cadastrar Minha Terra
  </Button>
);

const mockProperties = [
  {
    id: 1,
    nome: "Quinta da Esperança",
    area: 25,
    localizacao: "Maputo, Marracuene",
    tipo_solo: "Argiloso",
    disponibilidade_agua: true,
    preco: "15.000 MT/mês",
    fotos: ["/placeholder.svg", "/placeholder.svg"],
    descricao: "Terreno fértil ideal para cultivo de milho e feijão",
    dono: "João Machava",
    verificado: true
  },
  {
    id: 2,
    nome: "Terra dos Baobás",
    area: 50,
    localizacao: "Gaza, Chókwè",
    tipo_solo: "Arenoso",
    disponibilidade_agua: false,
    preco: "8.000 MT/mês",
    fotos: ["/placeholder.svg"],
    descricao: "Grande extensão próxima ao rio Limpopo",
    dono: "Maria Santos",
    verificado: true
  },
  {
    id: 3,
    nome: "Campos do Sul",
    area: 15,
    localizacao: "Inhambane, Maxixe",
    tipo_solo: "Franco",
    disponibilidade_agua: true,
    preco: "12.000 MT/mês",
    fotos: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    descricao: "Terreno com acesso fácil e boa localização",
    dono: "António Mucavel",
    verificado: false
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [filters, setFilters] = useState({
    tipoSolo: '',
    areaMin: '',
    areaMax: '',
    temAgua: ''
  });

  const filteredProperties = mockProperties.filter(property => 
    property.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.localizacao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedProperty) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => setSelectedProperty(null)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar às Propriedades
          </Button>

          {/* Property Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={selectedProperty.fotos[0]} 
                  alt={selectedProperty.nome}
                  className="w-full h-full object-cover"
                />
              </div>
              {selectedProperty.fotos.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {selectedProperty.fotos.slice(1).map((foto: string, index: number) => (
                    <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                      <img src={foto} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold">{selectedProperty.nome}</h1>
                  {selectedProperty.verificado && (
                    <Badge variant="default" className="bg-success text-success-foreground">
                      ✓ Verificado
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedProperty.localizacao}
                </div>
                <p className="text-lg leading-relaxed">{selectedProperty.descricao}</p>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Ruler className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Área</p>
                    <p className="font-semibold">{selectedProperty.area} hectares</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <TreePine className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Solo</p>
                    <p className="font-semibold">{selectedProperty.tipo_solo}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <Droplets className={`h-5 w-5 ${selectedProperty.disponibilidade_agua ? 'text-success' : 'text-muted-foreground'}`} />
                  <div>
                    <p className="text-sm text-muted-foreground">Água</p>
                    <p className="font-semibold">
                      {selectedProperty.disponibilidade_agua ? 'Disponível' : 'Não disponível'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs text-primary-foreground font-bold">MT</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Preço</p>
                    <p className="font-semibold text-primary">{selectedProperty.preco}</p>
                  </div>
                </div>
              </div>

              {/* Owner Info */}
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-3">Proprietário</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-semibold">
                        {selectedProperty.dono.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{selectedProperty.dono}</p>
                      <p className="text-sm text-muted-foreground">Proprietário verificado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
                <Button className="flex-1" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contactar Proprietário
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-4 w-4 mr-2" />
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Marketplace</span> de Terras
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encontre o terreno perfeito para os seus cultivos. Filtre por localização, 
            área, tipo de solo e disponibilidade de água.
          </p>
        </div>

        {/* Add Property Button */}
        <div className="flex justify-between items-center mb-6">
          <AdicionarPropriedadeButton />
          <div className="text-sm text-muted-foreground">
            {filteredProperties.length} propriedades encontradas
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar por nome ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filters.tipoSolo} onValueChange={(value) => setFilters({...filters, tipoSolo: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de Solo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="argiloso">Argiloso</SelectItem>
                <SelectItem value="arenoso">Arenoso</SelectItem>
                <SelectItem value="franco">Franco</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Área mínima (hectares)"
              value={filters.areaMin}
              onChange={(e) => setFilters({...filters, areaMin: e.target.value})}
              type="number"
            />
            <Select value={filters.temAgua} onValueChange={(value) => setFilters({...filters, temAgua: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Disponibilidade de Água" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sim">Com Água</SelectItem>
                <SelectItem value="nao">Sem Água</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card 
              key={property.id} 
              className="group hover:shadow-strong transition-spring cursor-pointer"
              onClick={() => setSelectedProperty(property)}
            >
              <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                <img 
                  src={property.fotos[0]} 
                  alt={property.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-spring"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {property.nome}
                  </CardTitle>
                  {property.verificado && (
                    <Badge variant="default" className="bg-success text-success-foreground text-xs">
                      ✓
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-3 w-3 mr-1" />
                  {property.localizacao}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 line-clamp-2">
                  {property.descricao}
                </CardDescription>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Ruler className="h-3 w-3 mr-1" />
                      {property.area}ha
                    </span>
                    <span className="flex items-center">
                      <TreePine className="h-3 w-3 mr-1" />
                      {property.tipo_solo}
                    </span>
                  </div>
                  <Droplets className={`h-4 w-4 ${property.disponibilidade_agua ? 'text-success' : 'text-muted-foreground'}`} />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{property.preco}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Nenhuma propriedade encontrada</h3>
            <p className="text-muted-foreground">
              Tente ajustar os seus filtros de pesquisa.
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;