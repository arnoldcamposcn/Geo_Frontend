import { useState, useEffect, useCallback } from 'react';
import { BlogCard } from '../components/BlogCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface Blog {
  id: number;
  titulo_blog: string;
  slug: string;
  contenido: string;
  imagen_card: string | null;
  fecha_publicacion: string | null;
}

interface PaginationData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Blog[];
}

interface BlogsPageProps {
  onNavigate?: (page: string) => void;
}

// URL base del API - puedes cambiarla según tu configuración
// Para producción, crea un archivo .env con VITE_API_BASE_URL=http://tu-backend-url
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:8000';

export function BlogsPage({ onNavigate }: BlogsPageProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6); // Tamaño de página fijo
  const [pagination, setPagination] = useState<{
    count: number;
    next: string | null;
    previous: string | null;
  }>({
    count: 0,
    next: null,
    previous: null,
  });

  // Debounce para la búsqueda
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1); // Resetear a la primera página cuando se busca
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const params = new URLSearchParams();
      params.append('page', currentPage.toString());
      params.append('page_size', pageSize.toString());
      
      if (debouncedSearch.trim()) {
        params.append('search', debouncedSearch.trim());
      }
      
      const response = await fetch(`${API_BASE_URL}/api/v1/blog/blogs/?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error(`Error al cargar blogs: ${response.status}`);
      }

      const data: PaginationData = await response.json();
      
      setBlogs(data.results || []);
      setPagination({
        count: data.count || 0,
        next: data.next,
        previous: data.previous,
      });
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(err instanceof Error ? err.message : 'Error desconocido al cargar los blogs');
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, debouncedSearch]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(pagination.count / pageSize);

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nfGVufDF8fHx8fDE3NjE1Nzc2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Blogs"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#C7482C]/65"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="font-['Saira_Semi_Condensed'] text-5xl md:text-6xl text-white mb-6">
              Nuestro Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Descubre las últimas novedades, tendencias y conocimientos sobre minería e innovación tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Barra de búsqueda */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Input
                type="text"
                placeholder="Buscar blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-[#252525] border-white/10 text-white placeholder:text-white/40"
              />
            </div>
          </div>

          {/* Información de resultados */}
          {!loading && pagination.count > 0 && (
            <div className="mb-6">
              <p className="text-white/60 text-sm">
                Mostrando {blogs.length} de {pagination.count} blog{pagination.count !== 1 ? 's' : ''}
                {debouncedSearch && ` para "${debouncedSearch}"`}
              </p>
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C7482C] mx-auto mb-4"></div>
                <p className="text-white/70">Cargando blogs...</p>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="text-[#C7482C] text-6xl mb-4">⚠️</div>
                <p className="text-white text-xl mb-2">Error al cargar los blogs</p>
                <p className="text-white/60">{error}</p>
                <button
                  onClick={() => fetchBlogs()}
                  className="mt-4 px-6 py-2 bg-[#C7482C] text-white rounded-md hover:bg-[#8B4114] transition-colors"
                >
                  Intentar de nuevo
                </button>
              </div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <p className="text-white/70 text-xl mb-2">
                  {debouncedSearch 
                    ? `No se encontraron blogs para "${debouncedSearch}"` 
                    : 'No hay blogs disponibles en este momento.'}
                </p>
                {debouncedSearch && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 text-[#C7482C] hover:text-[#8B4114] transition-colors"
                  >
                    Limpiar búsqueda
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {blogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    id={blog.id}
                    titulo={blog.titulo_blog}
                    imagen={blog.imagen_card}
                    slug={blog.slug}
                    fechaPublicacion={blog.fecha_publicacion || undefined}
                  />
                ))}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!pagination.previous || currentPage === 1}
                    className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Anterior
                  </Button>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 text-sm">
                      Página {currentPage} de {totalPages}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!pagination.next || currentPage === totalPages}
                    className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Siguiente
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

