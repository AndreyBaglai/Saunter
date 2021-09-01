import React from 'react';
import { Col, Row, Card, Button } from 'antd';

import styles from './Main.module.css';
import MainLeftSide from '../MainLeftSide/MainLeftSide';
import MainRightSide from '../MainRightSide/MainRightSide';

export default function Main() {
  return (
    <main className={styles.main}>
      <Row justify="space-around">
        <MainLeftSide />
        <MainRightSide />
      </Row>
    </main>
  );
}
