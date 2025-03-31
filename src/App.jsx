import { useState } from "react";
import "./global.css";

export default function App() {
  const [clickButton, setClickButton] = useState(0);
  function plusButton() {
    setClickButton(clickButton + 1);
  }
  function minusButton() {
    setClickButton(clickButton - 1);
  }
  const [joke, setJoke] = useState("");
  function chucknorisJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }
  return (
    <div>
      <div id="jokee">{joke || "Chuck Norris Joke Fetcher"}</div>
      <button onClick={chucknorisJoke} id="fetchButton">
        fetch Joke
      </button>

      <p>{clickButton}</p>
      <button onClick={plusButton}>👍 Thumbs Up</button>
      <button onClick={minusButton}>👎 Thumbs Down</button>

      <p>{joke}</p>
    </div>
  );
}
