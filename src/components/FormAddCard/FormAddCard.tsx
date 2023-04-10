import { IGameData } from '../../interfaces/cardsIterfaces';

import React, { useState } from 'react';

import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

import CustomRadioBox from '../CustomRadioBox';
import CustomError from '../CustomError';
import CustomSelect from '../CustomSelect';

import { defaultFields, selectsData, langs, isGame } from './FormAddCardDefaultValues';

import styles from './FormAddCard.module.scss';

type TFormProps = {
  addNewCard: (newCard: IGameData) => void;
};

const FormAddCard = (props: TFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({ reValidateMode: 'onSubmit' });

  const [state, setState] = useState({
    defaultFields,
    langs,
    isGame,
    selectsData,
    infoMessage: '',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const {
      game_title: title,
      release_date: releaseDate,
      select_publishers,
      select_min_players,
      select_max_players,
      game_duration: playingTime,
      select_age: age,
      lang,
      bgg_rating: scoreBGG,
      tesera_rating: scoreTesera,
      game_picture,
      is_game: game,
    } = data;

    const image = game_picture.length ? window.URL.createObjectURL(game_picture[0]) : '';

    const newCard = {
      id: Date.now(),
      title,
      releaseDate,
      publisher: parseInt(select_publishers),
      players: `${select_min_players}-${select_max_players}`,
      playingTime,
      age,
      lang,
      scoreBGG,
      scoreTesera,
      image,
      game: game === 'Game',
      blobImg: true,
    };

    props.addNewCard(newCard);
    setState({ ...state, infoMessage: `Game ${title} was added.` });

    reset();

    setTimeout(() => {
      setState({ ...state, infoMessage: `` });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.add_card_form}>
      <div className={styles.top_section}>
        <div className={styles.default_fields}>
          {state.defaultFields.map((field) => {
            const { fieldNameId, fieldTitle, fieldType, placeholder, validator } = field;

            const currentFieldErrors = errors[fieldNameId];

            return (
              <div className={styles.default_field} key={fieldNameId}>
                <label htmlFor={fieldNameId} className={styles.default_label}>
                  {fieldTitle}

                  <input
                    {...register(fieldNameId, validator)}
                    type={fieldType}
                    id={fieldNameId}
                    name={fieldNameId}
                    placeholder={placeholder}
                  />
                </label>
                <CustomError
                  message={currentFieldErrors ? currentFieldErrors.message?.toString() : ''}
                />
              </div>
            );
          })}
        </div>

        <div className={styles.select_fields}>
          {state.selectsData.map((item) => (
            <div key={item.id} className={styles.select_field}>
              <CustomSelect {...{ ...item, register }} />
              <CustomError message={errors[item.id]?.message?.toString()} />
            </div>
          ))}
        </div>
        <div className={styles.radio_fields}>
          <div className={styles.radio_section}>
            <CustomRadioBox
              {...{ title: 'is Game', name: 'is_game', dataArr: state.isGame, register }}
            />
            <CustomError message={errors['is_game'] && 'Please choose one'} />
          </div>
          <div className={styles.radio_section}>
            <CustomRadioBox
              {...{ title: 'Language', name: 'lang', dataArr: state.langs, register }}
            />
            <CustomError message={errors['lang'] && 'Please choose one'} />
          </div>
        </div>
      </div>

      <div className={styles.release_date}>
        <label htmlFor="release_date">
          Relise date:
          <input
            type="date"
            id="release_date"
            {...register('release_date', {
              required: 'Please input coorrect date in past present or future from 1900-2099 year',
              pattern: {
                value: /^((19|20)\d\d)-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
                message: 'Please input coorrect date in past present or future from 1900-2099 year',
              },
            })}
          />
        </label>
        <CustomError
          message={errors['release_date'] && errors['release_date'].message?.toString()}
        />
      </div>

      <label htmlFor="is_correct" className={styles.is_correct}>
        Data correct:
        <input type="checkbox" id="is_correct" {...register('is_correct', { required: true })} />
        <CustomError message={errors['is_correct'] && 'Please check if data correct'} />
      </label>
      {state.infoMessage.length > 0 && (
        <div className={styles.info_message}>{state.infoMessage}</div>
      )}
      <button type="submit" className={styles.add_button}>
        submit
      </button>
    </form>
  );
};

export default FormAddCard;
