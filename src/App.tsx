import React from 'react';

import { PageHeader, Button, Row, Col, Input, List, Avatar, Card, Form } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const { Search, TextArea } = Input;

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

function App() {
  const onCreatePath = (data: any) => console.log(data);

  return (
    <div className={styles.app}>
      <Header />
      <Main />
      {/* <div>
        <PageHeader
          title="Add new path"
          extra={[<Button key="2" type="primary" shape="circle" icon={<CloseOutlined />} />]}
        />
        <Row>
          <Col span={12}>
            <Form name="new-path" onFinish={onCreatePath} validateMessages={validateMessages}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item name="short-description" label="Short description">
                <TextArea />
              </Form.Item>
              <Form.Item name="full-description" label="Full description">
                <TextArea />
              </Form.Item>
              <div>Length: 1.13 km</div>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add path
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>Map form</Col>
        </Row>
      </div> */}
    </div>
  );
}

export default App;
