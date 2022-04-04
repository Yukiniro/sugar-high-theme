import { readFile } from "fs/promises";
import postcss from "rollup-plugin-postcss";

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
    plugins: [postcss()],
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
