import React from 'react';
import { Button, PageHeader } from 'antd';

import styles from './Header.module.css';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <>
      <PageHeader
        className={styles.header}
        title={<Logo />}
        extra={[
          <Button key="1" type="primary">
            Add path
          </Button>,
        ]}
      />
    </>
  );
}
