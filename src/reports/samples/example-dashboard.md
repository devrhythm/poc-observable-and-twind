---
toc: false
---

```js
import { tw } from "twind";
import "../../javascripts/twind.config.js";

```

```js
// setupTwind();
```

```html
<h1 class="hello">Hello Twind!</h1>
<div>
  <p>
    Look
    <a href="https://twind.dev">here</a>
    for more info about Twind.
  </p>
</div>

<button class="${tw`btn-indigo`}">test</button>
<div>orange</div>

<table>
  <thead>
    <tr>
      <th colspan="2">a</th>
      <th rowspan="2">d</th>
    </tr>
    <tr>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>ccc</th>
      <td>bbb</td>
      <td>aaa</td>
    </tr>
    <tr>
      <th>ccc</th>
      <td>bbb</td>
      <td>aaa</td>
    </tr>
    <tr>
      <th rowspan="3">ccc</th>
      <td rowspan="3">bbb</td>
      <td>aaa 1</td>
    </tr>
    <tr>
      <td>aaa 2</td>
    </tr>
    <tr>
      <td>aaa 3</td>
    </tr>
    <tr>
      <th>ccc</th>
      <td>bbb</td>
      <td>aaa</td>
    </tr>
  </tbody>
</table>
```
