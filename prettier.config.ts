import type { Config } from 'prettier';
import type { PluginOptions } from 'prettier-plugin-tailwindcss';

const config: Config & PluginOptions = {
  trailingComma: 'es5',
  printWidth: 180,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: 'css',
  plugins: ['prettier-plugin-blade', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx', 'cn'],
  tailwindStylesheet: 'resources/css/app.css',
  overrides: [
    {
      files: ['composer.json', 'package.json', 'pint.json'],
      options: {
        tabWidth: 4,
      },
    },
    {
      files: '*.blade.php',
      options: {
        parser: 'blade',
        tabWidth: 2,
      },
    },
  ],
};

export default config;
