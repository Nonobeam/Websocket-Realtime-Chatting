import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const WebSocketChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080/ws");

    ws.current.onopen = () => {
      console.log("WebSocket connection opened");
      ws.current.send("Hello, my friends!");
    };

    ws.current.onclose = (event) => {
      if (event.wasClean) {
        console.log(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error("Connection died");
      }
      console.log("WebSocket connection closed");
      addMessage("WebSocket connection closed");
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error", error);
      addMessage("An error occurred");
    };

    ws.current.onmessage = (event) => {
      console.log("Received message", event);
      addMessage(event.data);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const handleSendMessage = async () => {
    if (message) {
      try {
        await axios.get(`http://localhost:8080/api/v1/sendToChanel/${message}`);
        setMessage("");
      } catch (error) {
        console.error("Error sending message to channel", error);
        addMessage("Failed to send message");
      }
    }
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <div id="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        id="messageInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button id="sendButton" onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default WebSocketChat;
