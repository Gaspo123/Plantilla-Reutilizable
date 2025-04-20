// src/components/ProductList.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Importamos PropTypes
import ProductCard from './ProductCard';
import '../styles/productList.css'; // Considera usar CSS Modules si es posible

const ProductList = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="no-products">
        <h2>No hay productos disponibles.</h2>
      </div>
    );
  }

  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

// Definir el tipo de datos de las propiedades para asegurarnos de que los datos sean correctos
ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nombre: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      imagen: PropTypes.string.isRequired, // Si tienes una imagen, añádela aquí
      // Agrega más propiedades según el modelo de datos
    })
  ).isRequired,
};

export default ProductList;
