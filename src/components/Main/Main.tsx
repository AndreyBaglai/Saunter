import React from 'react';
import { Row } from 'antd';

import PathView from 'components/PathView/PathView';
import PathsListWrapper from 'components/PathsListWrapper/PathsListWrapper';

import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={`row ${styles.main}`}>
      <Row justify="space-around">
        <PathsListWrapper />
        <PathView />
      </Row>
    </main>
  );
};

export default Main;
