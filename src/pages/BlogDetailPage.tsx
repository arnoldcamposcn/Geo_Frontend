import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';

interface BlogDetail {
  id: number;
  titulo_blog: string;
  slug: string;
  contenido: string;
  imagen_card: string | null;
  fecha_publicacion: string | null;
}

interface BlogDetailPageProps {
  slug?: string;
  onNavigate?: (page: string) => void;
}

// URL base del API - debe coincidir con BlogsPage
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '/api/v1/';

export function BlogDetailPage({ slug, onNavigate }: BlogDetailPageProps) {
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener slug de la URL pathname si no se proporciona como prop
  useEffect(() => {
    const pathname = window.location.pathname;
    const slugFromPath = pathname.startsWith('/blog/')
      ? pathname.split('/blog/')[1]?.split('/')[0]
      : null;
    
    const slugToUse = slug || slugFromPath;
    
    if (slugToUse) {
      fetchBlog(slugToUse);
    } else {
      setError('Slug no proporcionado');
      setLoading(false);
    }
  }, [slug]);

  const fetchBlog = async (blogSlug: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}blog/blogs/${blogSlug}/`);
      
      if (!response.ok) {
        throw new Error(`Error al cargar el blog: ${response.status}`);
      }

      const data = await response.json();
      setBlog(data);
    } catch (err) {
      console.error('Error fetching blog:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido al cargar el blog');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (onNavigate) {
      onNavigate('blogs');
    } else {
      window.history.pushState(null, '', '/blogs');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  // Formatear fecha si existe
  const formatearFecha = (fecha: string | null) => {
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] pt-20 sm:pt-24 md:pt-28">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C7482C] mx-auto mb-4"></div>
            <p className="text-white/70">Cargando blog...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] pt-20 sm:pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Button
            onClick={handleBack}
            variant="outline"
            className="mb-8 text-white border-white/20 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 cursor-pointer" size={20} />
            Volver a blogs
          </Button>
          <div className="text-center">
            <div className="text-[#C7482C] text-6xl mb-4">⚠️</div>
            <p className="text-white text-xl mb-2">Error al cargar el blog</p>
            <p className="text-white/60 mb-6">{error || 'Blog no encontrado'}</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-[#C7482C] hover:bg-[#8B4114]"
            >
              Intentar de nuevo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20 sm:pt-24 md:pt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Botón Volver */}
        <Button
          onClick={handleBack}
          variant="outline"
          className="mb-8 text-white border-white/20 hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 cursor-pointer" size={20} />
          Volver a blogs
        </Button>

        {/* Imagen Principal */}
        <h1 className="font-['Saira_Semi_Condensed'] text-4xl md:text-5xl text-white mb-6">
          {blog.titulo_blog}
        </h1>

        {blog.imagen_card && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={blog.imagen_card}
              alt={blog.titulo_blog}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Título */}
        

        {/* Fecha */}
        {blog.fecha_publicacion && (
          <div className="flex items-center gap-2 text-white/60 mb-8">
            <Calendar className="w-5 h-5" />
            <span>{formatearFecha(blog.fecha_publicacion)}</span>
          </div>
        )}
        {/* Contenido */}
        <div 
          className="blog-content text-white/90 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.contenido }}
        />
       
      </div>
    </div>
  );
}

