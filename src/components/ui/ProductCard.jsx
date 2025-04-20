import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import PropTypes from 'prop-types';

// Componente ProductCard
const ProductCard = ({ name, description, price, onSalePrice, image, onAdd }) => {
  // Imagen por defecto si no hay una imagen válida
  const defaultImage = '/path/to/default-image.jpg'; // Agrega tu imagen por defecto

  return (
    <Card sx={{ maxWidth: 300, borderRadius: 4, boxShadow: 3 }}>
      {/* Si no hay imagen, se muestra la imagen por defecto */}
      <CardMedia
        component="img"
        height="180"
        image={image || defaultImage}
        alt={name || 'Producto sin nombre'}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>

        {onSalePrice ? (
          <div>
            <Typography variant="body1" color="error" sx={{ fontWeight: 'bold' }}>
              ${onSalePrice}
            </Typography>
            <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'gray' }}>
              ${price}
            </Typography>
          </div>
        ) : (
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="primary" onClick={onAdd}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

// Definir las PropTypes
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onSalePrice: PropTypes.number,
  image: PropTypes.string,
  onAdd: PropTypes.func.isRequired,
};

// Establecer valores predeterminados para las props opcionales
ProductCard.defaultProps = {
  onSalePrice: null,
  image: '',
};

export default ProductCard;
