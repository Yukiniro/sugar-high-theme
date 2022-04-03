import { babel } from "@rollup/plugin-babel";
import fileSize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";
import { readFile } from "fs/promises";
import css from "rollup-plugin-import-css";

function getConfig(libraryName) {
  return {
    input: "src/index.ts",
    output: [
      {
        file: `./dist/${libraryName}.cjs.js`,
        format: "cjs",
      },
      {
        file: `./dist/${libraryName}.esm.js`,
        format: "esm",
      },
    ],
    plugins: [
      css(),
      typescript(),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-env"],
      }),
      fileSize(),
    ],
  };
}

export default readFile("./package.json", "utf8")
  .then((json) => {
    const libraryName = JSON.parse(json).name;
    return getConfig(libraryName);
  })
  .catch((e) => {
    console.log(e);
    return getConfig("my-project");
  });
