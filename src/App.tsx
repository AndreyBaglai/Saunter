import React, { useState } from 'react';
import 'antd/dist/antd.css';

import { PageHeader, Button, Row, Col, Input, List, Avatar } from 'antd';

const { Search } = Input;

function App() {
  const [paths, setPaths] = useState([
    { title: '1', body: 'Some text 1' },
    { title: '2', body: 'Some text 2' },
  ]);

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
              renderItem={(PaymentMethodChangeEvent: any) => (
                <List.Item key={PaymentMethodChangeEvent.body + PaymentMethodChangeEvent.path}>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{PaymentMethodChangeEvent.body}</a>}
                    description={PaymentMethodChangeEvent.body}
                  />
                  <div>Content</div>
                </List.Item>
              )}></List>
          </Col>
          <Col span={12}>col-12 Right side</Col>
        </Row>
      </main>
    </>
  );
}

export default App;
