import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // مهم جداً للنشر على Vercel
  build: {
    outDir: 'dist', // هذا هو المجلد الذي يتم نشره
  },
});
