import React from 'react';
import { List, Typography } from 'antd';
import { EnvironmentTwoTone, RightOutlined } from '@ant-design/icons';

import { useSelector } from 'react-redux';
import { StoreModel } from '../../model/store-model';

import styles from './ListPaths.module.css';

export default function ListPaths() {
  const paths = useSelector((state: StoreModel) => state.paths);

  return (
    <List
      className={styles.list}
      dataSource={paths}
      bordered={true}
      renderItem={(path: any) => (
        <List.Item key={path.id} className={styles.listItem}>
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
