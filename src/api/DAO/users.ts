import { User } from "../../types/User";

export const getUsers = (timeout: number): Promise<User[]> => {
  return new Promise((resolve) => {
    const promise = fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => response);

    setTimeout(() => {
      promise.then((res) => resolve(res));
    }, timeout);
  });
};
