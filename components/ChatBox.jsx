import { useState } from "react";
import axios from "axios";

export default function ChatBox({ agentName, endpoint }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const newMessage = { role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");
    const res = await axios.post(endpoint, { message: input });
    setMessages((prev) => [...prev, newMessage, res.data]);
  };

  return (
    <div className="flex flex-col w-1/2 p-4 space-y-4 border-r border-white/10">
      <h2 className="text-lg font-bold text-xalonAccent mb-2">{agentName}</h2>
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-md max-w-lg ${
              msg.role === "user"
                ? "bg-xalonBlue text-white self-end"
                : "bg-white text-black self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          className="flex-1 bg-white/10 p-2 rounded border border-white/20"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="bg-xalonAccent px-4 py-2 rounded text-white">Send</button>
        <button className="p-2 text-white border border-white/20 rounded-full">
          🎙️
        </button>
      </div>
    </div>
  );
}
