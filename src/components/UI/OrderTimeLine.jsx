import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';
import OrderLabel from './OrderLabel';

const OrderTimeLine = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <Timeline
        mode={mode}
        style={{width:"40%"}}
        items={[
          {
            label: <OrderLabel title="Order Delivered" text="2023-2-25" />,
            children: 'Order Delivered',
          },
          {
            label: <OrderLabel title="Order Shipping" text="2023-2-23"/>,
            children: 'Sent a notification to the client by e-mail.',
          },
          {
            label: <OrderLabel title="Order Processing" text="2023-2-22"/>,
            children: 'Payment transaction [method: Credit Card, type: sale, amount: $22,054, status: Processing]',
          },
          {
            label: <OrderLabel title="Order Placed" text="2023-2-21"/>,
            children: 'The order was validated.',
          },
        ]}
      />
    </>
  );
};
export default OrderTimeLine;