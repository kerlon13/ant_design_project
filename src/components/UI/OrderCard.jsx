import React from 'react';
import { Card, Button } from 'antd';
const gridStyle = {
  width: '20%',
  textAlign: 'center',
};
const OrderCard = () => (
  <Card title="Order Status" style={{marginTop:"1rem"}}>
    <Card.Grid hoverable={true} style={gridStyle}>
        <h4>Order Place Date</h4>
        <p>11th May, 2023</p>
    </Card.Grid>
    <Card.Grid hoverable={true} style={gridStyle}>
        <h4>Order Status</h4>
        <Button type="primary" danger>
            Processing
        </Button>
    </Card.Grid>
    <Card.Grid hoverable={true} style={gridStyle}>
        <h4>Delivery Option</h4>
        <p>DHL</p>
    </Card.Grid>
    <Card.Grid hoverable={true} style={gridStyle}>
        <h4>Payment</h4>
        <p>Credit Card</p>
    </Card.Grid>
    <Card.Grid hoverable={true} style={gridStyle}>
        <h4>Order Amount</h4>
        <p>$567.99</p>
    </Card.Grid>
  </Card>
);
export default OrderCard;