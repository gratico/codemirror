import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
    }),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
  ],
};
