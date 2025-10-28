export const useApi = () => {
  const config = useRuntimeConfig();

  const getCharacters = async (page = 1) => {
    return await useFetch(`${config.public.apiBaseUrl}/character`, {
      params: { page },
    });
  };

  const getCharacterById = async (id: number) => {
    return await useFetch(`${config.public.apiBaseUrl}/character/${id}`);
  };

  const getEpisodes = async (page = 1) => {
    return await useFetch(`${config.public.apiBaseUrl}/episode`, {
      params: { page },
    });
  };

  const getEpisodeById = async (id: number) => {
    return await useFetch(`${config.public.apiBaseUrl}/episode/${id}`);
  };

  const getLocations = async (page = 1) => {
    return await useFetch(`${config.public.apiBaseUrl}/location`, {
      params: { page },
    });
  };

  const getLocationById = async (id: number) => {
    return await useFetch(`${config.public.apiBaseUrl}/location/${id}`);
  };

  return {
    getCharacters,
    getCharacterById,
    getEpisodes,
    getEpisodeById,
    getLocations,
    getLocationById,
  };
};
