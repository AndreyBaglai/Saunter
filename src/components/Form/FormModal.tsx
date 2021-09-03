import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Col, PageHeader, Row, Typography, Form, Input } from 'antd';

import { CloseOutlined } from '@ant-design/icons';
import CustomButton from '../Button/CustomButton';

import styles from './FormModal.module.css';
import { StoreModel } from '../../model/store-model';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { PathModel } from '../../model/path-model';
import Map from '../Map/Map';

const rootForm = document.getElementById('root-form') as HTMLElement;
//const proxy = 'https://cors-anywhere.herokuapp.com/';

export default function FormModal() {
  const [totalDistance, setTotalDistance] = useState(0);
  const [currentDirections, setCurrentDirection] = useState([]);
  const isOpen = useSelector((state: StoreModel) => state.form.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentDirections.length > 1) {
      const destination = currentDirections[currentDirections.length - 1];
      const origin = currentDirections[currentDirections.length - 2];
      countDistance(destination, origin);
    }
  }, [currentDirections]);

  const countDistance = async (destination: any, origin: any) => {
    await fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.lat()}%2C${destination.lng()}&origins=${origin.lat()}%2C${origin.lng()}&key=${
        process.env.REACT_APP_API_KEY
      }`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.rows[0].elements[0].distance.value);
        setTotalDistance((state) => (state += data.rows[0].elements[0].distance.value));
      });
  };

  const onCloseForm = () => {
    dispatch({ type: 'form/close', payload: false });
    setTotalDistance(0);
    setCurrentDirection([]);
  };

  const onCreatePath = (formData: any) => {
    const newPath: PathModel = {
      id: nanoid(),
      title: formData.title,
      description: {
        short: formData.shortText,
        full: formData.fullText,
      },
      selected: false,
      distance: totalDistance,
      directions: currentDirections,
    };

    dispatch({ type: 'paths/add', payload: newPath });
    dispatch({ type: 'form/close', payload: false });
    setTotalDistance(0);
    setCurrentDirection([]);
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
                  onFinish={onCreatePath}>
                  <Form.Item
                    className={styles.formField}
                    name="title"
                    label="Title"
                    rules={[
                      {
                        required: true,
                        message: 'Please, input title path',
                      },
                    ]}>
                    <Input />
                  </Form.Item>

                  <Form.Item
                    className={styles.formField}
                    rules={[
                      {
                        required: true,
                        message: 'Please, input short description path',
                      },
                    ]}
                    name="shortText"
                    label="Short description">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item
                    className={styles.formField}
                    name="fullText"
                    label="Full description"
                    rules={[
                      {
                        required: true,
                        message: 'Please, input full description path',
                      },
                    ]}>
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item>
                    <Typography.Text
                      className={styles.distance}>{`Length: ${totalDistance} km`}</Typography.Text>
                  </Form.Item>

                  <Form.Item>
                    <CustomButton
                      handleFunc={() => {}}
                      text="Add path"
                      size="large"
                      htmlType="submit"
                    />
                  </Form.Item>
                </Form>
              </Col>
              <Col span={11} offset={2}>
                <Map id="mapForm" isEdit={true} onSetCoordinates={setCurrentDirection} />
              </Col>
            </Row>
          </Col>
        </Row>,
        rootForm,
      )
    : ReactDOM.createPortal('', rootForm);
}
