import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Products/products";
import Client from "./pages/Client Members/client";
import Dashboard from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/SignUp";
import ProtectedRoutes from "./components/Protected Routes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <div className="Appmenu">
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route path="/clients" element={<Client />} />
          <Route path="/products" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
