import { AnimeActionTypes, Anime } from './types';

export const loadAnimes = () => ({ type: AnimeActionTypes.REQ_LOAD });
export const loadAnimeSuccess = (animes: Anime) => ({
  type: AnimeActionTypes.REQ_OK,
  animes,
});
export const loadAnimeErr = () => ({ type: AnimeActionTypes.REQ_ERR });
