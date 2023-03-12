import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { SideNavigation } from './components/SideNavigation'
import { Post } from './components/PostCard'
import { LoginPage } from './components/Login'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  const user1 = {
    name: "Linus Tech Tip",
    profileImg: "src/assets/404-4042710_circle-profile-picture-png-transparent-png.png",
    
  }

  const post1 = {

    time: "3h ago",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    foodImg: "src/assets/pizza-with-pineapple-and-thin-crust.jpg"
  }
  return (
    <div className="App">
        <LoginPage  />
    </div>
  )
}

export default App
