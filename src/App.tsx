import React from 'react';
import 'antd/dist/antd.css';

import { PageHeader, Button } from 'antd';

function App() {
  return (
    <div>
      <PageHeader title="Saunter" extra={[<Button key="1" type="primary">Add path</Button>]}/>
    </div>
  );
}

export default App;