import React from 'react';
import { Col, Input, List, Avatar } from 'antd';

import styles from './MainLeftSide.module.css';
import ListPaths from '../ListPaths/ListPaths';

export default function MainLeftSide() {
  return (
    <Col span={12}>
      <Input.Search className={styles.inputSearch} placeholder="Input search text" onSearch={() => {}} enterButton />
      
      <ListPaths />
    </Col>
  );
}
