'use client'
import { useState, useEffect } from "react"
import io from "socket.io-client"

export default function Home() {
  const [socket, setSocket] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const [messages, setMessages] = useState([
    {
      text: "Hi!",
      sender: "User A"
    },
    {
      text: "Hello!",
      sender: "User B"
    }
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = () => {
    socket.emit("message", inputMessage)
    setInputMessage("")
    setMessages([...messages, {
      text: inputMessage,
      sender: "Me"
    }])
  }

  useEffect(() => {
    const socket = io("http://localhost:4000")
    setSocket(socket)
    socket.on("connect", () => {
      setIsConnected(true)
      console.log("Connected to server")
    })

    socket.on("message", (message) => {
      const { text, sender } = JSON.parse(message)
      setMessages(messages => [...messages, { text, sender }])
    })
  }, [])

  return (
    <div className="min-h-screen bg-slate-300 flex flex-col">
      {isConnected ? <div className="text-xs text-center bg-green-500">Connected</div> : <div className="text-xs text-center bg-red-500">Disconnected</div> }

      <h1 className="text-3xl font-bold text-center">Simple Chat Room</h1>

      <div className="flex-1 p-4">
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.sender}: {message.text}</li>
          ))}
        </ul>
      </div>

      <div className="flex p-4">
        <input 
          type="text" 
          placeholder="Message" 
          className="bg-white text-xl rounded px-2 py-2 mr-2 shadow w-full outline-none focus:ring-2 ring-slate-500" 
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage()
            }
          }}
        />
        <button className="bg-blue-500 text-white rounded-md p-2" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
