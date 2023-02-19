import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import MainContent from './component/MainContent/MainContent'
import Footer from './component/Footer/Footer'
import Intrest from './component/intrests/Intrest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <Header/>
      <MainContent />
      <Intrest />
          <Footer/>
    </div>
  )
}

export default App
