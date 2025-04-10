import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Historial = () => {
  const { user } = useAuth();
  const [historial, setHistorial] = useState([]);

  // ✅ Cargar solo tickets del usuario actual
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];

    // Filtrar por email del usuario logueado
    const ticketsUsuario = storedTickets.filter(
      (ticket) => ticket.usuario === user?.email
    );

    setHistorial(ticketsUsuario);
  }, [user]);

  const limpiarHistorial = () => {
    // ⚠️ Solo eliminamos tickets del usuario actual
    const allTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const ticketsFiltrados = allTickets.filter(
      (ticket) => ticket.usuario !== user?.email
    );
    localStorage.setItem("tickets", JSON.stringify(ticketsFiltrados));
    setHistorial([]);
  };

  return (
    <Box sx={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <Typography variant="h4" gutterBottom align="center">
        🧾 Historial de Compras
      </Typography>

      {historial.length === 0 ? (
        <Typography align="center" color="text.secondary">
          No tienes compras registradas.
        </Typography>
      ) : (
        <>
          {historial.map((ticket, i) => (
            <Card
              key={i}
              sx={{ marginBottom: 2, borderRadius: 3, boxShadow: 3 }}
            >
              <CardContent>
                <Typography variant="h6" color="primary">
                  Ticket #{ticket.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fecha: {ticket.fecha}
                </Typography>
                <Typography variant="body2">
                  Comprador: {ticket.comprador?.nombre}
                </Typography>
                <Typography variant="body2">
                  Dirección: {ticket.comprador?.direccion}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", mt: 1 }}>
                  Total: ${ticket.total.toFixed(2)}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Productos:
                </Typography>
                <ul>
                  {ticket.productos.map((prod, j) => (
                    <li key={j}>
                      {prod.nombre} x{prod.cantidad} - $
                      {(prod.precio * prod.cantidad).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Box display="flex" justifyContent="center" mt={2}>
            <Button color="error" variant="outlined" onClick={limpiarHistorial}>
              Borrar historial
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Historial;
