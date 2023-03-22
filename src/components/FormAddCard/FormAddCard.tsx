import CustomSelect from '../CustomSelect';
import React, { FormEvent, Component, ReactNode, createRef, RefObject } from 'react';

import styles from './FormAddCard.module.scss';
import {
  defaultFields,
  publishers,
  min_players,
  max_players,
  age,
  langs,
} from './FormAddCardDefaultValues';

type TInputRef = { ref: RefObject<HTMLInputElement> };

class FormAddCard extends Component {
  langs: ({ langId: string; value: string } & TInputRef)[];

  refPublishers: RefObject<HTMLSelectElement>;
  refMinPlayers: RefObject<HTMLSelectElement>;
  refMaxPlayers: RefObject<HTMLSelectElement>;
  refAge: RefObject<HTMLSelectElement>;

  constructor(props = {}) {
    super(props);
    this.langs = this.createInputRefs(langs);
    this.refPublishers = createRef<HTMLSelectElement>();
    this.refMinPlayers = createRef<HTMLSelectElement>();
    this.refMaxPlayers = createRef<HTMLSelectElement>();
    this.refAge = createRef<HTMLSelectElement>();
  }
  createInputRefs<T>(arrOfObj: T[]): (T & TInputRef)[] {
    return arrOfObj.map((obj) => Object.assign({}, obj, { ref: createRef<HTMLInputElement>() }));
  }

  handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    for (let i = 0; i < langs.length; i++) {
      console.log(this.langs[i].ref.current?.checked);
    }
    console.log(this.refPublishers.current?.value);
  };

  render(): ReactNode {
    return (
      <form onSubmit={this.handleSubmitForm} className={styles.add_card_form}>
        {defaultFields.map((field) => {
          const { fieldNameId, fieldTitle, fieldType } = field;
          return (
            <label htmlFor={fieldNameId} key={fieldNameId}>
              {fieldTitle}
              <input type={fieldType} id={fieldNameId} name={fieldNameId} />
            </label>
          );
        })}
        <CustomSelect {...publishers} refSelect={this.refPublishers} />
        <CustomSelect {...min_players} refSelect={this.refMinPlayers} />
        <CustomSelect {...max_players} refSelect={this.refMinPlayers} />
        <CustomSelect {...age} refSelect={this.refMinPlayers} />
        <fieldset id="lang">
          <legend>Language</legend>
          {this.langs.map((lang, index) => {
            const { langId, value, ref } = lang;
            return (
              <label htmlFor={langId} key={langId}>
                {value}
                <input
                  type="radio"
                  name="lang"
                  id={langId}
                  value={value}
                  ref={ref}
                  defaultChecked={index === 0}
                />
              </label>
            );
          })}
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
