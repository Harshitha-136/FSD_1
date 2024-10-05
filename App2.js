import React, { useState } from 'react'
import { MyBall1 } from './components/MyBall1'
import "./App.css"
export const App = () => 
{
  const[count, setCount] = useState(0)
  return (
    <div>
<button onClick={()=> setCount(count + 1) }> You clicked {count} times </button>
<MyBall1 />
    </div>
   )
}
export default App;