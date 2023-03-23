import React, { Component, ReactNode } from 'react';

import styles from './CustomError.module.scss';
type TCustomErrorProps = {
  message: string;
  visible: boolean;
};
class CustomError extends Component<TCustomErrorProps> {
  render(): ReactNode {
    return (
      <div className={this.props.visible ? styles.error : styles.display_none}>
        {this.props.message}
      </div>
    );
  }
}

export default CustomError;
