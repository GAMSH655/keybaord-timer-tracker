import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text , setText] = useState("")
 
  const HandleInput =(e)=>{
       setText(e.target.value)
  }
  const timerFunction = () =>{
    const typingTimer = 60;
    const secs = Math.floor()
  }
  
  return (
    <> 
     <div className="app">
     <input type="text" name="textInput" id="" value={text}  onChange={ HandleInput }/>
<select  name="ff" id="cars">
  <optgroup label="choose levels">
    <option value="easy">easy</option>
    <option value="medium">medium</option>
    <option value="Hard">Hard</option>
  </optgroup>
</select>
      <div className="textScreen">
      <p className='text'>{text}</p>
      </div>
       <p>{text.length}</p>
     </div>
    </>
  )
}

export default App
