import { useState } from 'react'
import './App.css'
import Avatar from './assets/Avatar/Avatar'

function App() {
 

  return (
    <>
      <div className="content-container">
        <input type="text" name='name' />
        <div className="avatr-container">
          <Avatar />
        </div>
      </div>
    </>
  )
}

export default App
