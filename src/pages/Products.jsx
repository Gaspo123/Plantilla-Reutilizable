import React from "react";
import ProductCard from "../components/ui/ProductCard.jsx";

// 🧪 Productos simulados (puedes reemplazar con fetch a una API más adelante)
const products = [
  {
    id: "1",
    name: "Zapatillas Urbanas",
    description: "Diseñadas para confort y estilo diario.",
    image: "/images/zapatillas.jpg",
    price: 15000,
    onSalePrice: 12000,
  },
  {
    id: "2",
    name: "Campera Deportiva",
    description: "Ideal para entrenamientos y salidas.",
    image: "/images/campera.jpg",
    price: 18000,
  },
  {
    id: "3",
    name: "Mochila Antirrobo",
    description: "Con cierre oculto y puerto USB.",
    image: "/images/mochila.jpg",
    price: 22000,
    onSalePrice: 19500,
  },
  // Agrega más si querés
];

const Products = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        🛍️ Catálogo de Productos
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
