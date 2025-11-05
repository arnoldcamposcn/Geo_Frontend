# Flujo de Navegación - GeoPeruvian Website

## Resumen General
Este documento describe todos los botones y sus flujos de navegación en el sitio web de GeoPeruvian.

## Estructura de Navegación

### 1. HERO SECTION (/)
**Ubicación:** Página de inicio, sección superior

#### Botón: "Explora nuestras soluciones"
- **Acción:** Navega a la página de Servicios
- **Destino:** `/services` (ServicesPage)
- **Comportamiento:** Scroll suave hacia arriba + cambio de página
- **Implementación:** `onClick={() => onNavigate('services')}`

---

### 2. HEADER (Navegación Global)
**Ubicación:** Fijo en la parte superior de todas las páginas

#### Botones de Navegación:
1. **Logo / GeoPeruvian**
   - **Acción:** Navega a Home
   - **Destino:** `/home` (HomePage)

2. **"Inicio"**
   - **Acción:** Navega a Home
   - **Destino:** `/home` (HomePage)

3. **"Nosotros"**
   - **Acción:** Navega a About
   - **Destino:** `/about` (AboutPage)

4. **"Servicios"**
   - **Acción:** Navega a Services
   - **Destino:** `/services` (ServicesPage)

5. **"Socios Aliados"**
   - **Acción:** Navega a Partners
   - **Destino:** `/partners` (PartnersPage)

6. **"Contacto"** (Link de navegación)
   - **Acción:** Navega a Contact
   - **Destino:** `/contact` (ContactPage)

7. **"Contactar ahora"** (Botón CTA)
   - **Acción:** Navega a Contact
   - **Destino:** `/contact` (ContactPage)
   - **Estilo:** Botón destacado con color primario #C7482C

---

### 3. ABOUT SECTION (Nosotros)
**Ubicación:** Página de inicio, después del Hero

#### Botón: "Conoce más sobre nosotros"
- **Acción:** Navega a la página completa About
- **Destino:** `/about` (AboutPage)
- **Tipo:** Botón outline
- **Implementación:** `onClick={() => onNavigate('about')}`

---

### 4. SERVICES SECTION (Servicios)
**Ubicación:** Página de inicio, sección de servicios

#### Botones en Cards de Servicios (10 servicios):
Cada card incluye:
- **Botón:** "Ver detalles" con ícono ArrowRight
- **Acción:** Navega a ServicesPage
- **Destino:** `/services` (ServicesPage)
- **Comportamiento:** Hover en toda la card también activa navegación
- **Implementación:** `onClick={() => onNavigate('services')}`

**Lista de Servicios:**
1. Gestión Integral de Datos Mineros
2. Exploración y Desarrollo de Prospectos
3. Modelamiento y Estimación de Reservas
4. Planeamiento Estratégico Minero
5. Geometalurgia y Mine-to-Mill
6. IA y Digitalización Minería 4.0
7. Optimización Operacional
8. Evaluación Técnico-Económica
9. Capacitación y Soporte Técnico
10. Asesoría en Riesgos y Estrategia

#### Botón CTA: "Explora todos los servicios"
- **Acción:** Navega a ServicesPage completa
- **Destino:** `/services` (ServicesPage)
- **Tipo:** Botón destacado con gradiente
- **Implementación:** `onClick={() => onNavigate('services')}`

---

### 5. PARTNERS SECTION (Socios Aliados)
**Ubicación:** Página de inicio, sección de socios

#### Botones "Contactar" (3 botones, uno por país):
Hay tres cards con información de contacto para:
1. **Perú**
   - Email: contacto.peru@geoperuviangroup.com
   - Teléfono: (+51-01) 4891892 / (+51) 943049976
   - Ubicación: Santiago de Surco – Lima

2. **Chile**
   - Email: contacto.chile@geoperuviangroup.com
   - Teléfono: (+56-02) 26713453 / (+56) 944268834
   - Ubicación: Las Condes – Santiago

3. **Argentina**
   - Email: contacto.argentina@geoperuviangroup.com
   - Teléfono: (+54-011) 49023571 / (+54) 1157938164
   - Ubicación: Puerto Madero – Buenos Aires

**Cada botón "Contactar":**
- **Acción:** Navega a la página de Contacto
- **Destino:** `/contact` (ContactPage)
- **Comportamiento:** 
  1. Scroll suave hacia arriba
  2. Delay de 300ms
  3. Navegación a ContactPage
- **Implementación:** Event listener en `[data-name="SlotClone"]`
- **Estilo:** Botón con borde, hover effect cambia a color primario

---

### 6. CONTACT SECTION (Contacto)
**Ubicación:** Página de inicio y página dedicada

