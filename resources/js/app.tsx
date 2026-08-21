import { createInertiaApp } from '@inertiajs/react';
import '../css/app.css';

createInertiaApp({
  strictMode: true,
  pages: {
    path: './pages',
    extension: '.tsx',
  },
});
