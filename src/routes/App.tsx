import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import GamePlay from "../pages/GamePlay";
import GameMenu from "../pages/GameMenu";
import GameStudy from "../pages/GameStudy";
import GameStats from "../pages/GameStats";
import GameHelp from "../pages/GameHelp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/daily-pfp" element={<Home />} />
        <Route path="/daily-pfp/game/:gameName" element={<GameMenu />} />
        <Route path="/daily-pfp/game/:gameName/play" element={<GamePlay />} />
        <Route path="/daily-pfp/game/:gameName/study" element={<GameStudy />} />
        <Route path="/daily-pfp/game/:gameName/stats" element={<GameStats />} />
        <Route path="/daily-pfp/game/:gameName/help" element={<GameHelp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
