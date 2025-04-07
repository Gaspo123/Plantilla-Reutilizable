import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const ProductCard = ({
  name,
  description,
  price,
  onSalePrice,
  image,
  onAdd,
}) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 4, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>

        {onSalePrice ? (
          <div>
            <Typography
              variant="body1"
              color="error"
              sx={{ fontWeight: "bold" }}
            >
              ${onSalePrice}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", color: "gray" }}
            >
              ${price}
            </Typography>
          </div>
        ) : (
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
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

export default ProductCard;
