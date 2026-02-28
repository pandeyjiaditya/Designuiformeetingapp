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
    avatar: "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0JTIwcGVyc29ufGVufDF8fHx8MTc3MjI1ODQwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: false,
    isVideoOn: true,
    isSpeaking: false,
    isHost: true,
    isYou: true,
  },
  {
    id: "2",
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMjc4OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: false,
    isVideoOn: true,
    isSpeaking: true,
    isHost: false,
    isYou: false,
  },
  {
    id: "3",
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1762708590808-c453c0e4fb0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjYXN1YWwlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzcyMjc4OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: true,
    isVideoOn: true,
    isSpeaking: false,
    isHost: false,
    isYou: false,
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1589800887183-e22983ea361c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzIyNTg4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: false,
    isVideoOn: false,
    isSpeaking: false,
    isHost: false,
    isYou: false,
  },
  {
    id: "5",
    name: "David Park",
    avatar: "https://images.unsplash.com/photo-1769636930047-4478f12cf430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGdsYXNzZXMlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMjc4OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: true,
    isVideoOn: true,
    isSpeaking: false,
    isHost: false,
    isYou: false,
  },
  {
    id: "6",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1659353218140-7f8f9da943fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwZGl2ZXJzZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzIyNzg5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    isMuted: false,
    isVideoOn: true,
    isSpeaking: false,
    isHost: false,
    isYou: false,
  },
];

export const chatMessages: ChatMessage[] = [
  { id: "1", senderId: "2", senderName: "Sarah Chen", text: "Hey everyone! Can you see my screen?", time: "10:02 AM" },
  { id: "2", senderId: "3", senderName: "James Wilson", text: "Yes, looks good!", time: "10:02 AM" },
  { id: "3", senderId: "4", senderName: "Emily Rodriguez", text: "My camera isn't working, but I can hear you all.", time: "10:03 AM" },
  { id: "4", senderId: "1", senderName: "You", text: "No worries, Emily. Let's get started with the agenda.", time: "10:03 AM" },
  { id: "5", senderId: "5", senderName: "David Park", text: "Can we discuss the Q3 roadmap first?", time: "10:04 AM" },
  { id: "6", senderId: "6", senderName: "Priya Sharma", text: "Sure! I have some updates to share.", time: "10:05 AM" },
  { id: "7", senderId: "2", senderName: "Sarah Chen", text: "Great, let me pull up the presentation.", time: "10:05 AM" },
];
