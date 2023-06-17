import { Todo } from "../../types/Todos";

export const getTodos = (timeout: number): Promise<Todo[]> => {
  return new Promise((resolve) => {
    const promise = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((response) => response);

    setTimeout(() => {
      promise.then((res) => resolve(res));
    }, timeout);
  });
};
