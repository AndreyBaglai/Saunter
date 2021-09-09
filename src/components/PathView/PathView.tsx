import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Button, Card, Typography } from 'antd';

import Map from 'components/Map/Map';

import { StoreModel } from 'model/store-model';
import { PathModel } from 'model/path-model';
import { removePathFromLS, updateFavoritePathByLS } from 'services/localStorage';

import styles from './PathView.module.scss';

const PathView = () => {
  const selectPath: any = useSelector((state: StoreModel) => state.currentPath);

  const [pathInfo, setPathInfo] = useState<PathModel | null>(null);
  const [isUpdateBtn, setIsUpdateBtn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setPathInfo(selectPath);
  }, [pathInfo, selectPath, isUpdateBtn]);

  const onRemovePath = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const id = target.dataset.id as string;

    setPathInfo(null);
    removePathFromLS(id);

    dispatch({ type: 'paths/remove', payload: id });
    dispatch({ type: 'currentPath/remove', payload: null });
  };

  const onSetFavorite = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const id =  target.dataset.id as string;
    
    setIsUpdateBtn(true);
    updateFavoritePathByLS(id);
    dispatch({ type: 'paths/setFavorite', payload: id });
  };

  const onRemoveFavorite = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const id =  target.dataset.id as string;

    updateFavoritePathByLS(id);
    setIsUpdateBtn(false);
    dispatch({ type: 'paths/removeFavorite', payload: target.dataset.id });
  };

  return (
    <Col className={`col-md-5 offset-md-1 col-sm-12 ${styles.pathView}`}>
      {pathInfo && Object.keys(selectPath).length ? (
        <Card
          headStyle={{ color: '#fff', fontSize: '24px' }}
          className={styles.card}
          title={pathInfo.title}
          extra={<h5 className={styles.distance}>{pathInfo.distance} km</h5>}>
          <p className={styles.fullDescription}>{pathInfo.description?.full}</p>

          <Map id="pathMap" isEdit={false} isSetMarkers={true} />

          <div className={styles.wrapperBtn}>
            {!pathInfo.favorite && !isUpdateBtn ? (
              <Button data-id={pathInfo.id} block type="link" onClick={onSetFavorite}>
                Add to favorite
              </Button>
            ) : (
              <Button data-id={pathInfo.id} block type="link" onClick={onRemoveFavorite}>
                Remove from favorite
              </Button>
            )}
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
