import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { sidebar } from "./src/config/sidebar";
import { sidebarEn } from "./src/config/sidebarEn";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "CodeLua",
			title: {
				es: "CodeLua",
				en: "CodeLua",
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
				src: "./src/assets/logo-lua.svg",
				alt: "Logo de Lua",
				// replacesTitle: true,
			},
			customCss: [
				"./src/styles/custom.css",
			],
			social: {
				github: "https://github.com/NoldorZprime/codeLua",
			},
			sidebar: sidebar,
		}),
	],
});