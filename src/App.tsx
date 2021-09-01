import React from 'react';

import { PageHeader, Button, Row, Col, Input, List, Avatar, Card, Form } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FormModal from './components/Form/FormModal';

function App() {
  

  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <FormModal />
    </div>
  );
}

export default App;
