// Configuração de Produção para Vercel
export default {
  // Configurações de Build
  build: {
    target: 'es2015',
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-sheet'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        }
      }
    }
  },

  // Configurações de Performance
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  // Configurações de PWA
  pwa: {
    name: 'AgroConecta AI',
    shortName: 'AgroConecta',
    description: 'Plataforma agrícola inteligente para Moçambique',
    themeColor: '#16a34a',
    backgroundColor: '#ffffff',
    display: 'standalone',
    orientation: 'portrait-primary'
  },

  // Configurações de Cache
  cache: {
    maxAge: 31536000,
    immutable: true
  }
};
