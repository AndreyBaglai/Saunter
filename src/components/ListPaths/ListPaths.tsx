import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Typography } from 'antd';
import { EnvironmentTwoTone, RightOutlined, StarFilled, StarOutlined } from '@ant-design/icons';

import { getPathsFromLS, updateFavoritePathByLS } from 'services/localStorage';
import { StoreModel } from 'model/store-model';
import { PathModel } from 'model/path-model';

import styles from './ListPaths.module.css';

type ListPathPropsType = {
  paths: PathModel[];
};

const ListPaths = ({ paths }: ListPathPropsType) => {
  const statePaths = useSelector((state: StoreModel) => state.paths);
  const dispatch = useDispatch();

  const onSelectedPath = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const path = statePaths.find((path: PathModel) => path.id === target.id);

    dispatch({ type: 'paths/select', payload: target.id });
    dispatch({
      type: 'currentPath/set',
      payload: path,
    });
  };
  
  const onSetFavorite = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const id =  target.dataset.id as string;
    
    updateFavoritePathByLS(id);
    dispatch({ type: 'paths/setFavorite', payload: id });
  };

  const onRemoveFavorite = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const id =  target.dataset.id as string;

    updateFavoritePathByLS(id);
    dispatch({ type: 'paths/removeFavorite', payload: target.dataset.id });
  };

  return (
    <List
      className={styles.list}
      dataSource={statePaths}
      bordered={true}
      locale={{
        emptyText: <Typography.Text className={styles.emptyText}>No more paths</Typography.Text>,
      }}
      renderItem={(path: PathModel) => (
        <List.Item
          key={path.id}
          className={`container px-md-2 px-lg-6 ${styles.listItem}`}
          id={path.id}
          onClick={onSelectedPath}>
          <List.Item.Meta
            className={styles.meta}
            avatar={
              <EnvironmentTwoTone
                className={`d-none d-md-block ${styles.itemMarker}`}
                twoToneColor="true"
              />
            }
            title={
              <>
                {path.favorite ? (
                  <StarFilled  data-id={path.id} style={{ color: 'yellow' }} onClick={onRemoveFavorite} />
                ) : (
                  <StarOutlined  data-id={path.id} style={{ color: 'yellow' }} onClick={onSetFavorite} />
                )}
                <Typography.Text className={styles.itemTitle}>{path.title}</Typography.Text>
              </>
            }
            description={
              <Typography.Paragraph className={`d-none d-md-block ${styles.description}`}>
                {path.description.short}
              </Typography.Paragraph>
            }
          />

          <Typography.Text className={styles.distance}>{`${path.distance} km`}</Typography.Text>
          <RightOutlined className={`d-none d-md-block ${styles.leftArrow}`} />
        </List.Item>
      )}></List>
  );
};

export default ListPaths;
