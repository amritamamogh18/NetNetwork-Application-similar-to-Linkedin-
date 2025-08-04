import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Send } from "lucide-react"
import { useState } from "react"

const messagesDummy = [
  { id: 1, text: "Hey, how are you?", fromMe: false },
  { id: 2, text: "I'm good! You?", fromMe: true },
  { id: 3, text: "Doing well, thanks!", fromMe: false },
]

export default function MessagingPage() {
  const [messages, setMessages] = useState(messagesDummy)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), text: input, fromMe: true }])
    setInput("")
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 shadow">
        <ArrowLeft className="cursor-pointer" />
        <h1 className="text-lg font-semibold">Messages</h1>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
              msg.fromMe
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 p-4 border-t">
        <Input
          className="flex-1"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button size="icon" onClick={handleSend}>
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
