import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { SideNavigation } from './components/SideNavigation'
import Profile from './views/Profile'
import { CreatePost } from './components/CreatePost'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const jsonThing = {
    name: "usman",
    gender: "female",
    numPosts: 7
  }
  return (
    <div className="App">
      {/* <SideNavigation json={jsonThing} /> */}
      <Profile user={jsonThing.name} username={jsonThing.gender} numberPosts={jsonThing.numPosts}/>
        <CreatePost />
    </div>
  )
}

export default App
