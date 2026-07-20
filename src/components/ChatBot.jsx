import "../styles/chatbot.css";
import { useState, useEffect, useRef } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Welcome to Carvaan Grove! How can I help you today?",
    },
  ]);

  const chatRef = useRef(null);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOption = async (option) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: option,
      },
    ]);

    setIsTyping(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: option,
        }),
      });

      const data = await response.json();
      console.log("API RESPONSE:", data);

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "⚠️ Unable to connect to AI assistant.",
        },
      ]);
    }

    setIsTyping(false);
  };

  const clearChat = () => {
    setMessages([
      {
        type: "bot",
        text: "👋 Welcome to Carvaan Grove! How can I help you today?",
      },
    ]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMessage,
      },
    ]);

    setInput("");

    setIsTyping(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "⚠️ Unable to connect to AI assistant.",
        },
      ]);
    }

    setIsTyping(false);
  };

  return (
    <>
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        🍎
      </button>

      {open && (
        <div ref={chatRef} className={`chatbot-box ${open ? "open" : ""}`}>
          <div className="chatbot-header">
            <span>Carvaan Grove Assistant</span>

            <button className="chatbot-reset" onClick={clearChat}>
              ↺
            </button>
          </div>

          <div className="chatbot-content">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.type}`}>
                {message.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="quick-actions">
            <button onClick={() => handleOption("Products")}>Products</button>

            <button onClick={() => handleOption("Delivery")}>Delivery</button>

            <button onClick={() => handleOption("Pricing")}>Pricing</button>

            <button onClick={() => handleOption("About")}>About Orchard</button>

            <button onClick={() => handleOption("Contact")}>Contact</button>
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              placeholder="Ask about products, delivery..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
