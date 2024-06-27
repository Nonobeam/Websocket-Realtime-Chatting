import React, { useState, useEffect } from "react";
import axios from "axios";
import useWebSocket, { ReadyState } from "react-use-websocket";

const WebSocketChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const { sendMessage, lastMessage, readyState } = useWebSocket("ws://localhost:8080/ws");

  useEffect(() => {
    if (lastMessage !== null) {
      setMessages((prevMessages) => [...prevMessages, lastMessage.data]);
    }
  }, [lastMessage]);

  const handleSendMessage = async () => {
    if (message) {
      try {
        await axios.get(`http://localhost:8080/api/v1/sendToChanel/${message}`);
        setMessage("");
      } catch (error) {
        console.error("Error sending message to channel", error);
        setMessages((prevMessages) => [...prevMessages, "Failed to send message"]);
      }
    }
  };

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

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
      <p>The WebSocket is currently {connectionStatus}</p>
    </div>
  );
};

export default WebSocketChat;
