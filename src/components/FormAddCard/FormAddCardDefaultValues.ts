import { IPublisher } from '../../interfaces/cardsIterfaces';
import { getGamesData } from '../../helpers';

const FILD_TYPE_FILE = 'file';
const FILD_TYPE_TEXT = 'text';
const FILD_TYPE_NUMBER = 'number';

export const defaultFields = [
  {
    fieldNameId: 'game_picture',
    fieldTitle: 'Add picture',
    fieldType: FILD_TYPE_FILE,
  },
  {
    fieldNameId: 'game_title',
    fieldTitle: 'Add game title',
    fieldType: FILD_TYPE_TEXT,
  },
  {
    fieldNameId: 'game_duration',
    fieldTitle: 'Add game duration in minutes (example: 60-90)',
    fieldType: FILD_TYPE_TEXT,
  },
  {
    fieldNameId: 'bgg_rating',
    fieldTitle: 'BGG rating',
    fieldType: FILD_TYPE_NUMBER,
  },
  {
    fieldNameId: 'tesera_rating',
    fieldTitle: 'Tesera rating',
    fieldType: FILD_TYPE_NUMBER,
  },
];

const publishers = {
  values: getGamesData('publishers') as IPublisher[],
  id: 'select_publishers',
  title: 'Choose publisher',
};
const min_players = {
  values: [1, 2, 3, 4],
  id: 'select_min_players',
  title: 'Min gamers',
};
const max_players = {
  values: [2, 3, 4, 5, 6, 7, 8],
  id: 'select_max_players',
  title: 'Max gamers',
};
const age = {
  values: [6, 7, 8, 10, 12, 14, 16, 18],
  id: 'select_age',
  title: 'Min age',
};

export const selectsData = [publishers, min_players, max_players, age];

export const langs = [
  { id: 'rus', value: 'Русский' },
  { id: 'eng', value: 'English' },
  { id: 'fre', value: 'Le français' },
];

export const isGame = [
  { id: 'game', value: 'Game' },
  { id: 'addition', value: 'Addition' },
];
