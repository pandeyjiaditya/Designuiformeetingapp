import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/home-page";
import { MeetingRoom } from "./components/meeting-room";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/meeting",
    Component: MeetingRoom,
  },
]);
