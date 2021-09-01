import React from 'react';
import { PageHeader } from 'antd';

import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import CustomButton from '../Button/CustomButton';

export default function Header() {
  return (
    <>
      <PageHeader
        className={styles.header}
        title={<Logo />}
        extra={[
          <CustomButton key="1" size="large" text="Add path"></CustomButton>
        ]}
      />
    </>
  );
}
