import './App.css'
import Toolbar from './components/Toolbar'
import Status from './components/Status'
import Camera from './components/Camera'
import Controls from './components/Controls'
import { useEffect, useState } from 'react'

function App() {
  const [status, setStatus] = useState('disconnected')
  const [image, setImage] = useState(process.env.PUBLIC_URL + '/images/cells.jpg')

  return (
    <div className="container">
      <Toolbar />
      <Status status={status} />
      <main>
        <Camera image={image} />
        <Controls />
      </main>
    </div>
  )
}

export default App;
