import React from "react";
import { Box, Typography } from "@mui/material";

const MusicPlayer = () => {
  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        🎵 Relax & Music ... 🎵
      </Typography>
      <audio controls loop style={{ width: "100%", marginTop: "1rem" }}>
        <source src="/music/MusicRelax.mp3" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </Box>
  );
};

export default MusicPlayer;
