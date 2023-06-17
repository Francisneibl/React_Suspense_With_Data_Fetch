import React, { PropsWithChildren } from "react";
import { getUsers } from "../../api/DAO/users";
import wrapPromise from "../../helpers/wrapPromise";
import { User } from "../../types/User";

export type UsersListProps = React.HTMLProps<HTMLTableElement>;

const lazyResources = wrapPromise<User[]>(getUsers(3000));

const UsersList = ({ ...props }: PropsWithChildren<UsersListProps>) => {
  const users = lazyResources.read();
  return (
    <table {...props}>
      <thead>
        <tr>
          <th colSpan={3}>Lista de Usuários</th>
        </tr>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

UsersList.defaultProps = {};

export default UsersList;
