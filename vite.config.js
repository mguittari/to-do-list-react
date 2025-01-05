import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "/to-do-list-react/", // Remplace par le nom de ton dépôt GitHub
	build: {
		outDir: "dist", // Si nécessaire, sinon garde 'dist' (par défaut)
	},
});
