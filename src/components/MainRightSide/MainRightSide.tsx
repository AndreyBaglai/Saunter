import React from 'react';
import { Col, Button, Card } from 'antd';

import styles from './MainRightSide.module.css';

export default function MainRightSide() {
  return (
    <Col span={11} offset={1}>
    <Card title="Path title" extra={<h5>1.13 km</h5>} style={{ width: '100%' }}>
      <p>Full description</p>
      <p>Map</p>
      <Button type="link">Add to favorite</Button>
      <Button type="link" danger>
        Remove path
      </Button>
    </Card>
  </Col>
  )
}
