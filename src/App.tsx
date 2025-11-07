import { useState, useEffect } from "react";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PartnersPage } from "./pages/PartnersPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogsPage } from "./pages/BlogsPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { LoginPage } from "./pages/LoginPage";
import { BlogAdminPage } from "./pages/BlogAdminPage";
import { DesignSystemPage } from "./pages/DesignSystemPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Función para obtener la página actual desde el pathname
  const getPageFromPath = (pathname: string): string => {
    // Remover el slash inicial y obtener el primer segmento
    const path = pathname.replace(/^\/+/, '').split('/')[0] || 'home';
    
    // Si es una ruta de blog (blog/slug), devolver el path completo
    if (pathname.startsWith('/blog/')) {
      return pathname.slice(1); // Remover el slash inicial
    }
    
    return path;
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      setCurrentPage(page);
    };

    window.addEventListener("popstate", handlePopState);

    // Initialize from URL pathname
    const initialPage = getPageFromPath(window.location.pathname);
    setCurrentPage(initialPage);

    return () =>
      window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Si es 'home', usar '/' como ruta, de lo contrario usar '/page'
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, "", path);
  };

  const renderPage = () => {
    // Verificar si es una ruta de blog detalle (formato: blog/slug)
    if (currentPage.startsWith('blog/')) {
      const slug = currentPage.split('blog/')[1];
      return <BlogDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    switch (currentPage) {
      case "inicio":
        return <HomePage onNavigate={handleNavigate} />;
      case "nosotros":
        return <AboutPage onNavigate={handleNavigate} />;
      case "servicios":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "socios-aliados":
        return <PartnersPage onNavigate={handleNavigate} />;
      case "blogs":
        return <BlogsPage onNavigate={handleNavigate} />;
      case "contacto":
        return <ContactPage onNavigate={handleNavigate} />;
      case "login":
        return <LoginPage onNavigate={handleNavigate} />;
      case "panel-admin":
        return <BlogAdminPage onNavigate={handleNavigate} />;
      case "design-system":
        return <DesignSystemPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      {currentPage !== 'login' && currentPage !== 'panel-admin' && (
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />
      )}
      <main>{renderPage()}</main>
      {currentPage !== 'login' && currentPage !== 'panel-admin' && (
        <Footer onNavigate={handleNavigate} />
      )}
      <Toaster
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#252525",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#FFFFFF",
          },
          className: "toast-custom",
        }}
      />
    </div>
  );
}