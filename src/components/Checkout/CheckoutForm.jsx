import React, { useState } from "react";
import {
  TextField,
  Box,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import useCheckoutForm from "./useCheckoutForm";
import { PrimaryButton } from "../ui/Buttons.jsx"; // ✅ Usamos tu botón

const CheckoutForm = () => {
  const { form, error, handleChange, handleSubmit } = useCheckoutForm();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5, px: 3 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          🧾 Completa tus datos para finalizar
        </Typography>

        {/* ✅ ALERTA SI NO HAY USUARIO */}
        {error.usuario && (
          <Alert
            severity="warning"
            variant="outlined"
            sx={{
              mt: 2,
              mb: 3,
              borderLeft: "5px solid #ffa726",
              background: "#fff8e1",
              color: "#8d6e63",
              fontWeight: "bold",
              boxShadow: "0 3px 6px rgba(0,0,0,0.05)",
            }}
          >
            ⚠️ {error.usuario}
          </Alert>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formIsValid = handleSubmit(e);
            if (formIsValid !== false) {
              setOpenSnackbar(true);
            }
          }}
          noValidate
        >
          <TextField
            fullWidth
            margin="normal"
            label="Nombre completo"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            error={!!error.nombre}
            helperText={error.nombre}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!error.email}
            helperText={error.email}
            placeholder="ejemplo@gmail.com"
          />

          <TextField
            fullWidth
            margin="normal"
            label="Dirección"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            error={!!error.direccion}
            helperText={error.direccion}
            placeholder="Calle Falsa 123, Ciudad"
          />

          {/* ✅ Usamos el botón personalizado */}
          <PrimaryButton type="submit" fullWidth sx={{ mt: 3 }}>
            Generar Ticket
          </PrimaryButton>
        </form>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          ✅ ¡Ticket generado con éxito!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CheckoutForm;
