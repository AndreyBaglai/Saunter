import React from 'react';
import { Col, Input, List, Avatar } from 'antd';

import styles from './MainLeftSide.module.css';

export default function MainLeftSide() {
  const paths = [
    { title: '1', body: 'Some text 1' },
    { title: '2', body: 'Some text 2' },
  ];

  return (
    <Col span={12}>
      <Input.Search className={styles.inputSearch} placeholder="Input search text" onSearch={() => {}} enterButton />
      <List
        dataSource={paths}
        bordered={true}
        renderItem={(path: any) => (
          <List.Item key={path.body + path.path}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{path.body}</a>}
              description={path.body}
            />
            <div>1.45 km</div>
          </List.Item>
        )}></List>
    </Col>
  );
}
