import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { VideoTile } from "./video-tile";
import { ControlBar } from "./control-bar";
import { ChatPanel } from "./chat-panel";
import { ParticipantsPanel } from "./participants-panel";
import { participants as initialParticipants, chatMessages as initialMessages } from "./mock-data";
import type { ChatMessage } from "./mock-data";
import { Copy, Check, ChevronLeft, MoreVertical, Maximize2, Grid3X3, Popcorn } from "lucide-react";

export function MeetingRoom() {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [copied, setCopied] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const participants = initialParticipants.map((p) =>
    p.isYou ? { ...p, isMuted, isVideoOn } : p
  );

  const handleSendMessage = useCallback(
    (text: string) => {
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        senderId: "1",
        senderName: "You",
        text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, newMsg]);
    },
    []
  );

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setIsParticipantsOpen(false);
      setUnreadMessages(0);
    }
  };

  const handleToggleParticipants = () => {
    setIsParticipantsOpen(!isParticipantsOpen);
    if (!isParticipantsOpen) setIsChatOpen(false);
  };

  const handleCopyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sidePanel = isChatOpen || isParticipantsOpen;
  const pinnedParticipant = pinnedId ? participants.find((p) => p.id === pinnedId) : null;
  const otherParticipants = pinnedId
    ? participants.filter((p) => p.id !== pinnedId)
    : participants;

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0a0a1a] overflow-hidden">
      {/* Top bar */}
      <div
        className={`flex items-center justify-between px-3 sm:px-4 py-2 bg-[#0a0a1a]/90 backdrop-blur-sm border-b border-white/[0.04] z-10 transition-transform duration-300 ${
          showTopBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Left */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/")}
            className="w-8 h-8 rounded-lg hover:bg-white/[0.06] flex items-center justify-center transition-colors md:hidden"
          >
            <ChevronLeft className="w-4 h-4 text-white/60" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
              <Popcorn className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm text-white/70 hidden sm:inline">Movie Night 🍿</span>
            <span className="text-white/15 hidden sm:inline">·</span>
            <span className="text-xs text-white/30 tabular-nums">{formatTime(elapsed)}</span>
          </div>
        </div>

        {/* Center: room code */}
        <div className="hidden md:flex items-center gap-2 bg-white/[0.04] rounded-full px-3 py-1.5 border border-white/[0.06]">
          <span className="text-xs text-white/40 tracking-wider">chill-vibes-420</span>
          <button
            onClick={handleCopyLink}
            className="w-6 h-6 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            {copied ? (
              <Check className="w-3 h-3 text-green-400" />
            ) : (
              <Copy className="w-3 h-3 text-white/30" />
            )}
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPinnedId(null)}
            className="w-8 h-8 rounded-lg hover:bg-white/[0.06] flex items-center justify-center transition-colors hidden sm:flex"
            title="Grid view"
          >
            <Grid3X3 className="w-4 h-4 text-white/40" />
          </button>
          <button className="w-8 h-8 rounded-lg hover:bg-white/[0.06] flex items-center justify-center transition-colors hidden sm:flex">
            <Maximize2 className="w-4 h-4 text-white/40" />
          </button>
          <button className="w-8 h-8 rounded-lg hover:bg-white/[0.06] flex items-center justify-center transition-colors sm:hidden">
            <MoreVertical className="w-4 h-4 text-white/50" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden min-h-0">
        {/* Video grid area */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <div className="flex-1 p-1.5 sm:p-2.5 lg:p-3 overflow-hidden">
            {pinnedParticipant ? (
              <div className="h-full flex flex-col gap-1.5 sm:gap-2">
                <div className="flex-1 min-h-0">
                  <VideoTile
                    participant={pinnedParticipant}
                    isLarge
                    isPinned
                    onPin={() => setPinnedId(null)}
                  />
                </div>
                <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 flex-shrink-0 scrollbar-hide">
                  {otherParticipants.map((p) => (
                    <div key={p.id} className="w-28 h-20 sm:w-36 sm:h-24 lg:w-44 lg:h-28 flex-shrink-0">
                      <VideoTile
                        participant={p}
                        onPin={() => setPinnedId(p.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                className={`h-full grid gap-1.5 sm:gap-2 auto-rows-fr ${
                  participants.length <= 1
                    ? "grid-cols-1 grid-rows-1"
                    : participants.length <= 2
                    ? "grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1"
                    : participants.length <= 4
                    ? "grid-cols-2 grid-rows-2"
                    : participants.length <= 6
                    ? "grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2"
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                }`}
              >
                {participants.map((p) => (
                  <div key={p.id} className="min-h-0">
                    <VideoTile
                      participant={p}
                      onPin={() => setPinnedId(p.id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Side panel */}
        {sidePanel && (
          <div className="w-full sm:w-80 lg:w-[340px] flex-shrink-0 border-l border-white/[0.06] absolute sm:relative inset-0 sm:inset-auto z-40 sm:z-auto">
            {isChatOpen ? (
              <ChatPanel
                messages={messages}
                onSendMessage={handleSendMessage}
                onClose={handleToggleChat}
              />
            ) : (
              <ParticipantsPanel
                participants={participants}
                onClose={handleToggleParticipants}
              />
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <ControlBar
        isMuted={isMuted}
        isVideoOn={isVideoOn}
        isScreenSharing={isScreenSharing}
        isHandRaised={isHandRaised}
        isChatOpen={isChatOpen}
        isParticipantsOpen={isParticipantsOpen}
        onToggleMute={() => setIsMuted(!isMuted)}
        onToggleVideo={() => setIsVideoOn(!isVideoOn)}
        onToggleScreenShare={() => setIsScreenSharing(!isScreenSharing)}
        onToggleHand={() => setIsHandRaised(!isHandRaised)}
        onToggleChat={handleToggleChat}
        onToggleParticipants={handleToggleParticipants}
        onLeave={() => navigate("/")}
        participantCount={participants.length}
        unreadMessages={unreadMessages}
      />
    </div>
  );
}
