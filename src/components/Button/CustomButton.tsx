import React from 'react';
import { Button } from 'antd';

import styles from './CustomButton.module.css';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

type CustomButtonPropsType = {
  text: string;
  size: SizeType;
  htmlType?: any;
  shape?: any;
  icon?: any;
};

export default function CustomButton({
  text = '',
  size = 'middle',
  shape = 'round',
  icon,
  htmlType = 'button',
}: CustomButtonPropsType) {
  return (
    <Button
      className={styles.customBtn}
      size={size}
      type="ghost"
      shape={shape}
      icon={icon}
      htmlType={htmlType}>
      {text}
    </Button>
  );
}
