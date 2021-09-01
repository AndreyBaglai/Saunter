import React from 'react';
import { Button } from 'antd';

import styles from './CustomButton.module.css';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

type CustomButtonPropsType = {
  text: string;
  size: SizeType;
};

export default function CustomButton({text, size = 'middle'}: CustomButtonPropsType) {
  return (
    <Button className={styles.customBtn} size={size} type="ghost">
      {text}
    </Button>
  )
}
