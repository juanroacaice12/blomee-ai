"use client";

import { useState, useRef, useEffect } from "react";
import Message from "./Message";
import Input from "./Input";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bienvenida a BLOMEÉ AI ✨ Soy tu especialista en cosmetología. ¿Qué te gustaría mejorar en tu piel o formulación?" },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (text: string) => {
    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([...newMessages, data]);
  };

  // auto scroll elegante
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">

      {/* HEADER */}
      <div className="p-4 flex items-center gap-3 bg-white/70 backdrop-blur-md">
        <img src="/LOGO BLOMEÉ.png" className="h-10" />
        <h1 className="luxury-title text-2xl text-[#1A1A1A]">
          BLOMEÉ AI
        </h1>
      </div>

      {/* CHAT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((m, i) => (
          <Message key={i} {...m} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <Input onSend={sendMessage} />
    </div>
  );
}
