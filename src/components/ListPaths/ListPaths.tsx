import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Typography } from 'antd';
import { EnvironmentTwoTone, RightOutlined, StarFilled, StarOutlined } from '@ant-design/icons';

import { StoreModel } from 'model/store-model';
import { PathModel } from 'model/path-model';

import styles from './ListPaths.module.css';

type ListPathPropsType = {
  paths: PathModel[];
  isFiltered: boolean;
};

const ListPaths = ({ paths, isFiltered }: ListPathPropsType) => {
  const pathsState = useSelector((state: StoreModel) => state.paths);
  const dispatch = useDispatch();

  const onSelectedPath = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const path = pathsState.find((path: PathModel) => path.id === target.id);

    dispatch({ type: 'paths/select', payload: target.id });
    dispatch({
      type: 'currentPath/set',
      payload: path,
    });
  };

  return (
    <List
      className={styles.list}
      dataSource={isFiltered ? paths : pathsState}
      bordered={true}
      locale={{
        emptyText: <Typography.Text className={styles.emptyText}>No more paths</Typography.Text>,
      }}
      renderItem={(path: PathModel) => (
        <List.Item key={path.id} className={styles.listItem} id={path.id} onClick={onSelectedPath}>
          <List.Item.Meta
            className={styles.meta}
            avatar={<EnvironmentTwoTone className={styles.itemMarker} twoToneColor="true" />}
            title={
              <>
                {path.favorite ? (
                  <StarFilled style={{ color: 'yellow' }} />
                ) : (
                  <StarOutlined style={{ color: 'yellow' }} />
                )}
                {path.title}
              </>
            }
            description={
              <Typography.Paragraph className={styles.description}>
                {path.description.short}
              </Typography.Paragraph>
            }
          />

          <Typography.Text className={styles.distance}>{`${path.distance} km`}</Typography.Text>
          <RightOutlined className={styles.leftArrow} />
        </List.Item>
      )}></List>
  );
};

export default ListPaths;
