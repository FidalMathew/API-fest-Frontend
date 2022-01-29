import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, Dashboard, Income } from "./pages";
import { PrivateRoute } from "./privateRoute/privateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/income"
          element={
            <PrivateRoute>
              <Income />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <Transaction />
            </PrivateRoute>
          }
        />
        <Route
          path="/charts"
          element={
            <PrivateRoute>
              <Charts />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
