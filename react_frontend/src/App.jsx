import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get("/api/users/")
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
      <h1>Hello is updated Again!!!!!!</h1>
      <h1>{userName}</h1>
    </>
  );
}

export default App;
