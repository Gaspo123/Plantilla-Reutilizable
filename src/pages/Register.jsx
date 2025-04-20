import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = e => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      setError('El usuario ya está registrado');
    } else {
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Loguear automáticamente
      login({ email, nombre: name });
      setSuccess(true);
      setError('');

      // Redirigir al Dashboard
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Regístrate
      </Typography>
      {error && <Typography color="error">{error}</Typography>}

      <form onSubmit={handleRegister}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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
          Registrarse
        </Button>
      </form>

      <Typography variant="body2" sx={{ mt: 2 }}>
        ¿Ya tienes cuenta?{' '}
        <Button onClick={() => navigate('/login')} sx={{ padding: 0 }}>
          Inicia sesión
        </Button>
      </Typography>

      <Snackbar open={success} autoHideDuration={2000}>
        <Alert severity="success" sx={{ width: '100%' }}>
          ¡Usuario registrado con éxito!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
