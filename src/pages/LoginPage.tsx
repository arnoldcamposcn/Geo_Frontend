import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner@2.0.3';
import { setCookie } from '../utils/cookies';

interface LoginPageProps {
  onNavigate?: (page: string) => void;
}

// URL base del API
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '/api/v1/';

export function LoginPage({ onNavigate }: LoginPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Por favor, completa todos los campos correctamente');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}users/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || data.message || 'Error al iniciar sesión');
      }

      // Guardar tokens en cookies
      if (data.access) {
        setCookie('access_token', data.access, 7); // 7 días
      }
      if (data.refresh) {
        setCookie('refresh_token', data.refresh, 30); // 30 días
      }

      toast.success('¡Inicio de sesión exitoso!', {
        description: `Bienvenido ${data.usuario?.email || ''}`,
        duration: 3000,
      });

      // Limpiar formulario
      setFormData({ email: '', password: '' });
      setErrors({});

      // Redirigir al panel de administración después del login
      if (onNavigate) {
        onNavigate('panel-admin');
      } else {
        window.history.pushState(null, '', '/panel-admin');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } catch (error) {
      console.error('Error en login:', error);
      toast.error('Error al iniciar sesión', {
        description: error instanceof Error ? error.message : 'Credenciales incorrectas',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="bg-[#252525] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Título */}
          <div className="text-center mb-6">
            <h1 className="font-['Saira_Semi_Condensed'] text-2xl md:text-3xl text-white mb-2">
              Iniciar Sesión
            </h1>
            <p className="text-white/60 text-sm">
              Ingresa tus credenciales para acceder
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={`h-11 ${errors.email ? 'border-red-500 focus-visible:ring-red-500/20' : 'border-white/10'}`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white text-sm font-medium">
                Contraseña
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className={`h-11 ${errors.password ? 'border-red-500 focus-visible:ring-red-500/20' : 'border-white/10'}`}
                disabled={isSubmitting}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Botón Submit */}
            <Button
              type="submit"
              className="w-full bg-[#C7482C] hover:bg-[#8B4114] text-white h-11 text-base font-semibold mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                'Iniciar Sesión'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

