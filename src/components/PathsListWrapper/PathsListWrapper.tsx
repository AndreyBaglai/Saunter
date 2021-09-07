import React, { useState } from 'react';
import { Col, Input, Row } from 'antd';
import { useSelector } from 'react-redux';

import ListPaths from '../ListPaths/ListPaths';
import CustomButton from 'components/Button/CustomButton';

import { StoreModel } from 'model/store-model';
import { PathModel } from 'model/path-model';

import styles from './PathsListWrapper.module.css';

const PathsListWrapper = () => {
  const pathsState = useSelector((state: StoreModel) => state.paths);

  const [paths, setPaths] = useState<PathModel[]>(pathsState);
  const [isFilter, setIsFilter] = useState(false);

  const onFilterPaths = (value: string) => {
    const filterPaths = pathsState.filter((path: PathModel) =>
      path.title.toLowerCase().includes(value.toLowerCase()),
    );

    setPaths(filterPaths);
    setIsFilter(true);
  };

  const onSetAllPathsToList = () => {
    setPaths(pathsState);
    setIsFilter(false);
  };

  return (
    <Col span={12}>
      <Row>
        <Col span={17}>
          <Input.Search
            className={styles.inputSearch}
            placeholder="Input search text"
            onSearch={onFilterPaths}
            enterButton
          />
        </Col>
        
        <Col span={5} offset={2}>
          <CustomButton
            text="All paths"
            size="middle"
            shape="round"
            handleFunc={onSetAllPathsToList}
          />
        </Col>
      </Row>

      <ListPaths paths={paths} isFiltered={isFilter} />
    </Col>
  );
};

export default PathsListWrapper;
