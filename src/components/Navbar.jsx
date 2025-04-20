import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box, Avatar } from '@mui/material';
import { ShoppingCart, Login, ReceiptLong, Logout, Dashboard } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { toast } from 'sonner';

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Sesión cerrada correctamente');
    navigate('/');
  };

  // Función auxiliar para obtener iniciales del usuario (para el Avatar)
  const getInitials = name => {
    if (!name) return '';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          MiTienda
        </Typography>

        {/* Links de navegación */}
        <Box sx={{ display: 'flex', gap: 3, letterSpacing: 1 }}>
          <Button component={Link} to="/" color="inherit">
            INICIO
          </Button>
          <Button component={Link} to="/productos" color="inherit">
            PRODUCTOS
          </Button>
          <Button component={Link} to="/contacto" color="inherit">
            CONTACTO
          </Button>
          <Button component={Link} to="/historial" color="inherit" startIcon={<ReceiptLong />}>
            LOG-IN/REGISTRO
          </Button>
        </Box>

        {/* Usuario / Login / Carrito */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {user ? (
            <>
              {/* Nombre o email + Avatar */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 1 }}>
                <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                  {getInitials(user.nombre || user.email)}
                </Avatar>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {user.nombre || user.email}
                </Typography>
              </Box>

              <IconButton color="inherit" component={Link} to="/dashboard" title="Dashboard">
                <Dashboard />
              </IconButton>

              <IconButton onClick={handleLogout} color="inherit" title="Cerrar sesión">
                <Logout />
              </IconButton>
            </>
          ) : (
            <IconButton component={Link} to="/login" color="inherit" title="Iniciar sesión">
              <Login />
            </IconButton>
          )}

          <IconButton component={Link} to="/carrito" color="inherit" title="Carrito">
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
