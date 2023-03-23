import React, { Component, ReactNode } from 'react';

import styles from './CustomError.module.scss';
type TCustomErrorProps = {
  message: string | undefined;
};
class CustomError extends Component<TCustomErrorProps> {
  render(): ReactNode {
    return (
      <div
        className={
          this.props.message && this.props.message.length ? styles.error : styles.display_none
        }
      >
        {this.props.message}
      </div>
    );
  }
}

export default CustomError;
