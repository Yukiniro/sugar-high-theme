import "../../style/base.css";
import "../../style/default.css";
import { highlight } from "sugar-high";

const app = document.querySelector<HTMLDivElement>("#app")!;
const code = highlight(
  `
class Person() {
  constructor(name, age) {
    this._name = name;
    this._aget = age;
    this._homePage = "https://github.com/Yukiniro";
  }
  sayName() {
    console.log(this._name);
  }
}

// hello world
const me = new Person("Yukiniro", 25);
me.sayName();

<Component>
  hello world
</Component>
`.trim()
);

app.innerHTML = `<pre><code>${code}</code></pre>`;
