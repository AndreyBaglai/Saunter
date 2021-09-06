import React from 'react';
import { Col, Button, Card, Typography } from 'antd';
import Map from '../Map/Map';

import styles from './PathView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { StoreModel } from '../../model/store-model';

export default function PathView() {
  const selectPath: any = useSelector((state: StoreModel) => state.currentPath);
  const dispatch = useDispatch();

  const onRemovePath = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    dispatch({ type: 'paths/remove', payload: target.id });
    dispatch({ type: 'currentPath/remove', payload: null });
  };

  return (
    <Col span={11} offset={1} className={styles.pathView}>
      {selectPath.path ? (
        <Card
          headStyle={{ color: '#fff', fontSize: '24px' }}
          className={styles.card}
          title={selectPath.path.title}
          extra={<h5 className={styles.distance}>{selectPath.path.distance} km</h5>}
          style={{ width: '100%' }}>
          <p>{selectPath.path.description?.full}</p>
          <Map id="pathMap" isEdit={false} markers={false} />
          <div className={styles.wrapperBtn}>
            <Button block type="link">
              Add to favorite
            </Button>
            <Button id={selectPath.path.id} block type="link" danger onClick={onRemovePath}>
              Remove
            </Button>
          </div>
        </Card>
      ) : (
        <Typography.Text className={styles.defaultText}>Select any path</Typography.Text>
      )}
    </Col>
  );
} 
