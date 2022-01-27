import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./privateRoute/privateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element="" />
        <Route path="/login" element="" />
        <Route path="/signup" element="" />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/goal"
          element={
            <PrivateRoute>
              <Goal />
            </PrivateRoute>
          }
        />
        <Route
          path="/income"
          element={
            <PrivateRoute>
              <Income />
            </PrivateRoute>
          }
        />
        <Route
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
        />
      </Routes>
    </div>
  );
}

export default App;
