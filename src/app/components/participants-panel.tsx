import { X, Mic, MicOff, VideoOff, MoreHorizontal, Search, UserPlus } from "lucide-react";
import type { Participant } from "./mock-data";

interface ParticipantsPanelProps {
  participants: Participant[];
  onClose: () => void;
}

export function ParticipantsPanel({ participants, onClose }: ParticipantsPanelProps) {
  return (
    <div className="flex flex-col h-full bg-[#0f0f28] text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
        <h3 className="text-sm text-white/70">Squad ({participants.length}) 🤙</h3>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-lg hover:bg-white/[0.06] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-white/50" />
        </button>
      </div>

      {/* Search + invite */}
      <div className="px-3 py-2.5 space-y-1.5">
        <div className="flex items-center gap-2 bg-white/[0.04] rounded-xl px-3 py-2 border border-white/[0.06] focus-within:border-pink-500/20 transition-colors">
          <Search className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
          <input
            type="text"
            placeholder="find your friend..."
            className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none"
          />
        </div>
        <button className="flex items-center gap-2 w-full px-3 py-2 rounded-xl hover:bg-white/[0.04] transition-colors text-pink-400 text-sm">
          <UserPlus className="w-4 h-4" />
          Invite friends
        </button>
      </div>

      {/* Participants list */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="px-2 py-1.5">
          <span className="text-[10px] text-white/25 uppercase tracking-widest">in the room</span>
        </div>
        {participants.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-white/[0.03] group transition-colors"
          >
            <div className="relative flex-shrink-0">
              <img
                src={p.avatar}
                alt={p.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              {p.isSpeaking && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0f0f28]" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-sm text-white/75 truncate">
                  {p.isYou ? "You" : p.name}
                </span>
                {p.isHost && (
                  <span className="text-[10px]">👑</span>
                )}
                {p.isYou && (
                  <span className="text-[10px] text-white/25">(you)</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              {p.isMuted ? (
                <MicOff className="w-3.5 h-3.5 text-red-400/70" />
              ) : (
                <Mic className="w-3.5 h-3.5 text-white/25" />
              )}
              {!p.isVideoOn && <VideoOff className="w-3.5 h-3.5 text-red-400/70" />}
              <button className="w-6 h-6 rounded-md hover:bg-white/[0.08] items-center justify-center hidden group-hover:flex transition-colors">
                <MoreHorizontal className="w-3.5 h-3.5 text-white/40" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
