import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import SecNavbar from "./components/navbar/SecNavbar";
import MainPanel from "./components/main/MainPanel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecNavbar />
      <MainPanel />
    </div>
  );
}

export default App;
