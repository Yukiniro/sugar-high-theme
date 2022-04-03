import '../../style/atom-one-light.css'
import { highlight } from 'sugar-high'

const app = document.querySelector<HTMLDivElement>('#app')!;
const code = highlight(`
class Person() {
  constructor(name, age) {
    this._name = name;
    this._aget = age;
  }
  sayName() {
    console.log(this._name);
  }
}

const me = new Person("Yukiniro", 25);
me.sayName();
`);

app.innerHTML = `
  <pre class="language-javascript">
    <code>
      ${code}
    </code>
  </pre>
`
