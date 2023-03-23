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
import { IGameData } from 'interfaces/cardsIterfaces';

type TFormState = {
  defaultFields: IInputTextWithRef[];
  langs: IIRadioWithRef[];
  isGame: IIRadioWithRef[];
  selectsData: ISelectWithRef[];

  dateRef: RefObject<HTMLInputElement>;
  checkBoxRef: RefObject<HTMLInputElement>;
};
type TFormProps = {
  addNewCard: (newCard: IGameData) => void;
};

class FormAddCard extends Component<TFormProps, TFormState> {
  state: TFormState = {
    defaultFields: [],
    langs: [],
    isGame: [],
    selectsData: [],

    dateRef: createRef<HTMLInputElement>(),
    checkBoxRef: createRef<HTMLInputElement>(),
  };

  constructor(props: TFormProps) {
    super(props);
  }
  componentDidMount(): void {
    this.setState({
      langs: this.createRefs<IRadio, HTMLInputElement>(langs),
      isGame: this.createRefs<IRadio, HTMLInputElement>(isGame),
      defaultFields: this.createRefs<IInputText, HTMLInputElement>(defaultFields),
      selectsData: this.createRefs<ISelect, HTMLSelectElement>(selectsData),
    });
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
  validateRadio = () => {};
  validateSelect = () => {};
  validateDate = () => {};
  validateCheckbox = () => {};

  handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const def = this.getRefFromArr(this.state.defaultFields);
    console.log(def);

    if (def[0]?.value) console.log(def[0]?.value);
    else console.log('b=not value');

    const myRefs = this.getRefFromArr(this.state.selectsData);
    console.log(myRefs);
    console.log(this.state.isGame);
    const inputrefs = this.getRefFromArr(this.state.isGame);

    console.log(inputrefs);

    const sel = this.getRefFromArr(this.state.selectsData);
    console.log(sel);
    if (this.state.dateRef.current?.value) console.log(new Date(this.state.dateRef.current.value));
    const newCard = {
      id: Date.now(),
      title: 'test',
      releaseDate: '23.4.5',
      publisher: 1,
      players: '2-5',
      playingTime: '60-90',
      age: 8,
      lang: 'russian',
      scoreBGG: 7,
      scoreTesera: 7,
      image: 'tzolkin.webp',
      game: true,
    };
    this.props.addNewCard(newCard);
  };

  render(): ReactNode {
    return (
      <form onSubmit={this.handleSubmitForm} className={styles.add_card_form}>
        {this.state.defaultFields.map((field) => {
          const { fieldNameId, fieldTitle, fieldType, refProp } = field;
          return (
            <label htmlFor={fieldNameId} key={fieldNameId}>
              {fieldTitle}
              <input type={fieldType} id={fieldNameId} name={fieldNameId} ref={refProp} />
            </label>
          );
        })}
        {this.state.selectsData.map((item) => (
          <CustomSelect {...item} key={item.id} />
        ))}

        <CustomRadioBox {...{ title: 'Language', name: 'lang', dataArr: this.state.langs }} />
        <CustomRadioBox {...{ title: 'is Game', name: 'is_game', dataArr: this.state.isGame }} />

        <label htmlFor="release_date">
          Relise date:
          <input type="date" name="release_date" id="release_date" ref={this.state.dateRef} />
        </label>
        <label htmlFor="is_correct">
          Data correct:
          <input type="checkbox" name="is_correct" id="is_correct" ref={this.state.checkBoxRef} />
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
