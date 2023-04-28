import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "서노";
  const list = ["딸기", "우유", "바나나"];
  return (
    <>
      <h1 className="orange">{`Hello ${name}!`}</h1>
      <h2>wow</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img style={{ width: "200px", height: "200px" }} src={logo} alt="react" />
    </>
  );
}

export default App;
