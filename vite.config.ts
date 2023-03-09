import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   // alias: {
  //   //   '@': path.resolve(__dirname, './src'),
  //   // },
  // },
  plugins: [react(), eslint()],
});
