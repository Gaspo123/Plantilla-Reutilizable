import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
} from '@mui/material';
import '../styles/global.css';
import { CartButton } from '../components/ui/Buttons.jsx';
import Banner from '../components/ui/Banner.jsx';
import products from '../data/products';

const Home = () => {
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProducts = products.filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? prod.category === category : true;
    const matchesMinPrice = minPrice ? prod.priceCash >= Number(minPrice) : true;
    const matchesMaxPrice = maxPrice ? prod.priceCash <= Number(maxPrice) : true;
    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="central-container">
      <Banner />
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        🛍️ Bienvenido a nuestra tienda
      </Typography>

      {/* FILTROS */}
      <Box
        sx={{ display: 'flex', gap: 2, mt: 4, mb: 4, justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <TextField
          label="Buscar producto"
          variant="outlined"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Categoría</InputLabel>
          <Select value={category} label="Categoría" onChange={e => setCategory(e.target.value)}>
            <MenuItem value="">Todas</MenuItem>
            <MenuItem value="Calzado">Calzado</MenuItem>
            <MenuItem value="Ropa">Ropa</MenuItem>
            <MenuItem value="Accesorios">Accesorios</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Precio mínimo"
          type="number"
          variant="outlined"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
        />

        <TextField
          label="Precio máximo"
          type="number"
          variant="outlined"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />
      </Box>

      {/* PRODUCTOS FILTRADOS */}
      <Grid container spacing={4} justifyContent="center">
        {filteredProducts.map(prod => (
          <Grid item key={prod.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 4,
                boxShadow: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={prod.image}
                alt={prod.name}
                sx={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              />
              <CardContent sx={{ backgroundColor: '#f9f9f9', textAlign: 'center', p: 2 }}>
                <Typography variant="h6">{prod.name}</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {prod.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                  ${prod.priceCash}
                </Typography>
                <CartButton onClick={() => addToCart(prod)} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
