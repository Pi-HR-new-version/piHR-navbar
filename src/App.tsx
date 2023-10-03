// import Navbar from "./components/navigation/navbar";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Routes, Route } from "react-router-dom";

import LoginPage from "auth/LoginPage";
import Dashboard from "./components/dashboard";

import ProtectedRoute from "./components/routes/protectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
