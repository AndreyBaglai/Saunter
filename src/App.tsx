import React, { useState } from 'react';
import 'antd/dist/antd.css';

import { PageHeader, Button, Row, Col, Input, List, Avatar, Card } from 'antd';

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
    </>
  );
}

export default App;
