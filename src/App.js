import "./App.css";
import { Routes, Route } from "react-router-dom";
import Update from "./pages/Update Products/update";
import Product from "./pages/Products/products";
import Team from "./pages/Team Members/team";
import Client from "./pages/Client Members/client";
import Dashboard from "./pages/Dashboard/dashboard";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <div className="Appmenu">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/products" element={<Product />} />
          <Route path="/produts/:id" element={<Update />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
