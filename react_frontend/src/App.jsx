import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users/")
      .then((response) => {
        console.log(response.data);
        setUserName(response.data[0].username);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <h1>{userName}</h1>
    </>
  );
}

export default App;
