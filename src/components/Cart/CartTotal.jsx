// src/components/Cart/CartTotal.jsx
import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";

const CartTotal = ({ total, handleCheckout }) => {
  return (
    <>
      <Divider sx={{ my: 4 }} />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5">Total: ${total}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleCheckout}
        >
          Finalizar Compra
        </Button>
      </Box>
    </>
  );
};

export default CartTotal;
