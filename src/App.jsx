import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text , setText] = useState("")
 
  const HandleInput =(e)=>{
       setText(e.target.value)
  }
 
  const lenthTimer = 360;
  return (
    <> 
     <div className="app">
      <div className="inputDiv">
      <input type="text" name="textInput" id="" value={text}  onChange={ HandleInput }/>
      <select  name="ff" id="cars">
        <optgroup label="choose levels">
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="Hard">Hard</option>
        </optgroup>
      </select>
      </div>
<p className='count'>{text.length} </p>
<p className='count'>{text.length == lenthTimer ? ( <p> lenth is greather length</p>) : ""} </p>
      <div className="centeredScreen">
      <div className="textScreen">
      <p className='text'>{text} <br /> </p>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
