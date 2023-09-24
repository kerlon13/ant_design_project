import React from 'react';
import { Button, Input } from 'antd';
const { TextArea } = Input;
const OrderTextArea = () => (
  < >
    <TextArea rows={4} placeholder='Write a review' style={{width:"40%"}} />
  </>
);
export default OrderTextArea;