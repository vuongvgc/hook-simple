import React from "react";
import useResource from "./useResource";
const UserList = () => {
  const users = useResource("users");
  return (
    <ul>
      {users.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
};

export default UserList;
