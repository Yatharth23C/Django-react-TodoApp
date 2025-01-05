import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';  // Import the fs module

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('D:/YC/YC CODES/Todo-App/ssl/localhost.key'),
      cert: fs.readFileSync('D:/YC/YC CODES/Todo-App/ssl/localhost.crt'),
    },
    host: 'localhost',
    port: 5173,
  },
  plugins: [react()],
});
