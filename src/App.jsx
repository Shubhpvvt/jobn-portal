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

import FixedLayout from "./page/fixedlayout";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      
      <Route
        path="/onboarding"
        element={
          <FixedLayout>
            <Onboarding />
          </FixedLayout>
        }
      />

      <Route
        path="/dashboard"
        element={
          <FixedLayout>
            <Dashboard />
          </FixedLayout>
        }
      />

      <Route
        path="/profile"
        element={
          <FixedLayout>
            <Profile />
          </FixedLayout>
        }
      />

      <Route
        path="/explore"
        element={
          <FixedLayout>
            <Explore />
          </FixedLayout>
        }
      />

      <Route
        path="/messages"
        element={
          <FixedLayout>
            <Messages />
          </FixedLayout>
        }
      />

      <Route
        path="/opportunities"
        element={
          <FixedLayout>
            <Opportunities />
          </FixedLayout>
        }
      />

      <Route
        path="/joblisting"
        element={
          <FixedLayout>
            <JobListing />
          </FixedLayout>
        }
      />

      <Route
        path="/setting"
        element={
          <FixedLayout>
            <Setting />
          </FixedLayout>
        }
      />

      <Route
        path="/public"
        element={
          <FixedLayout>
            <Public />
          </FixedLayout>
        }
      />

    </Routes>
  );
}

export default App;
