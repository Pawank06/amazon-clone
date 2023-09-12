import { useState } from 'react'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <header>
        <a href="/">amazon</a>
      </header>
      <main>
        list  products
      </main>
    </>
  )
}

export default App