#### Botón: "Enviar mensaje"
- **Acción:** Submit del formulario de contacto
- **Tipo:** Submit button
- **Comportamiento:**
  1. Validación de campos (nombre, email, empresa, mensaje)
  2. Animación de loading (spinner)
  3. Simulación de envío (1.5 segundos)
  4. Toast notification de éxito
  5. Reset del formulario
- **Estados:** 
  - Normal: "Enviar mensaje" con ícono Send
  - Loading: "Enviando..." con spinner
  - Disabled durante envío
- **Implementación:** `<form onSubmit={handleSubmit}>`

**Información de Contacto (no son botones, solo información):**
- Email: contacto.peru@geoperuviangroup.com
- Teléfono: (+51-01) 4891892
- Oficina: Santiago de Surco, Lima, Perú

---

### 7. FOOTER (Pie de página)
**Ubicación:** Parte inferior de todas las páginas

#### Logo
- **Acción:** Navega a Home
- **Destino:** `/home` (HomePage)

#### Sección "Navegación":
1. **"Inicio"** → `/home`
2. **"Nosotros"** → `/about`
3. **"Servicios"** → `/services`
4. **"Socios Aliados"** → `/partners`

#### Sección "Contacto":
1. **"Contacto"** → `/contact`
2. **"Soporte"** → `/contact`

#### Redes Sociales (actualmente enlaces placeholder):
- LinkedIn (href="#")
- Twitter (href="#")
- Facebook (href="#")
- Email (href="#")

#### Enlaces Legales (actualmente enlaces placeholder):
- Política de Privacidad (href="#")
- Términos de Servicio (href="#")
- Política de Cookies (href="#")

---

## Comportamientos Globales

### Navegación
- **Método:** Single Page Application (SPA) con hash routing
- **URL Format:** `#page` (ejemplo: `#services`, `#contact`)
- **Scroll:** Automático hacia arriba en cada navegación
- **Transición:** Suave con `scrollTo({ top: 0, behavior: 'smooth' })`
- **Historia:** Soporta botones back/forward del navegador

### Animaciones
- **Fade In:** Opacity 0 → 1 al entrar
- **Slide Up:** translateY(20-30px) → 0
- **Duración:** 0.6-0.8 segundos
- **Stagger:** 0.1-0.2 segundos entre elementos
- **Viewport:** Activación al estar 100px antes de entrar al viewport

### Estados Visuales
- **Hover Buttons:** 
  - Scale 1.05
  - Cambio de color de fondo
  - Iconos con translateX(1)
  
- **Active/Pressed:**
  - Scale 0.95
  
- **Current Page:**
  - Color primario #C7482C
  - Indicador visual en navegación

---

## Páginas Internas

### AboutPage (`/about`)
- Versión expandida de la sección About
- Incluye historia, equipo, metodología
- Header y Footer con navegación completa

### ServicesPage (`/services`)
- Detalle completo de los 10 servicios
- Puede incluir casos de estudio
- CTAs para contactar

### PartnersPage (`/partners`)
- Información detallada de socios por región
- Casos de éxito
- Botones de contacto por región

### ContactPage (`/contact`)
- Formulario de contacto expandido
- Mapa (potencial)
- Información de oficinas en las 3 regiones

---

## Notas de Implementación

### Dependencias
- `motion/react` para animaciones
- Hash-based routing (no react-router)
- Estado global en App.tsx con useState

### Funciones Clave
```typescript
// Función principal de navegación
const handleNavigate = (page: string) => {
  setCurrentPage(page);
  window.history.pushState(null, '', `#${page}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Prop drilling desde App.tsx → HomePage → Components
onNavigate={handleNavigate}
```

### Event Handlers Especiales
- **Partners Contact Buttons:** Usa event listeners en elementos con `data-name="SlotClone"`
- **Form Submit:** Previene default, maneja validación, muestra toast
- **Mobile Menu:** Toggle state, cierra automáticamente al navegar

---

## Testing de Navegación

### Checklist
- [ ] Hero → Services
- [ ] Header links (todos)
- [ ] Header CTA → Contact
- [ ] About → About Page
- [ ] Service cards → Services Page
- [ ] Services CTA → Services Page
- [ ] Partners buttons → Contact (x3)
- [ ] Contact form submit
- [ ] Footer links (todos)
- [ ] Footer logo → Home
- [ ] Browser back/forward
- [ ] Mobile menu navigation
- [ ] URL hash persistence
- [ ] Scroll to top en navegación

---

## Estado Actual
✅ **Implementado:**
- Hero navigation
- Header navigation completa
- About navigation
- Services navigation
- Partners contact buttons
- Footer navigation
- Contact form submit
- Browser history support

🎨 **Animaciones:**
- Fade in/out
- Slide up
- Hover effects
- Stagger children
- Loading states

📱 **Responsive:**
- Mobile menu
- Touch interactions
- Viewport-based animations
