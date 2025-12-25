import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Onboarding from "./page/Onboarding";
import Dashboard from "./page/Dashboard";
import Profile from "./page/profile";
import Explore from "./page/explore";
import Messages from "./page/messages";
import Opportunities from "./page/opportunities";
import JobListing from "./page/joblisting";
import Setting from "./page/setting";
import Public from "./page/public";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/joblisting" element={<JobListing />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/public" element={<Public />} />
    </Routes>
  );
}

export default App;
