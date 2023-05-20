import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import User from "./components/User/User";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminProjects from "./components/Admin/AdminDashboard/AdminProjects/AdminProjects";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  const [authenticated, setAuthenticated] = useState(false);
  const adminUsers = { admin: "admin" };

  const updateAuth = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (
      Object.keys(adminUsers).includes(username) &&
      adminUsers[username] === password
    ) {
      setAuthenticated(true);
      return true;
    }
    alert("שם משתמש או סיסמא שגויים");
    return false;
  };

  const ProtectedRoute = ({ authenticated, redirectPath = "/", children }) => {
    if (!authenticated) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  const routes = [
    { exact: false, path: "/", element: <Navigate to="/home" /> },
    { exact: false, path: "/home", element: <User />},
    { exact: false, path: "/admin", element: <Navigate to="/admin/login" /> },
    {
      exact: true,
      path: "/admin/login",
      element: (
        <AdminLogin updateAuth={updateAuth} authenticated={authenticated} />
      ),
    },
    {
      exact: true,
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute authenticated={authenticated}>
          <AdminDashboard />
        </ProtectedRoute>
      ),
    },
    {
      exact: true,
      path: "/admin/dashboard/projects",
      element: (
        <ProtectedRoute authenticated={authenticated}>
          <AdminProjects />
        </ProtectedRoute>
      ),
    },
    {
      exact: true,
      path: "/admin/dashboard/reviews",
      element: (
        <ProtectedRoute authenticated={authenticated}>
          <AdminDashboard />
        </ProtectedRoute>
      ),
    },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
    <div className="App">
        <Routes>
          {routes.map((r, index) => {
            return (
              <Route
                key={index}
                exact={r.exact}
                path={r.path}
                element={r.element}
              />
            );
          })}
        </Routes>
        </div>
      </BrowserRouter>
      </QueryClientProvider>    
  );
}

export default App;
