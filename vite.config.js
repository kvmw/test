import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteTesting } from '@testing-library/svelte/vite'

export default defineConfig({
    plugins: [sveltekit(), svelteTesting()],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
        setupFiles: ['./vitest-setup.js'],
        environment: 'jsdom'
    },
    resolve: process.env.VITEST
        ? {
            conditions: ['browser']
        }
        : undefined
});
