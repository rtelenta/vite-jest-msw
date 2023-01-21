export const getEnvs = () => {
  const envs = import.meta.env;
  return {
    ...envs,
  };
};
