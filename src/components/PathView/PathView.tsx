import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Button, Card, Typography } from 'antd';

import Map from '../Map/Map';

import { StoreModel } from 'model/store-model';
import { PathModel } from 'model/path-model';

import styles from './PathView.module.css';

const PathView = () => {
  const [pathInfo, setPathInfo] = useState<PathModel | null>(null);

  const selectPath: any = useSelector((state: StoreModel) => state.currentPath);
  const dispatch = useDispatch();

  useEffect(() => {
    setPathInfo(selectPath);
  }, [pathInfo, selectPath]);

  const onRemovePath = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    setPathInfo(null);

    dispatch({ type: 'paths/remove', payload: target.dataset.id });
    dispatch({ type: 'currentPath/remove', payload: null });
  };

  const onSetFavorite = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    dispatch({ type: 'paths/setFavorite', payload: target.dataset.id });
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
          <p className={styles.fullDescription}>{pathInfo.description?.full}</p>
          <Map id="pathMap" isEdit={false} isSetMarkers={true} />

          <div className={styles.wrapperBtn}>
            <Button data-id={pathInfo.id} block type="link" onClick={onSetFavorite}>
              Add to favorite
            </Button>
            <Button data-id={pathInfo.id} block type="link" danger onClick={onRemovePath}>
              Remove
            </Button>
          </div>
        </Card>
      ) : (
        <Typography.Text className={styles.defaultText}>Select any path</Typography.Text>
      )}
    </Col>
  );
};

export default PathView;
