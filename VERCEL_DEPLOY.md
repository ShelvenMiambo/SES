# 🚀 Deploy do AgroConecta AI no Vercel

## 📋 Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Node.js 18+ instalado
- Git configurado

## 🔧 Configuração Local

### 1. Instalar dependências
```bash
npm install
```

### 2. Build de produção
```bash
npm run build:prod
```

### 3. Testar build localmente
```bash
npm run preview
```

## 🌐 Deploy no Vercel

### Opção 1: Deploy via Dashboard Vercel

1. **Acesse** [vercel.com](https://vercel.com)
2. **Faça login** com sua conta
3. **Clique** em "New Project"
4. **Importe** o repositório do GitHub/GitLab
5. **Configure** o projeto:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. **Clique** em "Deploy"

### Opção 2: Deploy via CLI Vercel

1. **Instale** Vercel CLI:
```bash
npm i -g vercel
```

2. **Faça login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel --prod
```

## ⚙️ Configurações de Ambiente

### Variáveis de Ambiente (opcional)
```bash
NODE_ENV=production
VITE_APP_TITLE=AgroConecta AI
VITE_APP_DESCRIPTION=Plataforma agrícola inteligente para Moçambique
```

### Configurações no Vercel Dashboard
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x

## 📱 PWA e Service Worker

O projeto está configurado como PWA com:
- ✅ Service Worker para cache offline
- ✅ Manifest.json para instalação
- ✅ Meta tags para dispositivos móveis
- ✅ Cache inteligente de assets

## 🚀 Otimizações Implementadas

### Performance
- **Code Splitting**: Bundle dividido em chunks otimizados
- **Tree Shaking**: Remoção de código não utilizado
- **Minificação**: JavaScript e CSS minificados
- **Compressão**: Gzip e Brotli habilitados

### SEO
- **Meta tags** otimizadas
- **Robots.txt** configurado
- **Sitemap** preparado
- **Open Graph** tags

### Mobile
- **Responsivo** para todos os dispositivos
- **Touch-friendly** com botões otimizados
- **PWA** para instalação como app

## 📊 Monitoramento

### Analytics (opcional)
Adicione Google Analytics ou Vercel Analytics no dashboard.

### Performance
- **Core Web Vitals** monitorados
- **Lighthouse** score otimizado
- **Bundle analyzer** disponível

## 🔍 Troubleshooting

### Build falha
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Service Worker não funciona
- Verifique se HTTPS está habilitado
- Limpe cache do browser
- Verifique console para erros

### Performance baixa
- Use `npm run analyze` para analisar bundle
- Verifique tamanho dos assets
- Otimize imports desnecessários

## 📈 Próximos Passos

### 1. Domínio Personalizado
- Configure no dashboard do Vercel
- Adicione certificado SSL

### 2. Backend API
- Implemente API routes no Vercel
- Configure banco de dados

### 3. Monitoramento
- Configure alertas de performance
- Implemente logging

### 4. CI/CD
- Configure GitHub Actions
- Deploy automático em push

## 🎯 URLs Importantes

- **Dashboard Vercel**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Documentação**: [vercel.com/docs](https://vercel.com/docs)
- **Analytics**: [vercel.com/analytics](https://vercel.com/analytics)

## 📞 Suporte

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Documentação**: [vercel.com/docs](https://vercel.com/docs)
- **Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**🎉 Seu projeto AgroConecta AI está pronto para produção no Vercel!**
