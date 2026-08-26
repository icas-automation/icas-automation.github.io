// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ICAS Automation',
			defaultLocale: 'pl',
			locales: {
				pl: {
					label: 'Polski',
					lang: 'pl',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			customCss: [
				'./src/styles/custom.css',
			],
			// Dodaj poniższy blok components:
			components: {
				Header: './src/components/Header.astro',
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{
					label: 'EMS Prime Switch',
					items: [
						{ autogenerate: { directory: 'ems-prime-switch' } }
					],
				},
			],
		}),
	],
});
