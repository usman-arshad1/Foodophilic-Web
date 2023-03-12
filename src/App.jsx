import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { SideNavigation } from './components/SideNavigation'
import { CreatePost } from './components/CreatePost'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const jsonThing = {
    name: "usman",
    gender: "female"
  }
  return (
    <div className="App">
        <SideNavigation json={jsonThing} />
        <CreatePost />
    </div>
  )
}

export default App
