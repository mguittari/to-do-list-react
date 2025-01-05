import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "/to-do-list-react/", // Chemin relatif pour le déploiement sur GitHub Pages
	plugins: [react()],
	build: {
		// Options de build
		outDir: "dist", // Répertoire de sortie pour la build
	},
});
