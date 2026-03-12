const productos = [
    { nombre: "Laptop Pro X",     precio: "1,299", descripcion: "Procesador Intel i9, 32GB RAM, SSD 1TB. Ideal para desarrollo y diseño profesional.", icono: "💻" },
    { nombre: "Mouse Ergonómico", precio: "89",     descripcion: "Diseño ergonómico inalámbrico, 3200 DPI, batería de 60 días. Silencioso y preciso.",  icono: "🖱️" },
    { nombre: "Monitor 4K UHD",   precio: "649",    descripcion: "Pantalla IPS 27\", 144Hz, HDR400. Colores precisos para trabajo creativo.",            icono: "🖥️" },
    { nombre: "Teclado Mecánico", precio: "159",    descripcion: "Switches Cherry MX Red, retroiluminación RGB, formato TKL. Respuesta táctil perfecta.",icono: "⌨️" },
    { nombre: "Webcam 4K",        precio: "199",    descripcion: "Resolución 4K a 30fps, micrófono estéreo integrado, compatible con todas las plataformas.", icono: "📷" },
    { nombre: "Hub USB-C 10en1",  precio: "79",     descripcion: "HDMI 4K, USB 3.0, SD/microSD, Ethernet, carga 100W. Un solo cable para todo.",        icono: "🔌" },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    const template   = document.getElementById("product-template");
    const contenedor = document.getElementById("catalogo");
  
    productos.forEach((p, i) => {
      const clon = template.content.cloneNode(true);
      const card = clon.querySelector("product-card");
      card.setAttribute("nombre",      p.nombre);
      card.setAttribute("precio",      p.precio);
      card.setAttribute("descripcion", p.descripcion);
      card.setAttribute("icono",       p.icono);
      card.style.animationDelay = `${i * 0.08}s`;
      contenedor.appendChild(clon);
    });
  });