import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Col, PageHeader, Row, Typography, Form, Input, Button } from 'antd';

import { CloseOutlined, CompassOutlined } from '@ant-design/icons';
import CustomButton from '../Button/CustomButton';

import styles from './FormModal.module.css';
import { StoreModel } from '../../model/store-model';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { PathModel } from '../../model/path-model';
import { Loader } from '@googlemaps/js-api-loader';

const rootForm = document.getElementById('root-form') as HTMLElement;

export default function FormModal() {
  const isOpen = useSelector((state: StoreModel) => state.form.isOpen);
  const dispatch = useDispatch();

  const onCloseForm = () => dispatch({ type: 'form/close', payload: false });
  const onCreatePath = (formData: any) => {
    const newPath: PathModel = {
      id: nanoid(),
      title: formData.title,
      description: {
        short: formData.shortText,
        full: formData.fullText || '',
      },
      selected: false,
      distance: '4444',
      map: '',
    };

    dispatch({ type: 'paths/add', payload: newPath });
    dispatch({ type: 'form/close', payload: false });
  };

  useEffect(() => {
    let map: any;
    let poly: any;

    //      https://maps.googleapis.com/maps/api/directions/json?
    // origin=90:37.773279,-122.468780
    // &destination=37.773245,-122.469502
    // &key=YOUR_API_KEY

    const loader = new Loader({
      apiKey: `${process.env.REACT_APP_DIRECTIONS_API_KEY}`,
      version: 'weekly',
    });

    loader
      .load()
      // .then(() => {
      //   let coords = {};
      //   const success = (position: any) => {
      //     const { latitude, longitude } = position.coords;
      //     coords = { lat: latitude, lng: longitude };
      //   };

      //   navigator.geolocation.getCurrentPosition(success);
      //   return coords;
      // })
      .then(() => {
        const mapEl = document.getElementById('map') as HTMLElement;
        if (mapEl) {
          map = new google.maps.Map(mapEl, {
            center: { lat: 48.450001, lng: 34.983334 },
            zoom: 15,
          });

          poly = new google.maps.Polyline({
            strokeColor: '#000000',
            strokeOpacity: 1.0,
            strokeWeight: 3,
          });
          poly.setMap(map);

          const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          let labelIndex = 0;

          const addMarker = (e: google.maps.MapMouseEvent) => {
            const path = poly.getPath();

            // Because path is an MVCArray, we can simply append a new coordinate
            // and it will automatically appear.
            path.push(e.latLng);
            
            console.dir(poly.getPath().Be)

            // Add a new marker at the new plotted point on the polyline.
            new google.maps.Marker({
              position: e.latLng,
              title: "#" + path.getLength(),
              map: map,
            });
          };

          // Add a listener for the click event
          map.addListener('click', addMarker);
        }
      });
  });

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
                    <Typography.Text className={styles.distance}>Length: 0 km</Typography.Text>
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
                <div id="map" className={styles.mapWrapper}></div>
              </Col>
            </Row>
          </Col>
        </Row>,
        rootForm,
      )
    : ReactDOM.createPortal('', rootForm);
}
