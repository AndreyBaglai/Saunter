import React from 'react';
import { Row } from 'antd';

import PathView from '../PathView/PathView';
import PathsListWrapper from '../PathsListWrapper/PathsListWrapper';

import styles from './Main.module.css';
import { StoreModel } from '../../model/store-model';
import { useDispatch, useSelector } from 'react-redux';

export default function Main() {
  return (
    <main className={styles.main}>
      <Row justify="space-around">
        <PathsListWrapper />
        <PathView />
      </Row>
    </main>
  );
}
