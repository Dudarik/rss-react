import React from 'react';

import styles from './CustomError.module.scss';

type TCustomErrorProps = {
  message: string | undefined;
};

const CustomError = (props: TCustomErrorProps) => {
  const { message } = props;
  return (
    <div className={message && message.length ? styles.error : styles.display_none}>{message}</div>
  );
};

export default CustomError;
