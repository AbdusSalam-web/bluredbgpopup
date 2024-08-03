import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container active">
        <h1>Welcome to our website.</h1>
        <button className="btn">Click to join</button>
      </div>
      <div className="popup_container active">
        <h4>20% OFF offer</h4>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          id=""
          className="input"
          placeholder="Enter you email"
        />
        <button className="popup_btn">Join</button>
        <div className="closingIcon">
          <i class="fa-solid fa-xmark fa-3x"></i>
        </div>
      </div>
    </>
  );
}

export default App
