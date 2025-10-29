import type { Character } from "~/model/character.model";

export interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

export const useApi = () => {
  const config = useRuntimeConfig();

  const getCharacters = async (page = 1) => {
    return await useFetch<ApiResponse<Character>>(
      `${config.public.apiBaseUrl}/character`,
      {
        params: { page },
      }
    );
  };

  const getCharacterById = async (id: number) => {
    return await useFetch<Character>(
      `${config.public.apiBaseUrl}/character/${id}`
    );
  };

  const getEpisodes = async (page = 1) => {
    return await useFetch<ApiResponse<any>>(
      `${config.public.apiBaseUrl}/episode`,
      { params: { page } }
    );
  };

  const getLocations = async (page = 1) => {
    return await useFetch<ApiResponse<Location>>(
      `${config.public.apiBaseUrl}/location`,
      { params: { page } }
    );
  };

  return {
    getCharacters,
    getCharacterById,
    getEpisodes,
    getLocations,
  };
};
