import styles from "./listInput.module.css";
import "../../styles/global.css";
import { useState } from "react";
import { STORAGE_SERVICE } from "../../service/storage.js";

export function ListInput() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const countTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted === true).length;

  function handleClick() {
    if (!inputValue) {
      return alert("Por favor, preencha o campo!");
    }
    const newTask = {
      description: inputValue,
      isCompleted: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    STORAGE_SERVICE.createTask(inputValue);
    setInputValue("");
  }

  function handleCheckboxChange(event) {
    STORAGE_SERVICE.updateTaskState(event.target.value);
    
    const updatedTasks = STORAGE_SERVICE.listTasks();

    setTasks(updatedTasks);
    setInputValue("");
  }

  return (
    <>
      <div className={styles["list-input"]}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="Adicionar uma nova tarefa"
        />
        <button onClick={handleClick}>Cadastrar</button>
      </div>
      <main className={styles["show-list"]}>
        <header className={styles["show-list-header"]}>
          <div className={styles["info"]}>
            <b>Tarefas criadas</b>
            <span className={styles["count-tasks"]}>{countTasks}</span>
          </div>
          <div className={styles["info"]}>
            <b>Concluídas</b>
            <span className={styles["count-finished"]}>{completedTasks}</span>
          </div>
        </header>

        {tasks.length === 0 && <p>Sem tasks no momento</p>}

        <ul className={styles["task-list"]}>
          {tasks.map((task) => (
            <li className={styles["task-item"]} key={task.description}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                value={task.description}
                onChange={handleCheckboxChange}
              />
              <strong>{task.description}</strong>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
