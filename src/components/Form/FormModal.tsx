import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { CloseOutlined } from '@ant-design/icons';
import { Col, PageHeader, Row, Typography, Form, Input } from 'antd';

import CustomButton from '../Button/CustomButton';
import Map from '../Map/Map';

import { StoreModel } from 'model/store-model';
import { PathModel } from 'model/path-model';
import { FormDataModel } from 'model/formData-model';

import styles from './FormModal.module.css';

const rootFormContainer = document.getElementById('root-form') as HTMLElement;

const FormModal = () => {
  const [totalDistance, setTotalDistance] = useState(0);
  const [includeMarkers, setIncludeMarkers] = useState(false);

  const isOpen = useSelector((state: StoreModel) => state.form.isOpen);
  const directions = useSelector((state: StoreModel) => state.directions);
  const dispatch = useDispatch();

  const countDistance = async (destination: any, origin: any) => {
    const service = new google.maps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [{ lat: origin.lat(), lng: origin.lng() }, 'Start'],
        destinations: ['End', { lat: destination.lat(), lng: destination.lng() }],
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === 'OK') {
          setTotalDistance((state) => {
            try {
              state += response.rows[0].elements[1].distance.value / 1000;
              return Number(state.toFixed(3));
            } catch (err) {
              console.log('Failed to build routes');
              setIncludeMarkers(!includeMarkers);
              dispatch({ type: 'directions/clean', payload: [] });
              return 0;
            }
          });
        }
      },
    );
  };

  useEffect(() => {
    if (directions.length > 1) {
      const destination = directions[directions.length - 1];
      const origin = directions[directions.length - 2];
      countDistance(destination, origin);
    }
  }, [directions]);

  const onCloseForm = () => {
    setTotalDistance(0);
    dispatch({ type: 'form/close', payload: false });
    dispatch({ type: 'directions/clean', payload: [] });
  };

  const onRemoveMarkers = () => {
    setTotalDistance(0);
    setIncludeMarkers(!includeMarkers);
    dispatch({ type: 'directions/clean', payload: [] });
  };

  const onCreatePath = (formData: FormDataModel) => {
    if (totalDistance === 0) return;

    const newPath: PathModel = {
      id: nanoid(),
      title: formData.title,
      description: {
        short: formData.shortText,
        full: formData.fullText,
      },
      selected: false,
      distance: totalDistance,
      favorite: false,
      directions,
    };

    setTotalDistance(0);
    dispatch({ type: 'paths/add', payload: newPath });
    dispatch({ type: 'form/close', payload: false });
    dispatch({ type: 'directions/clean', payload: [] });
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

              <Col span={11} offset={2} className={styles.mapWrapper}>
                <Map id="mapForm" isEdit={true} isSetMarkers={includeMarkers} />
                <div className={styles.removeBtn}>
                  <CustomButton
                    text="Remove markers"
                    size="middle"
                    shape="round"
                    handleFunc={onRemoveMarkers}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>,
        rootFormContainer,
      )
    : ReactDOM.createPortal('', rootFormContainer);
};

export default FormModal;
