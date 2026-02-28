export interface Participant {
  id: string;
  name: string;
  avatar: string;
  isMuted: boolean;
  isVideoOn: boolean;
  isSpeaking: boolean;
  isHost: boolean;
  isYou: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  time: string;
}

export const participants: Participant[] = [
  {
    id: "1",
    name: "You",
    avatar: "https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMGNhc3VhbCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: false,
    isVideoOn: true,
    isSpeaking: false,
    isHost: true,
    isYou: true,
  },
  {
    id: "2",
    name: "Mia",
    avatar: "https://images.unsplash.com/photo-1723189037342-c94baeda4e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwY2FzdWFsJTIwaGFwcHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: false,
    isVideoOn: true,
    isSpeaking: true,
    isHost: false,
    isYou: false,
  },
  {
    id: "3",
    name: "Jake",
    avatar: "https://images.unsplash.com/photo-1667355744870-df772b842b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndXklMjBoZWFkcGhvbmVzJTIwZ2FtaW5nJTIwc2V0dXAlMjBuZW9ufGVufDF8fHx8MTc3MjI4MDMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: true,
    isVideoOn: true,
    isSpeaking: false,
    isHost: false,
    isYou: false,
  },
  {
    id: "4",
    name: "Riya",
    avatar: "https://images.unsplash.com/photo-1749823029791-051b682d71bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwbGF1Z2hpbmclMjBjYW5kaWQlMjBjYXN1YWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: false,
    isVideoOn: false,
    isSpeaking: false,
    isHost: false,
    isYou: false,
  },
  {
    id: "5",
    name: "Alex",
    avatar: "https://images.unsplash.com/photo-1658561584588-675f8773a24f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMGJlYW5pZSUyMHN0cmVldHdlYXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIyODAzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: true,
    isVideoOn: true,
    isSpeaking: false,
    isHost: false,
    isYou: false,
  },
  {
    id: "6",
    name: "Sam",
    avatar: "https://images.unsplash.com/photo-1634652470670-ed2129958398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwbGF1Z2hpbmclMjBoYW5naW5nJTIwb3V0JTIwY2FzdWFsfGVufDF8fHx8MTc3MjI4MDMwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: false,
    isVideoOn: true,
    isSpeaking: false,
    isHost: false,
    isYou: false,
  },
];

export const chatMessages: ChatMessage[] = [
  { id: "1", senderId: "2", senderName: "Mia", text: "yooo who's picking the movie tonight? 🍿", time: "9:12 PM" },
  { id: "2", senderId: "3", senderName: "Jake", text: "not me lol last time i picked everyone fell asleep 😂", time: "9:12 PM" },
  { id: "3", senderId: "4", senderName: "Riya", text: "hahaha that documentary was painful ngl", time: "9:13 PM" },
  { id: "4", senderId: "1", senderName: "You", text: "ok ok i got a good one this time trust me 🙌", time: "9:13 PM" },
  { id: "5", senderId: "5", senderName: "Alex", text: "bro said 'trust me' last time too 💀", time: "9:14 PM" },
  { id: "6", senderId: "6", senderName: "Sam", text: "lets just play games instead lmaooo", time: "9:14 PM" },
  { id: "7", senderId: "2", senderName: "Mia", text: "YESSS among us!! who's in?? 🚀", time: "9:15 PM" },
];
