import { IPublisher } from '../../interfaces/cardsIterfaces';
import { getGamesData } from '../../helpers';

export const FILD_TYPE_FILE = 'file';
export const FILD_TYPE_TEXT = 'text';
export const FILD_TYPE_NUMBER = 'number';

export const defaultFields = [
  {
    fieldNameId: 'game_picture',
    fieldTitle: 'Add picture',
    fieldType: FILD_TYPE_FILE,
    validator: {
      required: 'Choose file',
    },
  },
  {
    fieldNameId: 'game_title',
    fieldTitle: 'Game title',
    fieldType: FILD_TYPE_TEXT,
    validator: {
      required: `Please input Game title, min 3 symbols.`,
      minLength: 3,
      validate: {
        firstCapitalize: (v: string) =>
          v[0] === v[0].toLocaleUpperCase() || 'The first letter must be a capital letter.',
      },
    },
  },
  {
    fieldNameId: 'game_duration',
    fieldTitle: 'Game duration in minutes',
    placeholder: 'example: 60-90',
    fieldType: FILD_TYPE_TEXT,
    validator: {
      required: `Please input Game duration`,
      pattern: {
        value: /^\d{1,2}-\d{1,3}$/,
        message: 'Must be in pattern "30-90"',
      },
    },
  },
  {
    fieldNameId: 'bgg_rating',
    fieldTitle: 'BGG rating',
    fieldType: FILD_TYPE_NUMBER,
    validator: {
      required: `Please input number 1 to 10`,
      min: {
        value: 1,
        message: 'Min value 1',
      },
      max: {
        value: 10,
        message: 'Max value 10',
      },
    },
  },
  {
    fieldNameId: 'tesera_rating',
    fieldTitle: 'Tesera rating',
    fieldType: FILD_TYPE_NUMBER,
    validator: {
      required: `Please input number 1 to 10`,
      min: {
        value: 1,
        message: 'Min value 0',
      },
      max: {
        value: 10,
        message: 'Max value 10',
      },
    },
  },
];

const publishers = {
  values: getGamesData('publishers') as IPublisher[],
  id: 'select_publishers',
  title: 'Choose publisher',
};
const min_players = {
  values: [1, 2],
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
