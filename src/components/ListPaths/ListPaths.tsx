import React from 'react';
import { List, Typography } from 'antd';
import { EnvironmentTwoTone, RightOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';
import { StoreModel } from '../../model/store-model';

import styles from './ListPaths.module.css';
import { PathModel } from '../../model/path-model';

export default function ListPaths() {
  const paths = useSelector((state: StoreModel) => state.paths);
  const dispatch = useDispatch();

  const onSelectedPath = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    console.log(target);
    dispatch({type: 'paths/pathSetSelected', payload: target.id});
  }

  return (
    <List
      className={styles.list}
      dataSource={paths}
      bordered={true}
      renderItem={(path: PathModel) => (
        <List.Item key={path.id} className={styles.listItem} id={path.id} onClick={onSelectedPath}>
          <List.Item.Meta
            className={styles.meta}
            avatar={<EnvironmentTwoTone className={styles.itemMarker} twoToneColor="true" />}
            title={path.title}
            description={
              <Typography.Paragraph className={styles.description}>
                {path.description.short}
              </Typography.Paragraph>
            }
          />
          <Typography.Text className={styles.distance}>{`${path.distance} km`}</Typography.Text>
          <RightOutlined className={styles.leftArrow}/>
        </List.Item>
      )}></List>
  );
}
