import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use '/' for a user site (mareddymp.github.io).
export default defineConfig({
  plugins: [react()],
  base: '/',
});
