import { IPublisher } from '../../interfaces/cardsIterfaces';
import { getGamesData } from '../../helpers';

const FILD_TYPE_FILE = 'file';
const FILD_TYPE_TEXT = 'text';
const FILD_TYPE_NUMBER = 'number';

export const defaultFields = [
  {
    fieldNameId: 'game_picture',
    fieldTitle: 'Добавь картинку игры',
    fieldType: FILD_TYPE_FILE,
  },
  {
    fieldNameId: 'game_title',
    fieldTitle: 'Добавь название игры',
    fieldType: FILD_TYPE_TEXT,
  },
  {
    fieldNameId: 'bgg_rating',
    fieldTitle: 'BGG рейтинг',
    fieldType: FILD_TYPE_NUMBER,
  },
  {
    fieldNameId: 'tesera_rating',
    fieldTitle: 'Рейтинг на Тесере',
    fieldType: FILD_TYPE_NUMBER,
  },
];

export const publishers = {
  values: getGamesData('publishers') as IPublisher[],
  id: 'select_publishers',
  title: 'Выбери издателя',
};
export const min_players = {
  values: [1, 2, 3, 4],
  id: 'select_min_players',
  title: 'Мин. игроков',
};
export const max_players = {
  values: [2, 3, 4, 5, 6, 7, 8],
  id: 'select_max_players',
  title: 'Макс. игроков',
};
export const age = {
  values: [6, 7, 8, 10, 12, 14, 16, 18],
  id: 'select_age',
  title: 'Мин. возраст',
};

export const langs = [
  { langId: 'rus', value: 'Русский' },
  { langId: 'eng', value: 'Английский' },
  { langId: 'fre', value: 'Французский' },
];
