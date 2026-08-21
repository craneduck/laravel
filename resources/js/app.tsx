import { createInertiaApp } from '@inertiajs/react';
import '../css/app.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),
  strictMode: true,
  pages: {
    path: './pages',
    extension: '.tsx',
  },
});
