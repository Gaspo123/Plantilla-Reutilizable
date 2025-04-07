export const useGenerateTicket = () => {
  const generateCode = () => {
    return "TK-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  return { generateCode };
};
