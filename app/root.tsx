// Importar componentes y funciones necesarios desde react-router
import {
  isRouteErrorResponse, // Función para verificar si un error es una respuesta de ruta
  Links, // Componente para renderizar los enlaces de los metadatos de las rutas
  Meta, // Componente para renderizar los metadatos de las rutas
  Outlet, // Componente que renderiza el contenido de la ruta activa
  Scripts, // Componente para renderizar scripts adicionales
  ScrollRestoration, // Componente para restaurar el scroll al navegar entre rutas
} from "react-router";

// Importar el tipo Route desde el archivo de tipos
import type { Route } from "./+types/root";

// Importar el archivo de estilos CSS global
import "./app.css";

// Importar componentes personalizados
import Header from "./components/Header";
import Footer from "./components/Footer";

// Función que devuelve los enlaces y metadatos para preconectar a fuentes
export const links: Route.LinksFunction = () => [
  // Preconectar a Google Fonts para mejorar el rendimiento de la carga de fuentes
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Componente Layout que define la estructura general de la página
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" /> {/* Meta tag para el charset UTF-8 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" /> {/* Meta tag para viewport responsivo */}
        <Meta /> {/* Componente Meta para renderizar los metadatos de las rutas */}
        <Links /> {/* Componente Links para renderizar los enlaces de los metadatos de las rutas */}
      </head>
      <body>
        <Header /> {/* Componente Header para la barra de navegación */}
        <main className="container m-auto p-4">
          {children} {/* Contenido dinámico de la ruta activa */}
        </main>
        <ScrollRestoration /> {/* Componente para restaurar el scroll al navegar entre rutas */}
        <Scripts /> {/* Componente Scripts para renderizar scripts adicionales */}
        <Footer /> {/* Componente Footer para el pie de página */}
      </body>
    </html>
  );
}

// Componente App que renderiza el contenido de la ruta activa
export default function App() {
  return <Outlet />; {/* Componente Outlet para renderizar el contenido de la ruta activa */}
}

// Componente ErrorBoundary que maneja errores globales en la aplicación
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // Variables para almacenar el mensaje y detalles del error
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  // Verificar si el error es una respuesta de ruta
  if (isRouteErrorResponse(error)) {
    // Si el error es una respuesta de ruta, ajustar el mensaje y detalles según el estado HTTP
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    // Si el error es una instancia de Error y estamos en modo de desarrollo, mostrar el mensaje y stack trace
    details = error.message;
    stack = error.stack;
  }

  // Renderizar el contenido del error
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1> {/* Mensaje del error */}
      <p>{details}</p> {/* Detalles del error */}
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code> {/* Stack trace del error en modo de desarrollo */}
        </pre>
      )}
    </main>
  );
}