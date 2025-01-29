import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "@/index/homePage"
//import Dashboard from "@/pages/Dashboard"; // futura ruta protegida
//import ProtectedRoute from "@/components/ProtectedRoute"; // Para proteger rutas más adelante

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
