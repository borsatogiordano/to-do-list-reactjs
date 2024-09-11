import { Header } from "./components/Header";

import styles from "./styles/App.module.css";

import { ListInput } from "./components/ListInput";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <ListInput />
      </main>
    </>
  );
}

export default App;
