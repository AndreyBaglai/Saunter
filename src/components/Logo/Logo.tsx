import React from 'react';
import { Typography } from 'antd';
import { AppstoreTwoTone } from '@ant-design/icons';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <AppstoreTwoTone twoToneColor="#9aed00" className={styles.icon} />
      <Typography.Text className={styles.text} strong={true}>
        Saunter
      </Typography.Text>
    </div>
  );
};

export default Logo;
