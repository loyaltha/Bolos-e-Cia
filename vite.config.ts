// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// O nome do repositório é 'Bolos-e-Cia'
const baseRepoPath = '/Bolos-e-Cia/';

export default defineConfig({
  plugins: [react()],
  base: baseRepoPath, 
});
