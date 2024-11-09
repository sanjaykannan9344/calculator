import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    inputA: "",
    inputB: "",
  });
  const [result, setResult] = useState(null);
  function handleChange(input, newvalue) {
    //handleChange update value A and B in useInput state
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [input]: newvalue, //input take two arguments it is update field in useinput and newvalue get new value
      };
    });
  }
  function handleAdd() {
    const sum = Number(userInput.inputA) + Number(userInput.inputB); //add a two inputs
    setResult(sum);
  }
  function handleSub() {
    const sub = Number(userInput.inputA) - Number(userInput.inputB); // a two inputs
    setResult(sub);
  }
  function handleMulti() {
    const multi = Number(userInput.inputA) * Number(userInput.inputB);
    setResult(multi);
  }
  function handleDiv() {
    const div = Number(userInput.inputA) / Number(userInput.inputB);
    setResult(div);
  }
  return (
    <div>
      <Header />
      <UserInput
        onChange={handleChange}
        handleAdd={handleAdd}
        handleSub={handleSub}
        handleMulti={handleMulti}
        handleDiv={handleDiv}
      />
      <Results result={result} />
      <p></p>
    </div>
  );
}

export default App;
