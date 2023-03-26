export interface IPublisher {
  id: number;
  title: string;
  img: string;
}

export interface IGameData {
  id: number;
  title: string;
  releaseDate: string;
  publisher: number;
  players: string;
  playingTime: string;
  age: number;
  lang: string;
  scoreBGG: number;
  scoreTesera: number;
  image: string;
  game: boolean;
  blobImg?: boolean;
}

export interface IGamesData {
  publishers: IPublisher[];
  games: IGameData[];
}
