import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { EditProfile } from './components/editProfile'
import { CreatePost } from './components/CreatePost'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <EditProfile/>
    <CreatePost />
  </React.StrictMode>,
)
