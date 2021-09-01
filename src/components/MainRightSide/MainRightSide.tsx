import React from 'react';
import { Col, Button, Card } from 'antd';

import styles from './MainRightSide.module.css';

export default function MainRightSide() {
  return (
    <Col span={11} offset={1} className={styles.pathView}>
      <Card
        headStyle={{ color: '#fff', fontSize: '24px' }}
        className={styles.card}
        title="Path title"
        extra={<h5 className={styles.distance}>1.13 km</h5>}
        style={{ width: '100%' }}>
        <p>
          Full description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum totam
          beatae ex illo sint tempora tenetur eaque facilis perspiciatis culpa? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consectetur rerum laboriosam libero repellendus
          dolor! Repellat quidem voluptatem nihil ipsam repudiandae.
        </p>
        <p>Map</p>
        <div className={styles.wrapperBtn}>
          <Button block type="link">
            Add to favorite
          </Button>
          <Button block type="link" danger>
            Remove
          </Button>
        </div>
      </Card>
    </Col>
  );
}
