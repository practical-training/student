import React from 'react';
import { connect } from 'dva';
import styles from '../Category.css';

function Category() {
  return (
    <div>
      {/* <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul> */}
      2
    </div>
  );
}

Category.propTypes = {
};

export default connect()(Category);
