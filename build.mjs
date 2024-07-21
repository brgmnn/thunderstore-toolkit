import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/main.js"],
  bundle: true,
  platform: "node",
  target: "node20.15",
  outfile: "dist/main.js",
})
