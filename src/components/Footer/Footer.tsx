import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4>
        Copyright 2023 &#169; <a href="https://github.com/Dudarik">Alex Reznichenko</a> - RSSchool
      </h4>
    </footer>
  );
};

export default Footer;
