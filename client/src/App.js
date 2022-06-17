import './App.css'
import Toolbar from './components/Toolbar'
import Status from './components/Status'
import Camera from './components/Camera'
import Controls from './components/Controls'
import { useEffect, useState } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket"
import { Buffer } from 'buffer';

const ENDPOINT = 'ws://localhost:8765'

let reader = new FileReader()


function App() {
  const [status, setStatus] = useState('disconnected')
  const [socket, setSocket] = useState(null)
  const [image, setImage] = useState(null)
  // const [image, setImage] = useState(process.env.PUBLIC_URL + '/images/cancer-cells.jpg')

  useEffect(() => {
    const socket = new W3CWebSocket(ENDPOINT)
    // socket.binaryType = 'arraybuffer'
    setSocket(socket)
    // return () => socket.close()
  }, [setSocket])

  // const socket = new W3CWebSocket(ENDPOINT)

  if (socket) {
    socket.onopen = () => {
      console.log('Connected');
  
      // send message
      socket.send('Hello!');
    }
  
    socket.onclose = () => {
      console.log('Disconnected');
    }
    
    socket.onmessage = (message) => {
      console.log('Message received')
      // var buff = Buffer.from(message.data, 'base64')
      // console.log(buff)
      reader.readAsDataURL(message.data)
      reader.onloadend = () => {
        var base64String = reader.result
        var base64SubString = base64String.substr(base64String.indexOf(',') + 1)
    
        console.log(base64String)
        console.log(base64String.substr(base64String.indexOf(',') + 1))
        setImage(base64SubString)
      }
      
      // setImage(buff)
    }
  }

  const sendGcode = (e) => {
    console.log('gcode', e)
  }

  return (
    <div className="container">
      <Toolbar />
      <main className='grid'>
        <Camera image={image} />
        <Controls command={sendGcode}/>
      </main>
      <Status status={status} />
    </div>
  )
}

export default App;
