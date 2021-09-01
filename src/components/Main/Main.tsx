import React from 'react';
import { Col, Row, Input, List, Avatar } from 'antd';

import styles from './Main.module.css';
import MainLeftSide from '../MainLeftSide/MainLeftSide';

export default function Main() {
  return (
    <main className={styles.main}>
      <Row>
        <MainLeftSide />

        <Col>
          {/* <Card title="Path title" extra={<h5>1.13 km</h5>} style={{ width: '100%' }}>
            <p>Full description</p>
            <p>Map</p>
            <Button type="link">Add to favorite</Button>
            <Button type="link" danger>
              Remove path
            </Button>
          </Card> */}
        </Col>
      </Row>
    </main>
  );
}
