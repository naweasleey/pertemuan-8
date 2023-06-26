import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
//import Card from './components/Card'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet/> 
      </main>

      {/* <Card>
        <div>Hello</div>
      </Card> */}
      <Footer />
    </div>
  )
}

export default App