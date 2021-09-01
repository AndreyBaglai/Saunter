import React from 'react';
import { PageHeader } from 'antd';

import Logo from '../Logo/Logo';
import CustomButton from '../Button/CustomButton';

import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <PageHeader
        className={styles.header}
        title={<Logo />}
        extra={[
          <CustomButton key="1" size="large" text="Add path" htmlType="button"></CustomButton>
        ]}
      />
    </>
  );
}
