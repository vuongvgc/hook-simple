import { useState, useEffect } from "react";
import axios from "axios";

const useResource = (resource) => {
  const [resources, setResource] = useState([]);
  //   const fetchResource = async (resource) => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${resource}`
  //     );
  //     setResource(response.data);
  //   };
  console.log(resource);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResource(response.data);
    })(resource);
    // immediate invoke function js
  }, [resource]);
  return resources;
};

export default useResource;
