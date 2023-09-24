import React, { useState } from 'react';
import { Menu } from 'antd';

const items = [
  {
    label: 'Details',
    key: 'details',
  },
  {
    label: 'Invoice',
    key: 'invoice',
  },
  {
    label: 'Status',
    key: 'status',
  },
];

const NavBar = () => {

  const [current, setCurrent] = useState('status');
  
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default NavBar;