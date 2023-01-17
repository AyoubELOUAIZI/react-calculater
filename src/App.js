import { useState } from 'react';

import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { evaluate } from 'mathjs';

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (v) => {
   
    setText(text + v+"");
    
   // setText((text) => [...text, v + " "]);
  };

  const restInput=()=>{
    setText("");
    setResult("");
  };

  const calculateResult = () =>{
    setResult(evaluate(text)); 
  };

  const bntColor = "orange"
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button icon="7" handleClick={addToText} />
          <Button icon="8" handleClick={addToText} />
          <Button icon="9" handleClick={addToText} />
          <Button icon="/" color={bntColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button icon="4" handleClick={addToText} />
          <Button icon="5" handleClick={addToText} />
          <Button icon="6" handleClick={addToText} />
          <Button icon="*" color={bntColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button icon="1" handleClick={addToText} />
          <Button icon="2" handleClick={addToText} />
          <Button icon="3" handleClick={addToText} />
          <Button icon="+" color={bntColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button icon="0" handleClick={addToText} />
          <Button icon="." handleClick={addToText} />
          <Button icon="="  handleClick={calculateResult} />
            <Button icon="-" color={bntColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Button icon="Clear" color="red" handleClick={restInput} />

        </div>
      </div>
    </div>
  );
};

export default App;
