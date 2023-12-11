import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components/*'),
      '@pages': resolve(__dirname, 'src/pages/*'),
      '@utils': resolve(__dirname, 'src/utilities/*'),
      '@assets': resolve(__dirname, 'src/assets/*'),
      '@hooks': resolve(__dirname, 'src/hooks/*'),
      '@context': resolve(__dirname, 'src/context/*'),
      '@services': resolve(__dirname, 'src/services/*'),

    },
  },
})
