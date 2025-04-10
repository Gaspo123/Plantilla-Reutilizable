// src/components/Checkout/CheckoutInputGroup.jsx
import React from "react";
import { TextField } from "@mui/material";

const CheckoutInputGroup = ({ label, name, value, onChange }) => {
  return (
    <TextField
      label={label}
      name={name}
      fullWidth
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={{ mb: 2 }}
    />
  );
};

export default CheckoutInputGroup;
