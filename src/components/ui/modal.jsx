// src/components/ui/Modal.jsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const Modal = ({
  open,
  handleClose,
  title,
  children,
  onConfirm,
  confirmText = "Aceptar",
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        {onConfirm && (
          <Button onClick={onConfirm} variant="contained" color="primary">
            {confirmText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
