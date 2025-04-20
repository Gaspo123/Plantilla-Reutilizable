import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube, Telegram, MusicNote } from '@mui/icons-material'; // Cambié Spotify por MusicNote

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: 4,
        px: 2,
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid #ccc',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        ¡Gracias por tu visita!
      </Typography>

      <Typography variant="body2" sx={{ mb: 2 }}>
        Seguinos en nuestras redes sociales
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton
          component="a"
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          sx={{
            color: '#3b5998',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.2)' },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          sx={{
            color: '#E1306C',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.2)' },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component="a"
          href="https://youtube.com"
          target="_blank"
          rel="noopener"
          sx={{
            color: '#FF0000',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.2)' },
          }}
        >
          <YouTube />
        </IconButton>
        <IconButton
          component="a"
          href="https://telegram.org"
          target="_blank"
          rel="noopener"
          sx={{
            color: '#0088cc',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.2)' },
          }}
        >
          <Telegram />
        </IconButton>
        <IconButton
          component="a"
          href="https://spotify.com"
          target="_blank"
          rel="noopener"
          sx={{
            color: '#1DB954',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.2)' },
          }}
        >
          <MusicNote /> {/* Cambié Spotify por MusicNote */}
        </IconButton>
      </Box>

      <Typography variant="caption" sx={{ mt: 3, color: 'gray' }}>
        © {new Date().getFullYear()} TuTienda. Todos los derechos reservados por Gaspar Sarasola.
      </Typography>
    </Box>
  );
};

export default Footer;
