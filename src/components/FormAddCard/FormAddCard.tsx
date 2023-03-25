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
import { IGameData } from '../../interfaces/cardsIterfaces';
import CustomError from '../CustomError';
import {
  validateByPattern,
  validateFirstCapitalize,
  validateNotNull,
  validateNumberBeetwinMinMax,
  validateSelectNotNull,
} from '../../helpers';

type TFormState = {
  defaultFields: IInputTextWithRef[];
  langs: IIRadioWithRef[];
  isGame: IIRadioWithRef[];
  selectsData: ISelectWithRef[];

  dateRef: RefObject<HTMLInputElement>;
  checkBoxRef: RefObject<HTMLInputElement>;
  formRef: RefObject<HTMLFormElement>;
  validator: Record<string, string>;
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
    formRef: createRef<HTMLFormElement>(),
    validator: {
      game_picture: '',
      game_title: '',
      game_duration: '',
      bgg_rating: '',
      tesera_rating: '',
      release_date: '',
      lang: '',
      is_game: '',
      is_correct: '',
      select_publishers: '',
      select_min_players: '',
      select_max_players: '',
      select_age: '',
    },
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

  private createRefs<T, U>(arrOfObj: T[]): (T & { refProp: RefObject<U> })[] {
    return arrOfObj.map((obj) =>
      Object.assign({}, obj, {
        refProp: createRef<U>(),
      })
    );
  }

  private getRefFromArr = <T extends IInputTextWithRef | IIRadioWithRef | ISelectWithRef>(
    arrOfObj: T[]
  ) => {
    return arrOfObj.map((item) => item.refProp.current);
  };

  private getFieldFromDefalutFields = (fieldTitle: string) => {
    const fieldTitleReturn = this.state.defaultFields.find(
      (item) => item.fieldNameId === fieldTitle
    );

    if (!fieldTitleReturn) throw new Error(`Can't find ${fieldTitle} field`);

    return fieldTitleReturn;
  };

  private getSelectFieldFromSelectFields = (fieldTitle: string) => {
    const fieldTitleReturn = this.state.selectsData.find((item) => item.id === fieldTitle);

    if (!fieldTitleReturn) throw new Error(`Can't find ${fieldTitle} field`);

    return fieldTitleReturn;
  };

  private setValidationResultToState = async (validateItems: Record<string, string>) => {
    await this.setState((pState) => ({
      ...pState,
      validator: { ...pState.validator, ...validateItems },
    }));
  };

  private validatePicture = async () => {
    const fieldPicture = this.getFieldFromDefalutFields('game_picture');

    if (fieldPicture.refProp.current?.files?.length === 0)
      this.setValidationResultToState({ game_picture: 'Choose file' });
    else this.setValidationResultToState({ game_picture: '' });
  };

  private validateGameTitle = async () => {
    const fieldGameTitle = this.getFieldFromDefalutFields('game_title');

    let validateMessage = validateNotNull(fieldGameTitle.refProp, 'game title', 3);
    validateMessage += validateFirstCapitalize(fieldGameTitle.refProp);

    this.setValidationResultToState({ game_title: validateMessage });
  };

  private validateGameDuration = async () => {
    const fieldGameTitle = this.getFieldFromDefalutFields('game_duration');

    let validateMessage = validateNotNull(fieldGameTitle.refProp, 'game duration', 3);

    validateMessage += validateByPattern(
      fieldGameTitle.refProp,
      `60-120 in minutes (^\d{1,2}-\d{1,3}$)`,
      /^\d{1,2}-\d{1,3}$/
    );

    this.setValidationResultToState({ game_duration: validateMessage });
  };

  private validationRating = async () => {
    const fieldBggRating = this.getFieldFromDefalutFields('bgg_rating');
    const fieldTeseraRating = this.getFieldFromDefalutFields('tesera_rating');

    this.setValidationResultToState({
      bgg_rating: validateNumberBeetwinMinMax(fieldBggRating.refProp, 0, 10),
      tesera_rating: validateNumberBeetwinMinMax(fieldTeseraRating.refProp, 0, 10),
    });
  };

  private validationDate = async () => {
    this.setValidationResultToState({
      release_date: validateByPattern(
        this.state.dateRef,
        'Please input coorrect date in past present or future from 1900-2099 year',
        /^((19|20)\d\d)-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/
      ),
    });
  };

  private validationCheckBox = async () => {
    this.setValidationResultToState({
      is_correct: this.state.checkBoxRef.current?.checked
        ? ''
        : 'Please confirm that the data entered is correct',
    });
  };

  private validationRadio = async () => {
    const langField = this.getRefFromArr(this.state.langs) as HTMLInputElement[];
    const isGameField = this.getRefFromArr(this.state.isGame) as HTMLInputElement[];

    this.setValidationResultToState({
      lang:
        langField.find((item) => item.checked) === undefined
          ? `Please select 1 of ${langField.length}`
          : '',
      is_game:
        isGameField.find((item) => item.checked) === undefined
          ? `Please select 1 of ${isGameField.length}`
          : '',
    });
  };

  private validationSelects = async () => {
    this.state.selectsData.forEach((select) => {
      this.setValidationResultToState({
        [select.id]: validateSelectNotNull(select.refProp, select.title),
      });
    });
  };

  private handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await this.validatePicture();
    await this.validateGameTitle();
    await this.validateGameDuration();
    await this.validationRating();
    await this.validationDate();
    await this.validationCheckBox();
    await this.validationRadio();
    await this.validationSelects();

    let valid_form = true;
    const validatorValues = Object.values(this.state.validator);

    for (let i = 0; i < validatorValues.length; i++) {
      if (validatorValues[i].length) {
        valid_form = false;
        break;
      }
    }

    // if (this.state.dateRef.current?.value) console.log(new Date(this.state.dateRef.current.value));

    if (valid_form) {
      const path_img = this.getFieldFromDefalutFields('game_picture').refProp.current
        ?.files as FileList;

      const image = path_img ? window.URL.createObjectURL(path_img[0]) : '';

      const min_players =
        this.getSelectFieldFromSelectFields('select_min_players').refProp.current?.value;
      const max_players =
        this.getSelectFieldFromSelectFields('select_max_players').refProp.current?.value;
      const age = parseInt(
        this.getSelectFieldFromSelectFields('select_age').refProp.current?.value as string
      );

      const publisher = parseInt(
        this.getSelectFieldFromSelectFields('select_publishers').refProp.current?.value as string
      );

      const langField = this.getRefFromArr(this.state.langs) as HTMLInputElement[];
      const isGameField = this.getRefFromArr(this.state.isGame) as HTMLInputElement[];

      const lang = langField.find((item) => item.checked)?.value as string;
      const game = (isGameField.find((item) => item.checked)?.value as string) === 'Game';

      const newCard = {
        id: Date.now(),
        title: this.getFieldFromDefalutFields('game_title').refProp.current?.value as string,
        releaseDate: this.state.dateRef.current?.value as string,
        publisher,
        players: `${min_players}-${max_players}`,
        playingTime: this.getFieldFromDefalutFields('game_duration').refProp.current
          ?.value as string,
        age,
        lang,
        scoreBGG: parseFloat(
          this.getFieldFromDefalutFields('bgg_rating').refProp.current?.value as string
        ),
        scoreTesera: parseFloat(
          this.getFieldFromDefalutFields('tesera_rating').refProp.current?.value as string
        ),
        image,
        game,
        blobImg: true,
      };

      this.props.addNewCard(newCard);

      if (this.state.formRef.current) this.state.formRef.current.reset();
    }
  };

  render(): ReactNode {
    return (
      <form
        onSubmit={this.handleSubmitForm}
        className={styles.add_card_form}
        ref={this.state.formRef}
      >
        {this.state.defaultFields.map((field) => {
          const { fieldNameId, fieldTitle, fieldType, refProp } = field;

          return (
            <label htmlFor={fieldNameId} key={fieldNameId}>
              {fieldTitle}
              <input type={fieldType} id={fieldNameId} name={fieldNameId} ref={refProp} />
              <CustomError message={this.state.validator[fieldNameId]} />
            </label>
          );
        })}
        {this.state.selectsData.map((item) => (
          <div key={item.id}>
            <CustomSelect {...item} />
            <CustomError message={this.state.validator[item.id]} />
          </div>
        ))}

        <CustomRadioBox {...{ title: 'Language', name: 'lang', dataArr: this.state.langs }} />
        <CustomError message={this.state.validator['lang']} />

        <CustomRadioBox {...{ title: 'is Game', name: 'is_game', dataArr: this.state.isGame }} />
        <CustomError message={this.state.validator['is_game']} />

        <label htmlFor="release_date">
          Relise date:
          <input type="date" name="release_date" id="release_date" ref={this.state.dateRef} />
          <CustomError message={this.state.validator['release_date']} />
        </label>
        <label htmlFor="is_correct">
          Data correct:
          <input type="checkbox" name="is_correct" id="is_correct" ref={this.state.checkBoxRef} />
          <CustomError message={this.state.validator['is_correct']} />
        </label>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default FormAddCard;
