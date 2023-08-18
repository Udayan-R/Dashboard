import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Menu from "./pages/Menu";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Setting from "./pages/Setting";
import Users from "./pages/Users";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/users" element={<Users />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
};

export default App;
