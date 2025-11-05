import { useState, useEffect, useCallback } from 'react';
import { Plus, Edit, Trash2, Loader2, Calendar, LogOut, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';
import { toast } from 'sonner@2.0.3';
import { getCookie, deleteCookie } from '../utils/cookies';

interface Blog {
  id: number;
  titulo_blog: string;
  slug: string;
  contenido: string;
  imagen_card: string | null;
  fecha_publicacion: string | null;
}

interface BlogAdminPageProps {
  onNavigate?: (page: string) => void;
}

interface PaginationData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Blog[];
}

// URL base del API
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '/api/v1/';

export function BlogAdminPage({ onNavigate }: BlogAdminPageProps) {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    titulo_blog: '',
    contenido: '',
    imagen_card: null as File | null,
    fecha_publicacion: '',
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Tamaño de página fijo para admin
  const [pagination, setPagination] = useState<{
    count: number;
    next: string | null;
    previous: string | null;
  }>({
    count: 0,
    next: null,
    previous: null,
  });

  // Obtener token de autenticación
  const getAuthToken = () => {
    return getCookie('access_token');
  };

  // Debounce para la búsqueda
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setCurrentPage(1); // Resetear a la primera página cuando se busca
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Cargar blogs
  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      const token = getAuthToken();

      if (!token) {
        toast.error('No estás autenticado', {
          description: 'Por favor, inicia sesión',
        });
        if (onNavigate) {
          onNavigate('login');
        } else {
          window.history.pushState(null, '', '/login');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
        return;
      }

      const params = new URLSearchParams();
      params.append('page', currentPage.toString());
      params.append('page_size', pageSize.toString());
      
      if (debouncedSearch.trim()) {
        params.append('search', debouncedSearch.trim());
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/blog/blogs/?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      });

      if (response.status === 401) {
        toast.error('Sesión expirada', {
          description: 'Por favor, inicia sesión nuevamente',
        });
        if (onNavigate) {
          onNavigate('login');
        } else {
          window.history.pushState(null, '', '/login');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
        return;
      }

      if (!response.ok) {
        throw new Error('Error al cargar los blogs');
      }

      const data: PaginationData = await response.json();
      setBlogs(data.results || []);
      setPagination({
        count: data.count || 0,
        next: data.next,
        previous: data.previous,
      });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Error al cargar los blogs', {
        description: error instanceof Error ? error.message : 'Error desconocido',
      });
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize, debouncedSearch, onNavigate]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  // Abrir modal para crear nuevo blog
  const handleCreate = () => {
    setSelectedBlog(null);
    setFormData({
      titulo_blog: '',
      contenido: '',
      imagen_card: null,
      fecha_publicacion: '',
    });
    setImagePreview(null);
    setIsDialogOpen(true);
  };

  // Abrir modal para editar blog
  const handleEdit = (blog: Blog) => {
    setSelectedBlog(blog);
    setFormData({
      titulo_blog: blog.titulo_blog,
      contenido: blog.contenido,
      imagen_card: null, // No establecer el archivo, solo mostrar preview
      fecha_publicacion: blog.fecha_publicacion || '',
    });
    // Establecer preview de la imagen existente
    if (blog.imagen_card) {
      const imageUrl = blog.imagen_card.startsWith('http')
        ? blog.imagen_card
        : `${API_BASE_URL}${blog.imagen_card}`;
      setImagePreview(imageUrl);
    } else {
      setImagePreview(null);
    }
    setIsDialogOpen(true);
  };

  // Abrir diálogo de confirmación de eliminación
  const handleDeleteClick = (blog: Blog) => {
    setSelectedBlog(blog);
    setIsDeleteDialogOpen(true);
  };

  // Manejar cambio de archivo de imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validar tipo de archivo
      if (!file.type.startsWith('image/')) {
        toast.error('Por favor, selecciona un archivo de imagen válido');
        return;
      }
      
      // Validar tamaño (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('La imagen no debe superar los 5MB');
        return;
      }

      setFormData({ ...formData, imagen_card: file });
      
      // Crear preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Guardar blog (crear o actualizar)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = getAuthToken();
      if (!token) {
        toast.error('No estás autenticado');
        return;
      }

      const url = selectedBlog
        ? `${API_BASE_URL}/api/v1/blog/blogs/${selectedBlog.slug}/`
        : `${API_BASE_URL}/api/v1/blog/blogs/`;

      const method = selectedBlog ? 'PATCH' : 'POST';

      // Crear FormData para enviar archivos
      const formDataToSend = new FormData();
      formDataToSend.append('titulo_blog', formData.titulo_blog);
      formDataToSend.append('contenido', formData.contenido);
      if (formData.fecha_publicacion) {
        formDataToSend.append('fecha_publicacion', formData.fecha_publicacion);
      }
      
      // Solo agregar imagen si se seleccionó una nueva
      if (formData.imagen_card) {
        formDataToSend.append('imagen_card', formData.imagen_card);
      }

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          // No establecer Content-Type, el navegador lo hará automáticamente con FormData
        },
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || errorData.message || 'Error al guardar el blog');
      }

      toast.success(selectedBlog ? 'Blog actualizado exitosamente' : 'Blog creado exitosamente');
      setIsDialogOpen(false);
      setImagePreview(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error('Error al guardar el blog', {
        description: error instanceof Error ? error.message : 'Error desconocido',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Eliminar blog
  const handleDelete = async () => {
    if (!selectedBlog) return;

    setIsSubmitting(true);

    try {
      const token = getAuthToken();
      if (!token) {
        toast.error('No estás autenticado');
        return;
      }

      const response = await fetch(`${API_BASE_URL}/api/v1/blog/blogs/${selectedBlog.slug}/`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el blog');
      }

      toast.success('Blog eliminado exitosamente');
      setIsDeleteDialogOpen(false);
      setSelectedBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Error al eliminar el blog', {
        description: error instanceof Error ? error.message : 'Error desconocido',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cerrar sesión
  const handleLogout = () => {
    // Eliminar tokens de las cookies
    deleteCookie('access_token');
    deleteCookie('refresh_token');
    
    toast.success('Sesión cerrada exitosamente', {
      description: 'Hasta pronto',
      duration: 3000,
    });
    
    // Redirigir al inicio
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.history.pushState(null, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(pagination.count / pageSize);

  // Formatear fecha para mostrar
  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] pt-20 sm:pt-24 md:pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-['Saira_Semi_Condensed'] text-3xl md:text-4xl text-white mb-2">
              Administración de Blogs
            </h1>
            <p className="text-white/60">
              Gestiona tus blogs desde aquí
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Cerrar Sesión
            </Button>
            <Button
              onClick={handleCreate}
              className="bg-[#C7482C] hover:bg-[#8B4114] text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Blog
            </Button>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="mb-6">
          <div className="relative max-w-md">
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4 z-10" /> */}
            <Input
              type="text"
              placeholder="Buscar blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-[#252525] border-white/10 text-white placeholder:text-white/40 text-sm h-10"
            />
          </div>
        </div>

        {/* Información de resultados */}
        {!loading && pagination.count > 0 && (
          <div className="mb-4">
            <p className="text-white/60 text-sm">
              Mostrando {blogs.length} de {pagination.count} blog{pagination.count !== 1 ? 's' : ''}
              {debouncedSearch && ` para "${debouncedSearch}"`}
            </p>
          </div>
        )}

        {/* Tabla de Blogs */}
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-[#C7482C] mx-auto mb-4" />
              <p className="text-white/70">Cargando blogs...</p>
            </div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-[#252525] border border-white/10 rounded-lg p-12 text-center">
            <p className="text-white/70 text-lg mb-4">No hay blogs disponibles</p>
            <Button
              onClick={handleCreate}
              className="bg-[#C7482C] hover:bg-[#8B4114] text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              Crear tu primer blog
            </Button>
          </div>
        ) : (
          <>
            {blogs.length === 0 && debouncedSearch ? (
              <div className="bg-[#252525] border border-white/10 rounded-lg p-12 text-center">
                <p className="text-white/70 text-lg mb-2">No se encontraron blogs</p>
                <p className="text-white/50 text-sm mb-4">Intenta con otros términos de búsqueda</p>
                <Button
                  onClick={() => setSearchTerm('')}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Limpiar búsqueda
                </Button>
              </div>
            ) : (
              <>
                <div className="bg-[#252525] border border-white/10 rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10">
                        <TableHead className="text-white">ID</TableHead>
                        <TableHead className="text-white">Título</TableHead>
                        <TableHead className="text-white">Fecha de Publicación</TableHead>
                        <TableHead className="text-white">Imagen</TableHead>
                        <TableHead className="text-white text-right">Acciones</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {blogs.map((blog) => (
                        <TableRow key={blog.id} className="border-white/10 hover:bg-white/5">
                          <TableCell className="text-white/70 font-mono text-sm">
                            #{blog.id}
                          </TableCell>
                          <TableCell className="text-white font-medium">
                            {blog.titulo_blog}
                          </TableCell>
                          <TableCell className="text-white/70">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {formatDate(blog.fecha_publicacion)}
                            </div>
                          </TableCell>
                          <TableCell className="text-white/70">
                            {blog.imagen_card ? (
                              <div className="w-16 h-16 rounded overflow-hidden border border-white/10">
                                <img
                                  src={blog.imagen_card.startsWith('http') 
                                    ? blog.imagen_card 
                                    : `${API_BASE_URL}${blog.imagen_card}`}
                                  alt={blog.titulo_blog}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    // Si falla la carga, mostrar placeholder
                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=Error';
                                  }}
                                />
                              </div>
                            ) : (
                              <span className="text-white/40">Sin imagen</span>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex items-center justify-end gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEdit(blog)}
                                className="border-white/20 text-white hover:bg-white/10"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDeleteClick(blog)}
                                className="border-red-500/50 text-red-500 hover:bg-red-500/10"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Paginación */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-6">
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
          </>
        )}

        {/* Modal de Crear/Editar Blog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] bg-[#252525] border-white/10 flex flex-col">
            <DialogHeader className="shrink-0">
              <DialogTitle className="text-white text-xl">
                {selectedBlog ? 'Editar Blog' : 'Nuevo Blog'}
              </DialogTitle>
              <DialogDescription className="text-white/60">
                {selectedBlog ? 'Modifica los datos del blog' : 'Completa los datos para crear un nuevo blog'}
              </DialogDescription>
            </DialogHeader>
            <div className="overflow-y-auto flex-1 pr-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="titulo_blog" className="text-white">
                    Título del Blog *
                  </Label>
                  <Input
                    id="titulo_blog"
                    value={formData.titulo_blog}
                    onChange={(e) =>
                      setFormData({ ...formData, titulo_blog: e.target.value })
                    }
                    className="bg-[#1C1C1C] border-white/10 text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imagen_card" className="text-white">
                    Imagen del Card
                  </Label>
                  <Input
                    id="imagen_card"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="bg-[#1C1C1C] border-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#C7482C] file:text-white hover:file:bg-[#8B4114] file:cursor-pointer cursor-pointer"
                    disabled={isSubmitting}
                  />
                  {imagePreview && (
                    <div className="mt-4">
                      <p className="text-white/60 text-sm mb-2">Vista previa:</p>
                      <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-white/10">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setImagePreview(null);
                            setFormData({ ...formData, imagen_card: null });
                            // Resetear el input file
                            const fileInput = document.getElementById('imagen_card') as HTMLInputElement;
                            if (fileInput) {
                              fileInput.value = '';
                            }
                          }}
                          className="absolute top-0 right-0 bg-red-600 hover:bg-red-700 text-white rounded-full p-0.5"
                          disabled={isSubmitting}
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  )}
                  <p className="text-white/60 text-sm">
                    Formatos aceptados: JPG, PNG, GIF. Tamaño máximo: 5MB
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fecha_publicacion" className="text-white">
                    Fecha de Publicación
                  </Label>
                  <Input
                    id="fecha_publicacion"
                    type="date"
                    value={formData.fecha_publicacion}
                    onChange={(e) =>
                      setFormData({ ...formData, fecha_publicacion: e.target.value })
                    }
                    className="bg-[#1C1C1C] border-white/10 text-white"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contenido" className="text-white">
                    Contenido *
                  </Label>
                  <Textarea
                    id="contenido"
                    value={formData.contenido}
                    onChange={(e) =>
                      setFormData({ ...formData, contenido: e.target.value })
                    }
                    className="bg-[#1C1C1C] border-white/10 text-white min-h-[300px] max-h-[400px] overflow-y-auto resize-y w-full"
                    placeholder="Escribe el contenido del blog aquí. Puedes usar HTML para formatear el texto."
                    required
                    disabled={isSubmitting}
                    style={{ 
                      wordWrap: 'break-word', 
                      overflowWrap: 'break-word',
                      whiteSpace: 'pre-wrap',
                      fieldSizing: 'fixed'
                    }}
                  />
                  <p className="text-white/60 text-sm">
                    Puedes usar HTML para formatear el contenido
                  </p>
                </div>

                <DialogFooter className="shrink-0 pt-4 border-t border-white/10">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                    disabled={isSubmitting}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#C7482C] hover:bg-[#8B4114] text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Guardando...
                      </>
                    ) : (
                      selectedBlog ? 'Actualizar' : 'Crear'
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </div>
          </DialogContent>
        </Dialog>

        {/* Diálogo de Confirmación de Eliminación */}
        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent className="bg-[#252525] border-white/10">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">
                ¿Eliminar blog?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-white/70">
                Esta acción no se puede deshacer. Se eliminará permanentemente el blog
                "{selectedBlog?.titulo_blog}".
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel
                onClick={() => setIsDeleteDialogOpen(false)}
                disabled={isSubmitting}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDelete}
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Eliminando...
                  </>
                ) : (
                  'Eliminar'
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

