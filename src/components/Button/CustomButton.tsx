import React from 'react';
import { Button } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
import classNames from 'classnames'; 

import styles from './CustomButton.module.scss';

interface IProps {
  text: string;
  size: SizeType;
  htmlType?: any;
  shape?: any;
  icon?: any;
  handleFunc: any;
};

const CustomButton: React.FC<IProps> = ({
  text = '',
  size = 'middle',
  shape = 'round',
  icon,
  htmlType = 'button',
  handleFunc = () => {},
}) => {
  return (
    <Button
      onClick={handleFunc}
      className={classNames(styles.customBtn)}
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
