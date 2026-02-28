import { X, Send, Paperclip, Smile } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { ChatMessage } from "./mock-data";

interface ChatPanelProps {
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
  onClose: () => void;
}

export function ChatPanel({ messages, onSendMessage, onClose }: ChatPanelProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#13132b] text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <h3 className="text-sm text-white/80">In-call messages</h3>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg hover:bg-white/[0.06] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-white/50" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.map((msg, idx) => {
          const isYou = msg.senderId === "1";
          const showSender =
            idx === 0 || messages[idx - 1].senderId !== msg.senderId;
          return (
            <div key={msg.id} className={`flex flex-col ${isYou ? "items-end" : "items-start"}`}>
              {showSender && (
                <div className={`flex items-center gap-1.5 mb-1 ${isYou ? "flex-row-reverse" : ""}`}>
                  <span className="text-[11px] text-white/40">{msg.senderName}</span>
                  <span className="text-[10px] text-white/20">{msg.time}</span>
                </div>
              )}
              <div
                className={`max-w-[80%] px-3 py-2 text-sm ${
                  isYou
                    ? "bg-indigo-500/80 text-white rounded-2xl rounded-br-sm"
                    : "bg-white/[0.06] text-white/85 rounded-2xl rounded-bl-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* Notice */}
      <div className="px-4 py-1.5">
        <p className="text-[10px] text-white/25 text-center">
          Messages are visible to everyone in the call and deleted when the call ends.
        </p>
      </div>

      {/* Input */}
      <div className="px-3 py-2.5 border-t border-white/[0.06]">
        <div className="flex items-center gap-1.5 bg-white/[0.05] rounded-xl px-2.5 py-1.5 border border-white/[0.06] focus-within:border-indigo-500/30 transition-colors">
          <button className="w-7 h-7 rounded-lg hover:bg-white/[0.06] flex items-center justify-center flex-shrink-0 transition-colors">
            <Smile className="w-4 h-4 text-white/30" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Send a message..."
            className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none min-w-0"
          />
          <button className="w-7 h-7 rounded-lg hover:bg-white/[0.06] flex items-center justify-center flex-shrink-0 transition-colors">
            <Paperclip className="w-4 h-4 text-white/30" />
          </button>
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-7 h-7 rounded-lg bg-indigo-500 hover:bg-indigo-600 disabled:opacity-20 disabled:hover:bg-indigo-500 flex items-center justify-center flex-shrink-0 transition-all"
          >
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
