import CustomSelect from '../../components/CustomSelect';
import React, { FormEvent, Component, ReactNode, ChangeEvent } from 'react';

import styles from './FormAddCard.module.scss';
import { getGamesData } from '../../helpers';
import { IPublisher } from 'interfaces/cardsIterfaces';

const publishers = {
  values: getGamesData('publishers') as IPublisher[],
  id: 'select_publishers',
  title: 'Выбери издателя',
};
const min_players = { values: [1, 2, 3, 4], id: 'select_min_players', title: 'Мин. игроков' };
const max_players = {
  values: [2, 3, 4, 5, 6, 7, 8],
  id: 'select_max_players',
  title: 'Макс. игроков',
};
const age = { values: [6, 7, 8, 10, 12, 14, 16, 18], id: 'select_age', title: 'Мин. возраст' };

class FormAddCard extends Component {
  handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit form');
  };
  render(): ReactNode {
    return (
      <form onSubmit={this.handleSubmitForm} className={styles.add_card_form}>
        <label htmlFor="game_picture">
          Добавь картинку игры
          <input type="file" name="game_picture" id="game_picture" />
        </label>
        <label htmlFor="game_title">
          Добавь название игры
          <input type="text" name="game_title" id="game_title" />
        </label>
        <label htmlFor="bgg_rating">
          BGG рейтинг
          <input type="number" name="bgg_rating" id="bgg_rating" />
        </label>
        <label htmlFor="bgg_rating">
          Рейтинг на тесере
          <input type="number" name="tesera_rating" id="tesera_rating" />
        </label>

        <CustomSelect {...publishers} />
        <CustomSelect {...min_players} />
        <CustomSelect {...max_players} />
        <CustomSelect {...age} />

        <fieldset
          id="lang"
          onClick={(e: ChangeEvent<HTMLFieldSetElement>) => console.log(e.target.value)}
        >
          <label htmlFor="rus">Русский</label>
          <input type="radio" name="lang" id="rus" value="Русский" defaultChecked={true} />
          <label htmlFor="eng">Английский</label>
          <input type="radio" name="lang" id="eng" value="Английский" />
          <label htmlFor="french">Французский</label>
          <input type="radio" name="lang" id="french" value="Французский" />
        </fieldset>

        <label htmlFor="release_date">
          Дата релиза:
          <input type="date" name="release_date" id="release_date" />
        </label>

        <label htmlFor="is_game">
          Вкл(игра)/ Выкл(дополнение к игре)
          <input type="checkbox" name="is_game" id="is_game" />
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default FormAddCard;
