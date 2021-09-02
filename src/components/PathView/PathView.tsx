import React, { useState } from 'react';
import { Col, Button, Card, Typography } from 'antd';

import styles from './PathView.module.css';
import { PathModel } from '../../model/path-model';
import { useDispatch, useSelector } from 'react-redux';
import { StoreModel } from '../../model/store-model';

export default function PathView() {
  const paths = useSelector((state: StoreModel) => state.paths);
  const dispatch = useDispatch();

  const [selectPath, setSelectPath] = useState<PathModel | null>(() => {
    const path = paths.find((item: PathModel) => item.selected === true);
    return path || null;
  });

  const onRemovePath = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    dispatch({type: 'paths/pathRemoved', payload: target.id});
  }

  return (
    <Col span={11} offset={1} className={styles.pathView}>
      {selectPath ? (
        <Card
          headStyle={{ color: '#fff', fontSize: '24px' }}
          className={styles.card}
          title={selectPath.title}
          extra={<h5 className={styles.distance}>{selectPath.distance} km</h5>}
          style={{ width: '100%' }}>
          <p>{selectPath.description.full}</p>
          <p>Map</p>
          <div className={styles.wrapperBtn}>
            <Button block type="link">
              Add to favorite
            </Button>
            <Button id={selectPath.id} block type="link" danger onClick={onRemovePath}>
              Remove
            </Button>
          </div>
        </Card>
      ) : (
        <Typography.Text className={styles.defaultText}>Selectany path</Typography.Text>
      )}
    </Col>
  );
}
