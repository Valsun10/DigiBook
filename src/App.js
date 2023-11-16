import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import DetailBookPage from "./components/DetailBookPage/DetailBookPage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import CreateBook from "./components/CreateBook/CreateBook";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./guards/RequireAuth";
import RequireGuest from "./guards/RequireGuest";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="details/:id"
          element={
            <RequireAuth>
              <DetailBookPage />
            </RequireAuth>
          }
        />
        <Route
          path="settings"
          element={
            <RequireAuth>
              <SettingsPage />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <RequireGuest>
              <LoginPage />
            </RequireGuest>
          }
        />
        <Route
          path="/register"
          element={
            <RequireGuest>
              <RegisterPage />
            </RequireGuest>
          }
        />
        <Route
          path="/create"
          element={
            <RequireAuth>
              <CreateBook />
            </RequireAuth>
          }
        />
      </Routes>
      <ToastContainer position="bottom-center" />
    </main>
  );
}

export default App;
