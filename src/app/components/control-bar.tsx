import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Monitor,
  MessageSquare,
  Users,
  Hand,
  MoreHorizontal,
  PhoneOff,
  Smile,
  Settings,
  Copy,
  ChevronUp,
  Captions,
} from "lucide-react";
import { useState } from "react";

interface ControlBarProps {
  isMuted: boolean;
  isVideoOn: boolean;
  isScreenSharing: boolean;
  isHandRaised: boolean;
  isChatOpen: boolean;
  isParticipantsOpen: boolean;
  onToggleMute: () => void;
  onToggleVideo: () => void;
  onToggleScreenShare: () => void;
  onToggleHand: () => void;
  onToggleChat: () => void;
  onToggleParticipants: () => void;
  onLeave: () => void;
  participantCount: number;
  unreadMessages: number;
}

function ControlButton({
  active,
  danger,
  onClick,
  title,
  children,
  badge,
  className = "",
}: {
  active?: boolean;
  danger?: boolean;
  onClick?: () => void;
  title?: string;
  children: React.ReactNode;
  badge?: number | string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-all duration-150 ${
        danger
          ? "bg-red-500/90 hover:bg-red-500 text-white"
          : active
          ? "bg-indigo-500/90 hover:bg-indigo-500 text-white"
          : "bg-white/[0.07] hover:bg-white/[0.12] text-white/80"
      } ${className}`}
    >
      {children}
      {badge !== undefined && (
        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-red-500 rounded-full text-white text-[10px] flex items-center justify-center px-1">
          {badge}
        </span>
      )}
    </button>
  );
}

export function ControlBar({
  isMuted,
  isVideoOn,
  isScreenSharing,
  isHandRaised,
  isChatOpen,
  isParticipantsOpen,
  onToggleMute,
  onToggleVideo,
  onToggleScreenShare,
  onToggleHand,
  onToggleChat,
  onToggleParticipants,
  onLeave,
  participantCount,
  unreadMessages,
}: ControlBarProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative flex items-center justify-center px-2 sm:px-4 py-2.5 bg-[#0f0f23] border-t border-white/[0.04]">
      {/* Center controls */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Mic with dropdown arrow */}
        <div className="relative flex items-center">
          <ControlButton
            danger={isMuted}
            onClick={onToggleMute}
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <MicOff className="w-[18px] h-[18px]" />
            ) : (
              <Mic className="w-[18px] h-[18px]" />
            )}
          </ControlButton>
          <button className="hidden sm:flex w-5 h-10 sm:h-11 items-center justify-center -ml-0.5 rounded-r-xl hover:bg-white/[0.06] transition-colors">
            <ChevronUp className="w-3 h-3 text-white/30" />
          </button>
        </div>

        {/* Video with dropdown arrow */}
        <div className="relative flex items-center">
          <ControlButton
            danger={!isVideoOn}
            onClick={onToggleVideo}
            title={isVideoOn ? "Turn off camera" : "Turn on camera"}
          >
            {isVideoOn ? (
              <Video className="w-[18px] h-[18px]" />
            ) : (
              <VideoOff className="w-[18px] h-[18px]" />
            )}
          </ControlButton>
          <button className="hidden sm:flex w-5 h-10 sm:h-11 items-center justify-center -ml-0.5 rounded-r-xl hover:bg-white/[0.06] transition-colors">
            <ChevronUp className="w-3 h-3 text-white/30" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-white/[0.08] mx-0.5 hidden sm:block" />

        {/* Screen share */}
        <ControlButton
          active={isScreenSharing}
          onClick={onToggleScreenShare}
          title="Share screen"
          className="hidden sm:flex"
        >
          <Monitor className="w-[18px] h-[18px]" />
        </ControlButton>

        {/* Captions */}
        <ControlButton title="Captions" className="hidden lg:flex">
          <Captions className="w-[18px] h-[18px]" />
        </ControlButton>

        {/* Reactions */}
        <ControlButton title="Reactions" className="hidden md:flex">
          <Smile className="w-[18px] h-[18px]" />
        </ControlButton>

        {/* Raise hand */}
        <ControlButton
          active={isHandRaised}
          onClick={onToggleHand}
          title="Raise hand"
        >
          <Hand className="w-[18px] h-[18px]" />
        </ControlButton>

        {/* Divider */}
        <div className="w-px h-6 bg-white/[0.08] mx-0.5 hidden sm:block" />

        {/* Chat */}
        <ControlButton
          active={isChatOpen}
          onClick={onToggleChat}
          title="Chat"
          badge={unreadMessages > 0 && !isChatOpen ? unreadMessages : undefined}
        >
          <MessageSquare className="w-[18px] h-[18px]" />
        </ControlButton>

        {/* Participants */}
        <ControlButton
          active={isParticipantsOpen}
          onClick={onToggleParticipants}
          title="Participants"
        >
          <Users className="w-[18px] h-[18px]" />
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-white/[0.15] rounded-full text-white/70 text-[10px] flex items-center justify-center px-1">
            {participantCount}
          </span>
        </ControlButton>

        {/* More (mobile) */}
        <ControlButton
          onClick={() => setShowMore(!showMore)}
          title="More"
          className="sm:hidden"
        >
          <MoreHorizontal className="w-[18px] h-[18px]" />
        </ControlButton>

        {/* Divider */}
        <div className="w-px h-6 bg-white/[0.08] mx-0.5" />

        {/* Leave */}
        <button
          onClick={onLeave}
          className="h-10 sm:h-11 px-4 sm:px-5 rounded-xl bg-red-500/90 hover:bg-red-500 flex items-center justify-center gap-2 transition-all"
        >
          <PhoneOff className="w-[18px] h-[18px] text-white" />
          <span className="text-white text-sm hidden sm:inline">Leave</span>
        </button>
      </div>

      {/* More menu (mobile) */}
      {showMore && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowMore(false)}
          />
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-[#1c1c38] rounded-xl shadow-2xl shadow-black/50 p-1.5 z-50 sm:hidden border border-white/[0.08] min-w-[200px]">
            <button
              onClick={() => {
                onToggleScreenShare();
                setShowMore(false);
              }}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-white/[0.06] text-white/80 text-sm transition-colors"
            >
              <Monitor className="w-4 h-4 text-white/50" />
              Share screen
            </button>
            <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-white/[0.06] text-white/80 text-sm transition-colors">
              <Captions className="w-4 h-4 text-white/50" />
              Captions
            </button>
            <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-white/[0.06] text-white/80 text-sm transition-colors">
              <Smile className="w-4 h-4 text-white/50" />
              Reactions
            </button>
            <div className="h-px bg-white/[0.06] my-1" />
            <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-white/[0.06] text-white/80 text-sm transition-colors">
              <Copy className="w-4 h-4 text-white/50" />
              Copy invite link
            </button>
            <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-white/[0.06] text-white/80 text-sm transition-colors">
              <Settings className="w-4 h-4 text-white/50" />
              Settings
            </button>
          </div>
        </>
      )}
    </div>
  );
}
