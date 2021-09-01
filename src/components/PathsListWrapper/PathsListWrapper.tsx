import React from 'react';
import { Col, Input} from 'antd';

import ListPaths from '../ListPaths/ListPaths';

import styles from './PathsListWrapper.module.css';

export default function PathsListWrapper() {
  return (
    <Col span={12}>
      <Input.Search className={styles.inputSearch} placeholder="Input search text" onSearch={() => {}} enterButton />
      
      <ListPaths />
    </Col>
  );
}
