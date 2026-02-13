// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    vite: {
        resolve: {
            alias: {
                '@containers': path.resolve('./src/containers'),
                '@components': path.resolve('./src/components'),
                '@shared': path.resolve('./src/shared')
            }
        }
    }
});
