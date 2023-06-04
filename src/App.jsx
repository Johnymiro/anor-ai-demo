import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState, useEffect } from "react";

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      prompt: input + ". Answer as you are a helpful and professional hotel receptionist.",
    };
    console.log({ "object:": object, option: option });

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  useEffect(() => {
    console.log("option: ", option);
  }, [option]);
  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
