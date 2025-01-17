import { BrowserRouter, Routes, Route } from "react-router";

import Home from "../pages/Home";
import GamePlay from "../pages/GamePlay";
import GameMenu from "../pages/GameMenu";
import GameStudy from "../pages/GameStudy";
import GameStats from "../pages/GameStats";
import GameHelp from "../pages/GameHelp";
import MasterPage from "../components/MasterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MasterPage>
              <Home />
            </MasterPage>
          }
        />
        <Route
          path="/game/:gameName"
          element={
            <MasterPage>
              <GameMenu />
            </MasterPage>
          }
        />
        <Route
          path="/game/:gameName/play"
          element={
            <MasterPage isFullScreen>
              <GamePlay />
            </MasterPage>
          }
        />
        <Route
          path="/game/:gameName/study"
          element={
            <MasterPage>
              <GameStudy />
            </MasterPage>
          }
        />
        <Route
          path="/game/:gameName/stats"
          element={
            <MasterPage>
              <GameStats />
            </MasterPage>
          }
        />
        <Route
          path="/game/:gameName/help"
          element={
            <MasterPage>
              <GameHelp />
            </MasterPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
