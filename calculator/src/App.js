
import './App.css';
import React, {useState} from 'react';

function App() {
  const [result, setresult] = useState("");

  const clickHandle = (event) => {
    setresult(result.concat(event.target.value))
  }

  const clearDisplay = () =>{
    setresult("");
  }

  const calculate = () =>{
    setresult(eval(result).toString());
  }
  return (
    <div className ='calculadora'>
      <input type = 'text' placeholder = '0' id= 'answer' value={result}/>
      <input type = 'button' value = {"7"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"8"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"9"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"-"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"4"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"5"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"6"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"+"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"1"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"2"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"3"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"*"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"%"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"0"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"."} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"/"} className= 'button' onClick={clickHandle}/>
      <input type = 'button' value = {"DEL"} className= 'button button1' onClick={clearDisplay}/>
      <input type = 'button' value = {"="} className= 'button button1' onClick={calculate}/>

    </div>
  );
}

export default App;
