import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Form from './components/Form'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return (
    <>
    {isLoggedIn &&
    <>
    <h1>You are logged in</h1>
    <Button name="Log out" handleClick={logout}/>
    </>
    }
    {!isLoggedIn &&
      <Form login={login}></Form>
    }
    </>
  )
}

export default App
