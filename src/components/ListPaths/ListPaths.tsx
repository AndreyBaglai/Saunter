import React from 'react';
import { List, Typography } from 'antd';
import { EnvironmentTwoTone, RightOutlined } from '@ant-design/icons';

import styles from './ListPaths.module.css';

export default function ListPaths() {
  const paths = [
    {
      title: '1',
      body: 'Some text 1eeeeeeeeeeeeeeeeeeeee e e e ee e ee eeeeeeeeeeeeeeeeeeeeeeeee e e e e e eeeeeeeeeeeeee',
    },
    { title: '2', body: 'Some text 2' },
    { title: '3', body: 'Some text 1' },
    { title: '4', body: 'Some text 2' },
    { title: '5', body: 'Some text 1' },
    { title: '6', body: 'Some text 2' },
    { title: '7', body: 'Some text 1' },
    { title: '8', body: 'Some text 2' },
    { title: '9', body: 'Some text 1' },
    { title: '10', body: 'Some text 2' },
    { title: '11', body: 'Some text 1' },
    { title: '12', body: 'Some text 2' },
    { title: '13', body: 'Some text 1' },
    { title: '14', body: 'Some text 2' },
  ];

  return (
    <List
      className={styles.list}
      dataSource={paths}
      bordered={true}
      renderItem={(path: any) => (
        <List.Item key={path.body + path.title} className={styles.listItem}>
          <List.Item.Meta
            className={styles.meta}
            avatar={<EnvironmentTwoTone className={styles.itemMarker} twoToneColor="true" />}
            title={path.title}
            description={
              <Typography.Paragraph className={styles.description}>
                {path.body}
              </Typography.Paragraph>
            }
          />
          <Typography.Text className={styles.distance}>1.13 km</Typography.Text>
          <RightOutlined className={styles.leftArrow}/>
        </List.Item>
      )}></List>
  );
}
