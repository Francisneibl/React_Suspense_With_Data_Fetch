import React, { useState } from "react";
import { getTodos } from "../../api/DAO/todos";
import wrapPromise from "../../helpers/wrapPromise";
import { Todo } from "../../types/Todos";

type TodosListProps = React.HTMLProps<HTMLTableElement>;

const promise = getTodos(4000);
const lazyResources = wrapPromise<Todo[]>(promise);

const TodosList = ({ ...props }: TodosListProps) => {
  const [todos, setTodos] = useState<Todo[]>(lazyResources.read());

  const handleOnCheckItem = (todoId: number, completed: boolean) => {
    console.log(completed);
    for (const todo of todos) {
      if (todo.id === todoId) {
        todo.completed = completed;
        break;
      }
    }
    setTodos([...todos]);
  };

  return (
    <table {...props}>
      <thead>
        <tr>
          <th colSpan={2}>Lista de Tarefas</th>
        </tr>
        <tr>
          <th>Nome</th>
          <th>Pronto</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id + todo.title}>
            <td>{todo.title}</td>
            <td style={{ textAlign: "center" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => handleOnCheckItem(todo.id, e.target.checked)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TodosList.defaultProps = {};

export default TodosList;
