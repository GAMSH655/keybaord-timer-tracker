import { useState  , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text , setText] = useState("")
  const [initialTimer, setinitialTimer] = useState(0)
  const HandleInput =(e)=>{
       setText(e.target.value)
  }

useEffect(()=>{
  let interval = null ;
    if (HandleInput){
      interval = setInterval(()=>{
        setinitialTimer(prevTime=> prevTime + 10 ) 
      } , 100)
    } else{
      clearInterval(interval)
    }
    return ()=> clearInterval(interval)
})




  const lenghtTimer = 360;
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
     
<p className='count'> {text.length} </p>
<div  className='timer'>
        {/* <span>{("0" + Math.floor(initialTimer/6000) % 60 ).slice(-2)}</span>: */}
        <span >{("0" + Math.floor(initialTimer/1000) % 60 ).slice(-2)}</span>:
        <span >{("0" +  ((initialTimer/10) % 100)).slice(-2)}</span>
      </div>
<p className='count'>{text.length == lenghtTimer ? ( <p>  text lenght is greather than word</p>) : ""} </p>
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
