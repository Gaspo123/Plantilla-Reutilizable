import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";

const Historial = () => {
  const [historial, setHistorial] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    setHistorial(storedTickets);
  }, []);

  const limpiarHistorial = () => {
    localStorage.removeItem("tickets");
    setHistorial([]);
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        🧾 Historial de Compras
      </Typography>
      {historial.length === 0 ? (
        <Typography>No hay compras registradas.</Typography>
      ) : (
        <>
          {historial.map((ticket, i) => (
            <Card key={i} sx={{ marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h6">Código: {ticket.codigo}</Typography>
                <Typography>Nombre: {ticket.nombre}</Typography>
                <Typography>Email: {ticket.email}</Typography>
                <Typography>Domicilio: {ticket.domicilio}</Typography>
                <Typography>Total: ${ticket.total}</Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle2">Productos:</Typography>
                <ul>
                  {ticket.productos.map((prod, j) => (
                    <li key={j}>
                      {prod.nombre} - ${prod.precio}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          <Button color="error" variant="outlined" onClick={limpiarHistorial}>
            Borrar historial
          </Button>
        </>
      )}
    </Box>
  );
};

export default Historial;
