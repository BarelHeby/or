import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import User from "./components/User/User";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./app.css";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminProjects from "./components/Admin/AdminDashboard/AdminProjects/AdminProjects";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  const [authenticated, setauthenticated] = useState(true);
  const adminUsers = { admin: "admin" };
  function updateAuth(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (username in adminUsers && adminUsers[username] === password) {
      setauthenticated(!authenticated);
      return true;
    }
    alert("שם משתמש או סיסמא שגויים");
    return false;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<User />} />
            <Route path="/admin" element={<Navigate to="/admin/login" />} />
            <Route
              excact
              path="/admin/login"
              element={
                <AdminLogin
                  authenticated={authenticated}
                  updateAuth={updateAuth}
                />
              }
            />
            <Route
              excact
              path="/admin/dashboard"
              element={<AdminDashboard authenticated={authenticated} />}
            />
            <Route
              excact
              path="/admin/dashboard/projects"
              element={<AdminProjects authenticated={authenticated} />}
            />
            <Route
              excact
              path="/admin/dashboard/reviews"
              element={<AdminDashboard authenticated={authenticated} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
