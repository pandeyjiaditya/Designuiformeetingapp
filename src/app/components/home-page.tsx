import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Plus,
  Keyboard,
  Settings,
  Users,
  Clock,
  ChevronRight,
  ArrowRight,
  MoreVertical,
  Volume2,
} from "lucide-react";

const upcomingMeetings = [
  { id: 1, title: "Team Standup", time: "10:00 AM", participants: 6, isNow: true },
  { id: 2, title: "Design Review", time: "11:30 AM", participants: 4, isNow: false },
  { id: 3, title: "Sprint Planning", time: "2:00 PM", participants: 8, isNow: false },
];

export function HomePage() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const [isCamOn, setIsCamOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const handleJoin = () => {
    navigate("/meeting");
  };

  return (
    <div className="min-h-screen bg-[#0f0f23] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
            <Video className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg text-white/90 hidden sm:inline tracking-tight">LongMeet</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-sm hidden md:inline">
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="text-white/60 text-sm">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
          <button className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center">
            <Settings className="w-4 h-4 text-white/50" />
          </button>
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs text-white">
            Y
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-10 items-start">
          {/* Left: Camera Preview + Join */}
          <div className="space-y-5">
            {/* Camera preview */}
            <div className="relative aspect-video bg-[#1a1a30] rounded-2xl overflow-hidden border border-white/[0.06]">
              {isCamOn ? (
                <img
                  src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwcGVyc29ufGVufDF8fHx8MTc3MjI1ODQwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Camera preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <span className="text-3xl text-indigo-300">Y</span>
                  </div>
                  <span className="text-white/40 text-sm">Camera is off</span>
                </div>
              )}

              {/* Camera controls overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <button
                  onClick={() => setIsMicOn(!isMicOn)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all backdrop-blur-sm ${
                    isMicOn
                      ? "bg-white/15 hover:bg-white/25 border border-white/10"
                      : "bg-red-500/90 hover:bg-red-600"
                  }`}
                >
                  {isMicOn ? (
                    <Mic className="w-5 h-5 text-white" />
                  ) : (
                    <MicOff className="w-5 h-5 text-white" />
                  )}
                </button>
                <button
                  onClick={() => setIsCamOn(!isCamOn)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all backdrop-blur-sm ${
                    isCamOn
                      ? "bg-white/15 hover:bg-white/25 border border-white/10"
                      : "bg-red-500/90 hover:bg-red-600"
                  }`}
                >
                  {isCamOn ? (
                    <Video className="w-5 h-5 text-white" />
                  ) : (
                    <VideoOff className="w-5 h-5 text-white" />
                  )}
                </button>
                <button className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center justify-center backdrop-blur-sm transition-all">
                  <Volume2 className="w-5 h-5 text-white" />
                </button>
                <button className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 border border-white/10 flex items-center justify-center backdrop-blur-sm transition-all">
                  <MoreVertical className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Join actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 focus-within:border-indigo-500/50 transition-colors">
                <Keyboard className="w-4 h-4 text-white/30 flex-shrink-0" />
                <input
                  type="text"
                  value={meetingCode}
                  onChange={(e) => setMeetingCode(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                  placeholder="Enter a code or link"
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none"
                />
                {meetingCode && (
                  <button
                    onClick={handleJoin}
                    className="text-indigo-400 text-sm hover:text-indigo-300 transition-colors flex items-center gap-1"
                  >
                    Join
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <button
                onClick={handleJoin}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-sm"
              >
                <Plus className="w-4 h-4" />
                New meeting
              </button>
            </div>

            {/* Ready to join text */}
            <p className="text-white/30 text-sm text-center sm:text-left">
              Ready to join? Your mic is {isMicOn ? "on" : "off"} and camera is {isCamOn ? "on" : "off"}.
            </p>
          </div>

          {/* Right: Upcoming meetings */}
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-sm text-white/50 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Upcoming
              </span>
              <button className="text-indigo-400 text-xs hover:text-indigo-300 transition-colors flex items-center gap-0.5">
                View all
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="space-y-1.5">
              {upcomingMeetings.map((meeting) => (
                <button
                  key={meeting.id}
                  onClick={handleJoin}
                  className="flex items-center gap-3 w-full p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-white/[0.1] transition-all text-left group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      meeting.isNow
                        ? "bg-green-500/15 text-green-400"
                        : "bg-white/[0.06] text-white/40"
                    }`}
                  >
                    <Video className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-white/80 truncate">{meeting.title}</span>
                      {meeting.isNow && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500/15 text-green-400 flex-shrink-0 uppercase tracking-wide">
                          Live
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-white/30 text-xs">{meeting.time}</span>
                      <span className="text-white/10">·</span>
                      <span className="text-white/30 text-xs flex items-center gap-0.5">
                        <Users className="w-3 h-3" />
                        {meeting.participants}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-white/30 transition-colors" />
                </button>
              ))}
            </div>

            {/* Quick info card */}
            <div className="mt-4 p-4 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/[0.1]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Your next meeting</p>
                  <p className="text-xs text-white/40 mt-0.5">
                    Team Standup starts now with 5 others waiting
                  </p>
                  <button
                    onClick={handleJoin}
                    className="mt-2 text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                  >
                    Join now
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
