import { babel } from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "es",
  },
  plugins: [babel({ babelHelpers: "bundled" })],
};
