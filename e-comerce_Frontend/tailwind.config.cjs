/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
         // Fondo
         "lightGray": '#F7F7F7', // Fondo general, moderno y limpio
         "white": '#FFFFFF', // Fondo de secciones específicas como tarjetas o productos
         "piel": '#fdebd0',
         // Colores principales
        //  "primary": '#4F46E5', // Azul intenso moderno para botones principales y enlaces
        //  "secondary": '#9333EA', // Morado vibrante para destacar detalles importantes
         "accent": '#14B8A6', // Verde azulado para botones secundarios o acciones específicas
 
         // Texto
         "textDark": '#1F2937', // Negro suave para texto principal
         "textGray": '#6B7280', // Gris para texto secundario
 
         // Alertas y mensajes
         "success": '#22C55E', // Verde para mensajes de éxito
         "warning": '#F59E0B', // Amarillo para advertencias
         "error": '#EF4444', // Rojo para errores
 
         // Bordes y líneas
         "borderGray": '#E5E7EB', // Gris claro para separar elementos

        "primary": "#1F2937", // Color sólido para el navbar al hacer scroll
        "secondary": "#4F46E5", // Color para hover en los enlaces
      },
      fontFamily:{
        sans: ['Inter', 'sans-serif'], // Texto principal
        poppins: ['Poppins', 'sans-serif'], // Encabezados o destacados
      }
    },
    screens:{
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
};

