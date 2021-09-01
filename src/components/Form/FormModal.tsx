import React from 'react';
import { Col, PageHeader, Row, Typography, Form, Input, Button } from 'antd';

import styles from './FormModal.module.css';
import { CloseOutlined } from '@ant-design/icons';
import CustomButton from '../Button/CustomButton';

export default function FormModal() {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const onCreatePath = (data: any) => console.log(data);

  return (
    <Row>
      <Col span={16} offset={4}>
        <PageHeader
          className={styles.modalTitle}
          title="Add new path"
          extra={[
            <CustomButton key="2" shape="circle" icon={<CloseOutlined />} size="middle" text="" />,
          ]}
        />
        <Row className={styles.modal}>
          <Col span={11}>
            <Form
              className={styles.form}
              layout="vertical"
              name="new-path"
              onFinish={onCreatePath}
              validateMessages={validateMessages}>
              <Form.Item
                className={styles.formField}
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                className={styles.formField}
                rules={[
                  {
                    required: true,
                  },
                ]}
                name="short-description"
                label="Short description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                className={styles.formField}
                name="full-description"
                label="Full description">
                <Input.TextArea />
              </Form.Item>
              <Form.Item>
                <Typography.Text className={styles.distance}>Length: 1.13 km</Typography.Text>
              </Form.Item>

              <Form.Item>
                <CustomButton text="Add path" size="large" htmlType="submit" />
              </Form.Item>
            </Form>
          </Col>
          <Col span={11} offset={2}>
            Map API
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
