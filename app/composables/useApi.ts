import type { Character } from "~/model/character.model";
import type { Location } from "~/model/location.model.js";
import type { Episode } from "~/model/episode.model.js";

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

  const getMultipleCharacters = (ids: number[]) => {
    if (!ids.length)
      return { data: ref([]), pending: ref(false), error: ref(null) };
    return useFetch<Character[]>(
      `https://rickandmortyapi.com/api/character/${ids.join(",")}`,
      {
        key: `characters-${ids.join(",")}`,
        transform: (data) => (Array.isArray(data) ? data : [data]),
      }
    );
  };

  const getCharacterById = async (id: number) => {
    return await useFetch<Character>(
      `${config.public.apiBaseUrl}/character/${id}`
    );
  };

  const getEpisodes = async (page = 1) => {
    return await useFetch<ApiResponse<Episode>>(
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
    getMultipleCharacters,
    getEpisodes,
    getLocations,
  };
};
