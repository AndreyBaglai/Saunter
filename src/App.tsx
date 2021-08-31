import React, { useState } from 'react';

import { PageHeader, Button, Row, Col, Input, List, Avatar, Card, Form } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

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
  const [paths, setPaths] = useState([
    { title: '1', body: 'Some text 1' },
    { title: '2', body: 'Some text 2' },
  ]);

  const onCreatePath = (data: any) => console.log(data);

  return (
    <>
      <PageHeader
        title="Saunter"
        extra={[
          <Button key="1" type="primary">
            Add path
          </Button>,
        ]}
      />
      <main>
        <Row>
          <Col span={12}>
            <Search placeholder="Input search text" onSearch={() => {}} enterButton />
            <List
              dataSource={paths}
              bordered={true}
              renderItem={(path: any) => (
                <List.Item key={path.body + path.path}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{path.body}</a>}
                    description={path.body}
                  />
                  <div>1.45 km</div>
                </List.Item>
              )}></List>
          </Col>

          <Col>
            <Card title="Path title" extra={<h5>1.13 km</h5>} style={{ width: '100%' }}>
              <p>Full description</p>
              <p>Map</p>
              <Button type="link">Add to favorite</Button>
              <Button type="link" danger>
                Remove path
              </Button>
            </Card>
          </Col>
        </Row>
      </main>
      <div>
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
      </div>
    </>
  );
}

export default App;
