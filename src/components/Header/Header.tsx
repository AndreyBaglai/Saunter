import React from 'react';
import { PageHeader } from 'antd';
import { useDispatch } from 'react-redux';

import Logo from 'components/Logo/Logo';
import CustomButton from 'components/Button/CustomButton';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const onOpenForm = () => dispatch({ type: 'form/open', payload: true });

  return (
    <PageHeader
      className={`row ${styles.header}`}
      title={<Logo />}
      extra={[
        <CustomButton
          key="1"
          size="large"
          text="Add path"
          htmlType="button"
          handleFunc={onOpenForm}></CustomButton>,
      ]}
    />
  );
};

export default Header;
