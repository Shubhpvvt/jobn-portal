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

      {/* ✅ LOGIN (FIXED LAYOUT ADD) */}
      <Route
        path="/"
        element={
          <FixedLayout>
            <Login />
          </FixedLayout>
        }
      />
      <Route
        path="/login"
        element={
          <FixedLayout>
            <Login />
          </FixedLayout>
        }
      />

      {/* ✅ ONBOARDING */}
      <Route
        path="/onboarding"
        element={
          <FixedLayout>
            <Onboarding />
          </FixedLayout>
        }
      />

      {/* ✅ DASHBOARD */}
      <Route
        path="/dashboard"
        element={
          <FixedLayout>
            <Dashboard />
          </FixedLayout>
        }
      />

      {/* ✅ OTHER PAGES */}
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
