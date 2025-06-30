import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color,setColor]=useState("Green")
  const [name,setName]=useState("")
  const [car,setCar]=useState({
    name:"BMW",
    model:"2nd",
    year:2014,
    color:"Grey"
  })

  return (
    <>
    <div>
     <h3>Count : {count}</h3>
     <button onClick={()=>setCount(count+1)}>+</button> <button onClick={()=>setCount(count-1)}>-</button>
    </div>

    <div>
      <p> Name Of The Color {color}</p>
      <button onClick={()=>setColor("Blue")} >Change Color</button>
    </div>

    <div>
      <p> Name : {name}</p>
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/>
    </div>

    <div>
      <p>Car Name:{car.name} </p>
      <p>Car Model:{car.model} </p>
      <p>Car Color:{car.color} </p>
      <p>Car Year:{car.year} </p>
      <button onClick={()=>setCar({name:"Swift",model:"1st",color:"Yello",year:2024})}>Change Name</button> 
    </div>
    </>
  )
}

export default App
