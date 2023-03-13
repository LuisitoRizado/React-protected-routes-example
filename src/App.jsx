import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Admins, Analytics, Dashboard, Home, Landing } from "./pages";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    //request done
    setUser({
      id: 1,
      name: "John",
      permissions:['analize'],
      roles:[]
    });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <BrowserRouter>
      <Navbar />
      {user ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => login()}>Login</button>
      )}
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />

        <Route element={<ProtectedRoute isAllowed={user ? true:false} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route
          path="/analytics"
          element={
            <ProtectedRoute isAllowed={!!user && user.permissions.includes('analize')}
            redirectTo='/home'>              
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route path="/admin" element={<ProtectedRoute isAllowed={!!user && user.roles.includes('admin')}>
          <Admins />
        </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
