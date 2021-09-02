import React from 'react';
import { PageHeader } from 'antd';
import { useDispatch } from 'react-redux';

import Logo from '../Logo/Logo';
import CustomButton from '../Button/CustomButton';

import styles from './Header.module.css';

export default function Header() {
  const dispatch = useDispatch();
  const onOpenForm = () => dispatch({ type: 'form/open', payload: true });

  return (
    <>
      <PageHeader
        className={styles.header}
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
    </>
  );
}
