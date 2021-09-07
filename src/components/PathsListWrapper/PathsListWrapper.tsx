import React, { useEffect, useState } from 'react';
import { Col, Input } from 'antd';

import ListPaths from '../ListPaths/ListPaths';

import styles from './PathsListWrapper.module.css';
import { StoreModel } from 'model/store-model';
import { useSelector } from 'react-redux';
import { PathModel } from 'model/path-model';

export default function PathsListWrapper() {
  const pathsState = useSelector((state: StoreModel) => state.paths);
  const [paths, setPaths] = useState(pathsState);


  const onFilterPaths = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const filterPaths = pathsState.filter((path: PathModel) => {
      return (
        path.title.toLowerCase().includes(value.toLowerCase()) ||
        path.description.full.toLowerCase().includes(value.toLowerCase())
      );
    });
    setPaths(filterPaths);
  };

  return (
    <Col span={12}>
      <Input.Search
        className={styles.inputSearch}
        placeholder="Input search text"
        onSearch={() => {}}
        onInput={onFilterPaths}
        enterButton
      />
      <ListPaths paths={paths} />
    </Col>
  );
}
