import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/app.ts"],
  sourcemap: true,
  clean: true,
  outDir: "dist2",
});
