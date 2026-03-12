class ProductCard extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
  
      const nombre      = this.getAttribute("nombre");
      const precio      = this.getAttribute("precio");
      const descripcion = this.getAttribute("descripcion");
      const icono       = this.getAttribute("icono") || "📦";
  
      shadow.innerHTML = `
        <style>
          :host {
            display: block;
          }
  
          .card {
            background: #0f0f0f;
            border: 1px solid #2a2a2a;
            border-radius: 4px;
            padding: 2rem;
            transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
  
          .card::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 3px; height: 0;
            background: #e8ff47;
            transition: height 0.3s ease;
          }
  
          .card:hover::before {
            height: 100%;
          }
  
          .card:hover {
            transform: translateY(-4px);
            border-color: #e8ff47;
            box-shadow: 0 12px 40px rgba(232, 255, 71, 0.08);
          }
  
          .card-icon {
            font-size: 2.5rem;
            margin-bottom: 1.2rem;
            display: block;
          }
  
          .card-nombre {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1.2rem;
            font-weight: 700;
            color: #ffffff;
            margin: 0 0 0.5rem 0;
            letter-spacing: 0.02em;
          }
  
          .card-descripcion {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 0.88rem;
            color: #888;
            margin: 0 0 1.5rem 0;
            line-height: 1.6;
            font-weight: 300;
          }
  
          .card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
  
          .card-precio {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 1.4rem;
            font-weight: 800;
            color: #e8ff47;
          }
  
          .btn-agregar {
            background: transparent;
            border: 1px solid #333;
            color: #888;
            padding: 0.4rem 1rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 0.8rem;
            border-radius: 2px;
            cursor: pointer;
            transition: all 0.2s ease;
            letter-spacing: 0.05em;
          }
  
          .btn-agregar:hover {
            background: #e8ff47;
            border-color: #e8ff47;
            color: #000;
          }
        </style>
  
        <div class="card">
          <span class="card-icon">${icono}</span>
          <h3 class="card-nombre">${nombre}</h3>
          <p class="card-descripcion">${descripcion}</p>
          <div class="card-footer">
            <span class="card-precio">$${precio}</span>
            <button class="btn-agregar">+ Agregar</button>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("product-card", ProductCard);