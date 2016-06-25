import React from 'react';
import styles from './Header.css';

export function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 style={{ color: 'white' }}>
          Search Hotwire Cars!!
        </h1>
      </div>
    </div>
  );
}

export default Header;
