import { Routes, Route } from "react-router-dom";
import { Chat } from "./pages/chat";
import { Main } from "./pages/main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/smail" element={<Chat />} />
    </Routes>
  );
};
