import React, { useState } from 'react';
import { Col, Input, Row } from 'antd';
import { useSelector } from 'react-redux';

import ListPaths from 'components/ListPaths/ListPaths';
import { CloseCircleFilled } from '@ant-design/icons';

import { StoreModel } from 'model/store-model';
import { PathModel } from 'model/path-model';

import styles from './PathsListWrapper.module.css';

const PathsListWrapper = () => {
  const pathsState = useSelector((state: StoreModel) => state.paths);

  const [paths, setPaths] = useState<PathModel[]>(pathsState);
  const [isFilter, setIsFilter] = useState(false);

  const onFilterPaths = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    if (value === '') return;

    const filterPaths = pathsState.filter((path: PathModel) =>
      path.title.toLowerCase().includes(value.toLowerCase()),
    );

    setPaths(filterPaths);
    setIsFilter(true);
  };

  const onClearSearchField = () => {
    // setPaths(pathsState);
    // setIsFilter(false);
  };

  return (
    <Col span={12}>
      <Row>
        <Col span={24}>
          <Input
            className={styles.inputSearch}
            placeholder="Input search text"
            onChange={onFilterPaths}
            suffix={<CloseCircleFilled onClick={onClearSearchField} className={styles.icon} />}
          />
        </Col>
      </Row>

      <ListPaths paths={paths} isFiltered={isFilter} />
    </Col>
  );
};

export default PathsListWrapper;
