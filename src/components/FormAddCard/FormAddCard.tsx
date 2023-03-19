import React, { FormEvent, Component, ReactNode } from 'react';

import styles from './FormAddCard.module.scss';

class FromAddCard extends Component {
  handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  render(): ReactNode {
    return (
      <form onSubmit={this.handleSubmitForm} className={styles.add_card_form}>
        <input type="file" name="game_picture" id="game_picture" />
        <input type="text" name="game_title" id="game_title" />
        <input type="text" name="bgg_rating" id="bgg_rating" />
        <input type="text" name="tesera_rating" id="tesera_rating" />
        <select name="publisher" id="publisher">
          <option value="1">lavka</option>
        </select>
        <select name="min_players" id="min_players">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select name="max_players" id="max_players">
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>

        <select name="age" id="age">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
        </select>

        <input type="radio" name="lang" id="russian" value="Русский" defaultChecked={true} />
        <input type="radio" name="lang" id="english" value="Английский" />
        <input type="radio" name="lang" id="french" value="Французский" />

        <input type="date" name="release_date" id="release_date" />

        <input type="checkbox" name="is_game" id="is_game" />
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default FromAddCard;
