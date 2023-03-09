export interface IPublisher {
  id: number;
  title: string;
  img: string;
}

export interface IGameData {
  id: number;
  title: string;
  publisher: number;
  players: string;
  playingTime: string;
  age: number;
  rulesTime: number;
  lang: string;
  tags: string[];
  scoreBGG: number;
  scoreTesera: number;
  image: string;
  game: boolean;
}

export interface IGamesData {
  publishers: IPublisher[];
  games: IGameData[];
}
