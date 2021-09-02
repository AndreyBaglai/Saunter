import React from 'react';
import ReactDOM from 'react-dom';
import { Col, PageHeader, Row, Typography, Form, Input } from 'antd';

import { CloseOutlined } from '@ant-design/icons';
import CustomButton from '../Button/CustomButton';

import styles from './FormModal.module.css';
import { StoreModel } from '../../model/store-model';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit'
import { PathModel } from '../../model/path-model';

const rootForm = document.getElementById('root-form') as HTMLElement;

export default function FormModal() {
  const isOpen = useSelector((state: StoreModel) => state.form.isOpen);

  const dispatch = useDispatch();
  const onCloseForm = () => dispatch({ type: 'form/formClose', payload: false });
  const onCreatePath = (formData: any) => {
    console.log(formData);
    const newPath: PathModel = {
      id: nanoid(),
      title: formData.title,
      description: {
        short: formData.shortText,
        full: formData.fullText || ''
      },
      selected: false,
      distance: '4444',
      map: ''
    };
    dispatch({ type: 'paths/pathAdded', payload: newPath });
  }

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

  return isOpen
    ? ReactDOM.createPortal(
        <Row className={styles.modalWrapper}>
          <Col span={16} offset={4}>
            <PageHeader
              className={styles.modalTitle}
              title="Add new path"
              extra={[
                <CustomButton
                  handleFunc={onCloseForm}
                  key="2"
                  shape="circle"
                  icon={<CloseOutlined />}
                  size="middle"
                  text=""
                />,
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
                    name="shortText"
                    label="Short description">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item
                    className={styles.formField}
                    name="fullText"
                    label="Full description">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item>
                    <Typography.Text className={styles.distance}>Length: 1.13 km</Typography.Text>
                  </Form.Item>

                  <Form.Item>
                    <CustomButton handleFunc={onCreatePath} text="Add path" size="large" htmlType="submit" />
                  </Form.Item>
                </Form>
              </Col>
              <Col span={11} offset={2}>
                Map API
              </Col>
            </Row>
          </Col>
        </Row>,
        rootForm,
      )
    : ReactDOM.createPortal('', rootForm);
}
