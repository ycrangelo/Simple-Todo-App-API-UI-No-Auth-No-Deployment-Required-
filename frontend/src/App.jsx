import { useState } from 'react'
import './App.css'
import { CardComponent } from './components/Card'
import { ModalComponent } from './components/modal'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mb-5 flex justify-end'>
        <ModalComponent />
    </div>
      <CardComponent />
    </>
  )
}

export default App
