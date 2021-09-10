import React, { useEffect, useState } from 'react';
import { Col, Input, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import ListPaths from 'components/ListPaths/ListPaths';
import { CloseCircleFilled } from '@ant-design/icons';

import { StoreModel } from 'model/store-model';
import { PathModel } from 'model/path-model';

import styles from './PathsListWrapper.module.scss';
import { getPathsFromLS } from 'services/localStorage';

const PathsListWrapper = () => {
  const pathsState = useSelector((state: StoreModel) => state.paths);

  const [filterPaths, setFilterPaths] = useState<PathModel[]>(pathsState);
  const [fieldValue, setFieldValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const pathsFromLS = getPathsFromLS();
    if (pathsFromLS.length > 0) {
      setFilterPaths(pathsFromLS);
      dispatch({ type: 'paths/loadFromLS', payload: pathsFromLS });
    }
  }, []);

  useEffect(() => {
    if (fieldValue) {
      const filterPaths = pathsState.filter(
        (path: PathModel) =>
          path.title.toLowerCase().includes(fieldValue.toLowerCase()) ||
          path.description.short.toLowerCase().includes(fieldValue.toLowerCase()),
      );

      setFilterPaths(filterPaths);
    } else {
      setFilterPaths(pathsState);
    }
  }, [pathsState]);

  const onClearSearchField = () => {
    setFieldValue('');
    setFilterPaths(pathsState);
  };

  const onFilterPaths = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '') {
      onClearSearchField();
    }

    // fields by sort
    const filterPaths = pathsState.filter(
      (path: PathModel) =>
        path.title.toLowerCase().includes(value.toLowerCase()) ||
        path.description.short.toLowerCase().includes(value.toLowerCase()),
    );

    setFieldValue(value);
    setFilterPaths(filterPaths);
  };

  return (
    <Col className={`col-md-6 col-sm-12 ${styles.listWrapper}`}>
      <Row>
        <Col span={24}>
          <Input
            value={fieldValue}
            id="search"
            className={styles.inputSearch}
            placeholder="Input search text"
            onChange={onFilterPaths}
            suffix={<CloseCircleFilled onClick={onClearSearchField} className={styles.icon} />}
          />
        </Col>
      </Row>

      <ListPaths filterPaths={filterPaths} />
    </Col>
  );
};

export default PathsListWrapper;
