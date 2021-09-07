import React from 'react';
import { Button } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

import styles from './CustomButton.module.css';

type CustomButtonPropsType = {
  text: string;
  size: SizeType;
  htmlType?: any;
  shape?: any;
  icon?: any;
  handleFunc: any;
};

const CustomButton = ({
  text = '',
  size = 'middle',
  shape = 'round',
  icon,
  htmlType = 'button',
  handleFunc = () => {},
}: CustomButtonPropsType) => {
  return (
    <Button
      onClick={handleFunc}
      className={styles.customBtn}
      size={size}
      type="ghost"
      shape={shape}
      icon={icon}
      htmlType={htmlType}>
      {text}
    </Button>
  );
};

export default CustomButton;
