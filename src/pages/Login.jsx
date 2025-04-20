import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = e => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      login({ email: user.email, nombre: user.name }); // guardar en contexto
      navigate('/dashboard');
    } else {
      setError('Credenciales incorrectas o usuario no registrado');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Iniciar sesión
      </Typography>
      {error && <Typography color="error">{error}</Typography>}

      <form onSubmit={handleLogin}>
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Iniciar sesión
        </Button>
      </form>

      <Typography variant="body2" sx={{ mt: 2 }}>
        ¿Aún no tienes cuenta?{' '}
        <Button onClick={() => navigate('/register')} sx={{ padding: 0 }}>
          Regístrate
        </Button>
      </Typography>
    </Box>
  );
};

export default Login;
