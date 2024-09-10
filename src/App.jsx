import { Header } from "./components/Header";

import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className="form-container">
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button id="button_create" type="button">
            Cadastrar
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
