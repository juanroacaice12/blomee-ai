"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Input({ onSend }: any) {
  const [text, setText] = useState("");

  return (
    <div className="glass p-4">
      <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-2 shadow-md">
        <textarea
          className="flex-1 outline-none bg-transparent resize-none max-h-32"
          placeholder="Escribe algo elegante..."
          value={text}
          rows={1}
          onChange={(e) => setText(e.target.value)}
          onInput={(e: any) => {
            e.target.style.height = "auto";
            e.target.style.height = Math.min(e.target.scrollHeight, 128) + "px";
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              if (!text.trim()) return;
              onSend(text);
              setText("");
            }
          }}
        />

        <button
          onClick={() => {
            if (!text.trim()) return;
            onSend(text);
            setText("");
          }}
          className="bg-[#C9A15D] text-white p-2 rounded-full hover:scale-105 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
