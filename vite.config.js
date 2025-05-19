import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // 🟡 هذا السطر مهم لحل مشكلة المسارات
  build: {
    outDir: 'dist',
  },
});

