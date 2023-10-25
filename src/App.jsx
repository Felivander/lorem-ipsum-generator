import textData from "./data.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(textData.slice(0, count));
  };

  return (
    <>
      <section className="section-center">
        <h3>Better text generator</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            max="8"
            min="1"
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </article>
      </section>
      <footer>
        <h4>
          Made by{" "}
          <span>
            <a href="https://github.com/Felivander">@felivander</a>
          </span>
        </h4>
        <h4>
          Code on{" "}
          <a
            id="github"
            href="https://github.com/Felivander/lorem-ipsum-generator"
          >
            Github
          </a>
        </h4>
      </footer>
    </>
  );
}

export default App;
