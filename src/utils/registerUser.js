const users = [];

export const registerUser = (email, password) => {
  const userExists = users.find(user => user.email === email);

  if (userExists) {
    return { success: false, message: 'El correo ya está registrado.' };
  }

  users.push({ email, password });
  return { success: true, message: 'Registro exitoso. Iniciá sesión.' };
};
