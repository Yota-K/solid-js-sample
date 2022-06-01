import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

// できることはuseStateと一緒だが、solidjsにはhooksのルールがないので自由な場所に書けるみたい
// stateは値ではなくgetter関数で返却される
const [count, setCount] = createSignal(0);

const App: Component = () => {
  console.log('render')
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div style={{ display: 'flex'}}>
          <button onClick={() => setCount(count() + 1)}>countUp</button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
        {count()}
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
