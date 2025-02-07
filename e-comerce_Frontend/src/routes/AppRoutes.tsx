import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/index/homePage"
import LoginForm from "@/login/loginForm"
import CreateUserForm from "@/login/createUserForm";
//import Dashboard from "@/pages/Dashboard"; // futura ruta protegida
//import ProtectedRoute from "@/components/ProtectedRoute"; // Para proteger rutas más adelante

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<CreateUserForm/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
