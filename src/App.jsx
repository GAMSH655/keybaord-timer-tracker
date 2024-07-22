import { useState  , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [text , setText] = useState({textInput:"" ,
    textLenght:"",
    textTime: ""
  })
  const [initialTimer, setinitialTimer] = useState(0)
  const HandleInput =(e)=>{
    const {name , value} = e.target
    setText({...text  , [name]:value} )
    console.log(text);
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
      <input type="text" name="textInput" id="" value={text.textInput}  onChange={ HandleInput } className='textInput'/>
         <input type="text"  className='textLenght' name='textLenght' value={text.textLenght} 
         onChange={ HandleInput}
         />
         <input type="text"  className='textTime' name='textTime'  value={text.textTime}     onChange={ HandleInput}/>
      </div>
     
<p className='count'> {text.textInput.length} </p>
<p className='count'>  you enter {text.textLenght} words </p>
<p className='count'>  you have   {text.textTime} mins to finsh this quest</p>
<div  className='timer'>
        {/* <span>{("0" + Math.floor(initialTimer/6000) % 60 ).slice(-2)}</span>: */}
        <span >{("0" + Math.floor(initialTimer/1000) % 60 ).slice(-2)}</span>:
        <span >{("0" +  ((initialTimer/10) % 100)).slice(-2)}</span>
      </div>
<p className='count'>{text.textInput.length == lenghtTimer ? ( <p>  text lenght is greather than word</p>) : ""} </p>
      <div className="centeredScreen">
      <div className="textScreen">
      <p className='text'>{text.textInput} <br /> </p>
      </div>
      </div>
     </div>
    </>
  )
}

export default App
