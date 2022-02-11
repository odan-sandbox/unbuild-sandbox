import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/app.ts"],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
