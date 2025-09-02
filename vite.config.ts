import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Removido lovable-tagger para produção

// https://vitejs.dev/config/
// Configuração otimizada para produção no Vercel
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    // Configurações para desenvolvimento móvel
    https: false,
    cors: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configurações para otimização móvel
  define: {
    __DEV__: process.env.NODE_ENV === 'development',
  },
  // Configurações para produção no Vercel
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  build: {
    // Otimizações para deploy e dispositivos móveis
    target: ['es2015', 'chrome58', 'firefox57', 'safari11', 'edge16'],
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'esbuild',
    // Otimizações para dispositivos móveis
    cssCodeSplit: true,
    reportCompressedSize: false,
    // Otimizações para Vercel
    rollupOptions: {
      output: {
        // Code splitting para reduzir tamanho do bundle
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-sheet'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority']
        },
        // Otimizações para dispositivos móveis
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    chunkSizeWarningLimit: 1000,
  }
});
