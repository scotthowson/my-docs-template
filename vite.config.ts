import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-docs-template/', // Replace with your repo name
  plugins: [react()],
});
