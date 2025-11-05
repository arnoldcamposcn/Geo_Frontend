import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogCardProps {
  id: number;
  titulo: string;
  imagen: string | null;
  slug: string;
  fechaPublicacion?: string;
}

// URL base del API - debe coincidir con BlogsPage
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '/api/v1/';

export function BlogCard({ titulo, imagen, slug, fechaPublicacion }: BlogCardProps) {
  // Construir URL de la imagen completa
  const imagenUrl = imagen 
    ? imagen.startsWith('http') 
      ? imagen 
      : `${API_BASE_URL}${imagen}`
    : 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop';

  // Formatear fecha si existe
  const formatearFecha = (fecha: string | undefined) => {
    if (!fecha) return '';
    try {
      const fechaObj = new Date(fecha);
      return fechaObj.toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return fecha;
    }
  };

  return (
    <div className="group bg-[#252525] border border-white/10 rounded-lg overflow-hidden hover:border-[#C7482C]/50 transition-all duration-300">
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={imagenUrl}
          alt={titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Fecha */}
        {fechaPublicacion && (
          <p className="text-sm text-white/60 mb-3">
            {formatearFecha(fechaPublicacion)}
          </p>
        )}

        {/* Título */}
        <h3 className="font-['Saira_Semi_Condensed'] text-xl text-white mb-4 line-clamp-2 min-h-[3.5rem]">
          {titulo}
        </h3>

        {/* Botón Ver más */}
        <button
          className="group/btn flex items-center gap-2 text-[#C7482C] hover:text-[#C7482C]/80 transition-all duration-300 font-medium w-fit"
          onClick={() => {
            // Navegación al detalle del blog usando rutas reales
            window.history.pushState(null, '', `/blog/${slug}`);
            // Disparar evento popstate para que App.tsx detecte el cambio
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
        >
          <span className="transition-transform duration-300 group-hover/btn:translate-x-1 cursor-pointer">Ver más</span>
          <ArrowRight 
            className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" 
          />
        </button>
      </div>
    </div>
  );
}
