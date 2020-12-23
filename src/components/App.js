import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";
const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("Todos")}>Todos</button>
      </div>
      <div>
        <ResourceList resource={resource} />
      </div>
    </div>
  );
};
export default App;
