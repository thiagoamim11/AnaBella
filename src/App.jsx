import { useState } from 'react'
import './App.css'
import TelaPrincipal from './Components/TelaPrincipal.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TelaPrincipal/>
        </div>
    </>
  )
}

export default App
