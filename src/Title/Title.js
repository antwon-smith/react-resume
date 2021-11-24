import React from 'react';
import styles from './Title.module.css'

const Title = () => {
    return (
      <div>
        <h1 className={styles.name}>Antwon Smith</h1>
        <h2 className={styles.page_title}>Professional Resume</h2>
        <h3 className={styles.position}>Senior Data Center Technician/LEAP Apprentice <em>at Microsoft</em></h3>
      </div>
    );
  }
  
  export default Title;