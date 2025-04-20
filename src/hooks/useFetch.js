import { useState, useEffect } from 'react';

/**
 * Hook personalizado para realizar solicitudes HTTP.
 * @param {string} url La URL para la solicitud.
 * @param {object} options Opciones adicionales para la solicitud, como headers, método, etc.
 * @returns {object} Estado de la solicitud, incluyendo los datos, errores y cargando.
 */
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state on new request

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]); // Dependencias: la URL y las opciones pueden cambiar

  return { data, loading, error };
};

export default useFetch;
