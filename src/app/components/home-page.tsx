import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Plus,
  Hash,
  Users,
  ArrowRight,
  Volume2,
  Gamepad2,
  Music,
  Popcorn,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";

const activeRooms = [
  {
    id: 1,
    name: "Movie Night 🍿",
    host: "Mia",
    participants: 4,
    avatars: [
      "https://images.unsplash.com/photo-1723189037342-c94baeda4e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2FzdWFsJTIwaGFwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1667355744870-df772b842b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndXklMjBoZWFkcGhvbmVzJTIwZ2FtaW5nJTIwc2V0dXAlMjBuZW9ufGVufDF8fHx8MTc3MjI4MDMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1749823029791-051b682d71bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwbGF1Z2hpbmclMjBjYW5kaWQlMjBjYXN1YWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    color: "from-orange-500 to-pink-500",
    icon: Popcorn,
    vibe: "watching",
  },
  {
    id: 2,
    name: "Game Squad 🎮",
    host: "Jake",
    participants: 3,
    avatars: [
      "https://images.unsplash.com/photo-1667355744870-df772b842b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndXklMjBoZWFkcGhvbmVzJTIwZ2FtaW5nJTIwc2V0dXAlMjBuZW9ufGVufDF8fHx8MTc3MjI4MDMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1658561584588-675f8773a24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMGJlYW5pZSUyMHN0cmVldHdlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    color: "from-violet-500 to-blue-500",
    icon: Gamepad2,
    vibe: "gaming",
  },
  {
    id: 3,
    name: "Vibe & Chill 🎵",
    host: "Sam",
    participants: 5,
    avatars: [
      "https://images.unsplash.com/photo-1634652470670-ed2129958398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwbGF1Z2hpbmclMjBoYW5naW5nJTIwb3V0JTIwY2FzdWFsfGVufDF8fHx8MTc3MjI4MDMwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1723189037342-c94baeda4e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2FzdWFsJTIwaGFwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1749823029791-051b682d71bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwbGF1Z2hpbmclMjBjYW5kaWQlMjBjYXN1YWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    color: "from-emerald-500 to-cyan-500",
    icon: Music,
    vibe: "listening",
  },
];

function LongMeetLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 via-pink-500 to-violet-600 flex items-center justify-center shadow-lg shadow-pink-500/25 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/25 to-transparent" />
        <span className="text-lg relative z-10">🔥</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg tracking-tight bg-gradient-to-r from-orange-300 via-pink-300 to-violet-300 bg-clip-text text-transparent">
          LongMeet
        </span>
        <span className="text-[10px] text-white/30 tracking-wider">hang with your crew</span>
      </div>
    </div>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");
  const [isCamOn, setIsCamOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const generatedCode = "chill-vibes-420";

  const handleJoin = () => navigate("/meeting");

  const handleCopyCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-[#0a0a1a]" />
      <div
        className="fixed inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1580724495666-99f1d8d7f18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwcGFydHklMjBwdXJwbGUlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzcyMjgwMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Glowing orbs */}
      <div className="fixed top-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-[120px]" />
      <div className="fixed bottom-[-15%] right-[-5%] w-[450px] h-[450px] rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="fixed top-[50%] left-[50%] w-[350px] h-[350px] rounded-full bg-pink-500/10 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <LongMeetLogo />
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-white/[0.04] rounded-full px-3 py-1.5 border border-white/[0.06]">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/40">5 friends online</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-sm text-white shadow-lg shadow-orange-500/20 ring-2 ring-white/10">
              Y
            </div>
          </div>
        </header>

        {/* Main */}
        <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">
            {/* Left side */}
            <div className="space-y-6">
              {/* Hero */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl !leading-[1.1] tracking-tight">
                  Your crew is{" "}
                  <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                    waiting
                  </span>
                  <br />
                  <span className="text-white/40">hop in anytime</span> ✌️
                </h1>
                <p className="text-white/35 max-w-md">
                  Create a room, share the code, and hang out. No sign-ups, no limits, no bs.
                </p>
              </div>

              {/* Camera preview */}
              <div className="relative aspect-video max-w-xl bg-[#13132a] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-pink-500/5">
                {isCamOn ? (
                  <img
                    src="https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGNhc3VhbCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Camera preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1a1a35] to-[#10102a]">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center border border-white/[0.06]">
                      <span className="text-3xl">😎</span>
                    </div>
                    <span className="text-white/30 text-sm">cam off, still vibin</span>
                  </div>
                )}

                {/* Controls overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/40 backdrop-blur-xl rounded-2xl p-1.5 border border-white/[0.1]">
                  <button
                    onClick={() => setIsMicOn(!isMicOn)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isMicOn ? "bg-white/10 hover:bg-white/20" : "bg-red-500/90 hover:bg-red-500"
                    }`}
                  >
                    {isMicOn ? <Mic className="w-4 h-4 text-white" /> : <MicOff className="w-4 h-4 text-white" />}
                  </button>
                  <button
                    onClick={() => setIsCamOn(!isCamOn)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isCamOn ? "bg-white/10 hover:bg-white/20" : "bg-red-500/90 hover:bg-red-500"
                    }`}
                  >
                    {isCamOn ? <Video className="w-4 h-4 text-white" /> : <VideoOff className="w-4 h-4 text-white" />}
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                    <Volume2 className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Status */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/[0.08]">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] text-white/60">looking good 👀</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <button
                  onClick={handleJoin}
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:from-orange-600 hover:via-pink-600 hover:to-violet-600 transition-all text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Plus className="w-4 h-4" />
                  Create a Room
                </button>
                <div className="flex items-center gap-2 flex-1 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-3 focus-within:border-pink-500/30 focus-within:bg-white/[0.06] transition-all">
                  <Hash className="w-4 h-4 text-white/20 flex-shrink-0" />
                  <input
                    type="text"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                    placeholder="paste room code..."
                    className="flex-1 bg-transparent text-sm text-white placeholder-white/20 outline-none"
                  />
                  {roomCode && (
                    <button
                      onClick={handleJoin}
                      className="text-pink-400 text-sm hover:text-pink-300 transition-colors flex items-center gap-1"
                    >
                      Join <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Quick share code */}
              <div className="flex items-center gap-3 max-w-xl">
                <div className="flex items-center gap-2 bg-white/[0.03] border border-dashed border-white/[0.1] rounded-xl px-4 py-2.5">
                  <span className="text-xs text-white/25">Your last room:</span>
                  <code className="text-sm text-pink-400/80 tracking-wide">{generatedCode}</code>
                  <button
                    onClick={handleCopyCode}
                    className="w-6 h-6 rounded-md hover:bg-white/[0.08] flex items-center justify-center transition-colors"
                  >
                    {copiedCode ? (
                      <Check className="w-3 h-3 text-green-400" />
                    ) : (
                      <Copy className="w-3 h-3 text-white/30" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Active rooms */}
            <div className="space-y-4">
              {/* Friends banner */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08]">
                <img
                  src="https://images.unsplash.com/photo-1758275557315-2685e63fa8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZyaWVuZHMlMjBzZWxmaWUlMjBncm91cCUyMGZ1bnxlbnwxfHx8fDE3NzIyODAzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Friends hanging out"
                  className="w-full h-36 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/50 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-white/90">Your squad awaits</p>
                    <p className="text-[11px] text-white/35 mt-0.5">jump in or create something new</p>
                  </div>
                  <div className="flex -space-x-2">
                    {activeRooms[0].avatars.map((av, i) => (
                      <img
                        key={i}
                        src={av}
                        className="w-7 h-7 rounded-full border-2 border-[#0a0a1a] object-cover"
                        alt=""
                      />
                    ))}
                    <div className="w-7 h-7 rounded-full border-2 border-[#0a0a1a] bg-white/[0.1] flex items-center justify-center text-[10px] text-white/50">
                      +2
                    </div>
                  </div>
                </div>
              </div>

              {/* Active rooms */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-xs text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Live rooms
                  </span>
                </div>

                <div className="space-y-2">
                  {activeRooms.map((room) => (
                    <button
                      key={room.id}
                      onClick={handleJoin}
                      className="flex items-center gap-3 w-full p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-white/[0.12] transition-all text-left group"
                    >
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${room.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <room.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-white/80 truncate">{room.name}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex -space-x-1.5">
                            {room.avatars.slice(0, 3).map((av, i) => (
                              <img
                                key={i}
                                src={av}
                                className="w-4 h-4 rounded-full border border-[#13132a] object-cover"
                                alt=""
                              />
                            ))}
                          </div>
                          <span className="text-white/25 text-xs">
                            {room.host} + {room.participants - 1} more
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-[10px] text-green-400/70">LIVE</span>
                        </div>
                        <span className="text-[10px] text-white/20 group-hover:text-pink-400/60 transition-colors">
                          hop in →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick vibe selector */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06]">
                <p className="text-xs text-white/30 mb-3">Quick start a room</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { emoji: "🎮", label: "Game Night", gradient: "from-violet-500/15 to-blue-500/15 hover:from-violet-500/25 hover:to-blue-500/25 border-violet-500/10" },
                    { emoji: "🍿", label: "Watch Party", gradient: "from-orange-500/15 to-pink-500/15 hover:from-orange-500/25 hover:to-pink-500/25 border-orange-500/10" },
                    { emoji: "💬", label: "Just Chill", gradient: "from-emerald-500/15 to-cyan-500/15 hover:from-emerald-500/25 hover:to-cyan-500/25 border-emerald-500/10" },
                  ].map((vibe) => (
                    <button
                      key={vibe.label}
                      onClick={handleJoin}
                      className={`flex flex-col items-center gap-1.5 py-3 rounded-xl bg-gradient-to-br ${vibe.gradient} border transition-all hover:scale-[1.03] active:scale-[0.97]`}
                    >
                      <span className="text-xl">{vibe.emoji}</span>
                      <span className="text-[11px] text-white/40">{vibe.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Online friends */}
              <div className="px-1">
                <p className="text-xs text-white/25 mb-2 flex items-center gap-1.5">
                  <Users className="w-3 h-3" />
                  Online now
                </p>
                <div className="flex items-center gap-1">
                  {[
                    { name: "Mia", avatar: activeRooms[0].avatars[0] },
                    { name: "Jake", avatar: activeRooms[1].avatars[0] },
                    { name: "Riya", avatar: activeRooms[0].avatars[2] },
                    { name: "Alex", avatar: activeRooms[1].avatars[1] },
                    { name: "Sam", avatar: activeRooms[2].avatars[0] },
                  ].map((friend) => (
                    <div key={friend.name} className="relative group" title={friend.name}>
                      <img
                        src={friend.avatar}
                        className="w-9 h-9 rounded-full border-2 border-[#0a0a1a] object-cover hover:border-pink-500/40 transition-colors cursor-pointer"
                        alt={friend.name}
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0a0a1a]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
