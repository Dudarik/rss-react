import CustomSelect from '../CustomSelect';
import React, { FormEvent, Component, ReactNode, createRef, RefObject } from 'react';

import styles from './FormAddCard.module.scss';
import { defaultFields, selectsData, langs, isGame } from './FormAddCardDefaultValues';
import {
  IInputText,
  IInputTextWithRef,
  IIRadioWithRef,
  IRadio,
  ISelect,
  ISelectWithRef,
} from '../../interfaces/formInterfaces';
import CustomRadioBox from '../CustomRadioBox';

class FormAddCard extends Component {
  defaultFields: IInputTextWithRef[];
  langs: IIRadioWithRef[];
  isGame: IIRadioWithRef[];
  selectsData: ISelectWithRef[];

  dateRef: RefObject<HTMLInputElement>;
  checkBox: RefObject<HTMLInputElement>;

  constructor(props = {}) {
    super(props);

    this.langs = this.createRefs<IRadio, HTMLInputElement>(langs);
    this.isGame = this.createRefs<IRadio, HTMLInputElement>(isGame);
    this.defaultFields = this.createRefs<IInputText, HTMLInputElement>(defaultFields);
    this.selectsData = this.createRefs<ISelect, HTMLSelectElement>(selectsData);

    this.dateRef = createRef<HTMLInputElement>();
    this.checkBox = createRef<HTMLInputElement>();
  }

  createRefs<T, U>(arrOfObj: T[]): (T & { refProp: RefObject<U> })[] {
    return arrOfObj.map((obj) =>
      Object.assign({}, obj, {
        refProp: createRef<U>(),
      })
    );
  }

  getRefFromArr = <T extends IInputTextWithRef | IIRadioWithRef | ISelectWithRef>(
    arrOfObj: T[]
  ) => {
    return arrOfObj.map((item) => item.refProp.current);
  };

  validateInput = () => {};
  validateDate = () => {};
  validateCheckbox = () => {};

  handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const def = this.getRefFromArr(this.defaultFields);
    console.log(def);
    console.log(this.defaultFields);

    const myRefs = this.getRefFromArr(this.selectsData);
    console.log(myRefs);
    console.log(this.isGame);
    const inputrefs = this.getRefFromArr(this.isGame);

    console.log(inputrefs);

    const sel = this.getRefFromArr(this.selectsData);
    console.log(sel);
  };

  render(): ReactNode {
    return (
      <form onSubmit={this.handleSubmitForm} className={styles.add_card_form}>
        {this.defaultFields.map((field) => {
          const { fieldNameId, fieldTitle, fieldType, refProp } = field;
          return (
            <label htmlFor={fieldNameId} key={fieldNameId}>
              {fieldTitle}
              <input type={fieldType} id={fieldNameId} name={fieldNameId} ref={refProp} />
            </label>
          );
        })}
        {this.selectsData.map((item) => (
          <CustomSelect {...item} key={item.id} />
        ))}

        <CustomRadioBox {...{ title: 'Language', name: 'lang', dataArr: this.langs }} />
        <CustomRadioBox {...{ title: 'is Game', name: 'is_game', dataArr: this.isGame }} />

        <label htmlFor="release_date">
          Relise date:
          <input type="date" name="release_date" id="release_date" ref={this.dateRef} />
        </label>
        <label htmlFor="is_correct">
          Data correct:
          <input type="checkbox" name="is_correct" id="is_correct" ref={this.checkBox} />
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default FormAddCard;

// selectsData: ((
//   | {
//       values: IPublisher[];
//       id: string;
//       title: string;
//     }
//   | { values: number[]; id: string; title: string }
// ) &
//   ISelectRef)[];

// this.langs = this.createInputRefs(langs);
// this.isGame = this.createInputRefs(isGame);
// this.defaultFields = this.createInputRefs(defaultFields);
// this.selectsData = this.createSelectRefs(selectsData);

// createInputRefs<T>(arrOfObj: T[]): (T & IInputRef)[] {
//   return arrOfObj.map((obj) =>
//     Object.assign({}, obj, { refProp: createRef<HTMLInputElement>() })
//   );
// }
// createSelectRefs<T>(arrOfObj: T[]): (T & ISelectRef)[] {
//   return arrOfObj.map((obj) =>
//     Object.assign({}, obj, { refProp: createRef<HTMLSelectElement>() })
//   );
// }
