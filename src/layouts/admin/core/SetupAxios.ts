export const SetupAxios = (axios: any) => {
  axios.defaults.headers.Accept = "application/json";
  axios.interceptors.request.use(
    (config: { headers: { Authorization: string } }) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (err: any) => Promise.reject(err) // Fix: Specify a more specific type for the err parameter, such as Error.
  );
};
