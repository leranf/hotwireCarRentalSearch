import React from 'react';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
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
