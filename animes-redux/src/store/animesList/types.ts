/* Action types */
export enum AnimeActionTypes {
  REQ_LOAD = 'animes/REQ_LOAD',
  REQ_OK = 'animes/REQ_OK',
  REQ_ERR = 'animes/REQ_ERR',
}

/* Data types */
interface AnimePoster {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
}

interface AnimeAttributes {
  synopsis: string;
  canonicalTitle: string;
  averageRating: string;
  status: string;
  posterImage: AnimePoster;
}

export interface Anime {
  id: string;
  atributes: AnimeAttributes;
}

/* State type */
export interface AnimeState {
  animes: Anime[];
  loading: boolean;
  error: string | null;
}
