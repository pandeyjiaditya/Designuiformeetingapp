import { Mic, MicOff, Pin, PinOff } from "lucide-react";
import type { Participant } from "./mock-data";

interface VideoTileProps {
  participant: Participant;
  isLarge?: boolean;
  isPinned?: boolean;
  onPin?: () => void;
}

export function VideoTile({ participant, isLarge = false, isPinned = false, onPin }: VideoTileProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[#12122a] group transition-all duration-200 ${
        participant.isSpeaking
          ? "ring-[2.5px] ring-pink-400/60 shadow-[0_0_20px_rgba(244,114,182,0.15)]"
          : "ring-1 ring-white/[0.06]"
      } w-full h-full`}
    >
      {participant.isVideoOn ? (
        <img
          src={participant.avatar}
          alt={participant.name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#18183a] to-[#0e0e25]">
          <div
            className={`rounded-full flex items-center justify-center text-white/80 ${
              isLarge
                ? "w-24 h-24 text-4xl bg-gradient-to-br from-orange-500/20 to-pink-500/20"
                : "w-14 h-14 sm:w-16 sm:h-16 text-xl sm:text-2xl bg-gradient-to-br from-orange-500/20 to-pink-500/20"
            }`}
          >
            {participant.name.charAt(0)}
          </div>
        </div>
      )}

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Speaking indicator */}
      {participant.isSpeaking && (
        <div className="absolute top-2.5 left-2.5">
          <div className="flex items-center gap-1 bg-pink-500/20 backdrop-blur-sm rounded-full px-2 py-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-[10px] text-pink-300">talking</span>
          </div>
        </div>
      )}

      {/* Name + mic */}
      <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5">
        <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-[6px] rounded-lg px-2 py-0.5">
          {participant.isMuted ? (
            <MicOff className="w-3 h-3 text-red-400" />
          ) : (
            <Mic className="w-3 h-3 text-white/60" />
          )}
          <span className="text-white/90 text-xs">
            {participant.isYou ? "You" : participant.name}
            {participant.isHost && (
              <span className="ml-1 text-[10px] text-orange-300/80">👑</span>
            )}
          </span>
        </div>
      </div>

      {/* Pin button */}
      {onPin && (
        <button
          onClick={onPin}
          className={`absolute top-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
            isPinned
              ? "bg-pink-500 opacity-100"
              : "bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100"
          }`}
          title={isPinned ? "Unpin" : "Pin"}
        >
          {isPinned ? (
            <PinOff className="w-3.5 h-3.5 text-white" />
          ) : (
            <Pin className="w-3.5 h-3.5 text-white" />
          )}
        </button>
      )}
    </div>
  );
}
