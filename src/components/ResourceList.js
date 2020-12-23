import React, { useState, useEffect } from "react";
import axios from "axios";
const ResourceList = ({ resource }) => {
  console.log(resource);
  const [resources, setResource] = useState([]);
  //   const fetchResource = async (resource) => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${resource}`
  //     );
  //     setResource(response.data);
  //   };
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResource(response.data);
    })(resource);
    // immediate invoke function js
  }, [resource]);

  return (
    <ul>
      {resources.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
};

export default ResourceList;
