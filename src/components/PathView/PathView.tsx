import React, { useEffect, useState } from 'react';
import { Col, Button, Card, Typography } from 'antd';
import Map from '../Map/Map';

import styles from './PathView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { StoreModel } from '../../model/store-model';
import { PathModel } from '../../model/path-model';

export default function PathView() {
  const [pathInfo, setPathInfo] = useState<PathModel | null>(null);
  const selectPath: any = useSelector((state: StoreModel) => state.currentPath);
  const dispatch = useDispatch();

  useEffect(() => {
    setPathInfo(selectPath);
  }, [pathInfo, selectPath])

  const onRemovePath = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    setPathInfo(null);

    dispatch({ type: 'paths/remove', payload: target.id });
    dispatch({ type: 'currentPath/remove', payload: null });
  };

  return (
    <Col span={11} offset={1} className={styles.pathView}>
      {pathInfo && Object.keys(selectPath).length ? (
        <Card
          headStyle={{ color: '#fff', fontSize: '24px' }}
          className={styles.card}
          title={pathInfo.title}
          extra={<h5 className={styles.distance}>{pathInfo.distance} km</h5>}
          style={{ width: '100%' }}>
          <p>{pathInfo.description?.full}</p>
          <Map id="pathMap" isEdit={false} isSetMarkers={true} />
          <div className={styles.wrapperBtn}>
            <Button block type="link">
              Add to favorite
            </Button>
            <Button id={pathInfo.id} block type="link" danger onClick={onRemovePath}>
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
