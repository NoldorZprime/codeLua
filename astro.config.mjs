import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { sidebar } from "./src/config/sidebar";
import { sidebarEn } from "./src/config/sidebarEn";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "CodeLenguajeC",
			title: {
				es: "CodeLenguajeC",
				en: "CodeLenguajeC",
			},
			defaultLocale: "root", // opcional
			locales: {
				root: {
					label: "Español",
					lang: "es", // lang es obligatorio para los locales raíz
				},
				en: {
					label: "English",
					lang: "en",
				},
			},
			logo: {
				src: "./src/assets/logo-c.svg",
				alt: "Logo de c",
				// replacesTitle: true,
			},
			customCss: [
				"./src/styles/custom.css",
			],
			social: {
				github: "https://github.com/NoldorZprime/codeLenguajeC",
			},
			sidebar: sidebar,
		}),
	],
});