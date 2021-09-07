import React, { useState } from 'react';
import { Col, Input } from 'antd';

import ListPaths from '../ListPaths/ListPaths';

import styles from './PathsListWrapper.module.css';
import { StoreModel } from '../../model/store-model';
import { useSelector } from 'react-redux';
import { PathModel } from '../../model/path-model';

export default function PathsListWrapper() {
  let pathsState = useSelector((state: StoreModel) => state.paths);
  const [paths, setPaths] = useState(pathsState);

  const onSearch = (value: string) => {
    const filterPaths = paths.filter((path: PathModel) => {
      return (
        path.title.toLowerCase() === value.toLowerCase() ||
        path.description.full.toLowerCase() === value.toLowerCase()
      );
    });
    setPaths(filterPaths);
  };

  return (
    <Col span={12}>
      <Input.Search
        className={styles.inputSearch}
        placeholder="Input search text"
        onSearch={onSearch}
        enterButton
      />
      <ListPaths paths={paths} />
    </Col>
  );
}
