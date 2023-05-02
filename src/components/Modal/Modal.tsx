import { IGameData } from 'interfaces/cardsIterfaces';
import React, { MouseEvent } from 'react';

import { PATH_TO_GAME_IMG, PATH_TO_PUBLISHER_IMG } from '../../config/img_paths';

import GameInfo from '../GameInfo';
import Preloader from '../Preloader/Preloader';
import { useGetGameQuery, useGetPublishersQuery } from '../../slices/apiSlice';

import styles from './Modal.module.scss';

interface IModalProps {
  currentGameId: number;
  isModalOpen: boolean;

  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = (props: IModalProps) => {
  const { currentGameId, isModalOpen, setIsModalOpen } = props;

  const { data: publishers } = useGetPublishersQuery('');
  const { data: newGame } = useGetGameQuery(currentGameId);

  let game: IGameData = {
    id: -1,
    title: 'unknown',
    releaseDate: 'unknown',
    players: 'unknown',
    scoreBGG: 0,
    scoreTesera: 0,
    age: 0,
    publisher: -1,
    playingTime: 'unknown',
    lang: 'unknown',
    image: 'unknown',
    game: false,
    blobImg: false,
  };

  if (newGame) game = newGame;

  const {
    id,
    title,
    releaseDate,
    players,
    scoreBGG,
    scoreTesera,
    age,
    playingTime,
    lang,
    image,
    game: isGame,
    blobImg,
  } = game;

  const closeModal = (event: MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    event.preventDefault();

    setIsModalOpen(false);
  };

  const handlerModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const publisher = publishers?.find((publisher) => publisher.id === game?.publisher);
  let publisherImage = '';
  let publisherTitle = '';

  if (publisher !== undefined) {
    publisherImage = publisher.img;
    publisherTitle = publisher.title;
  }

  return (
    <>
      <div
        className={isModalOpen ? `${styles.modal_overlay} ${styles.active}` : styles.modal_overlay}
        onClick={closeModal}
      >
        <div className={styles.modal_window} onClick={handlerModalClick}>
          <div className={styles.modal_header}>
            <button onClick={closeModal} className={styles.modal_btn_close}>
              X
            </button>
          </div>
          <div className={styles.modal_content}>
            {id !== currentGameId ? (
              <Preloader />
            ) : (
              <>
                <div className={styles.image}>
                  {blobImg ? (
                    <img src={image} alt={title} width="300" />
                  ) : (
                    <img src={PATH_TO_GAME_IMG + image} alt={title} width="300" />
                  )}
                </div>
                <img src={PATH_TO_PUBLISHER_IMG + publisherImage} alt={publisherTitle} />
                <h3 className={styles.card_title}>{title}</h3>
                <div className={styles.addition}>{isGame ? 'Игра' : 'Дполнение к игре'}</div>

                <div className={styles.rating}>
                  BGG: <span>{scoreBGG}</span>
                  <pre> | </pre>Tesera: <span>{scoreTesera}</span>
                </div>

                <GameInfo {...{ releaseDate, players, age, playingTime, lang }} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
