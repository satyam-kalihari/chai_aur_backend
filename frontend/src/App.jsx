import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes").then((res) => {
      setJokes(res.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  return (
    <>
      <h1>Fullstack Application For Jokes</h1>
      <p>Jokes : {joke.length}</p>
      {joke.map((joke, index) => {
        return (
          <>
            <h3 key={joke.id}>{joke.title}</h3>
            <p>{joke.joke}</p>
          </>
        );
      })}
    </>
  );
}

export default App;
