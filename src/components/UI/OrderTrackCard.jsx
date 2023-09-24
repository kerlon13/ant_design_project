import { Card, Button } from 'antd';
import OrderTimeLine from './OrderTimeLine';
import OrderTextArea from './OrderTextArea';

function OrderTrackCard() {
    return <Card >
        <div style={{display:"flex", flexDirection:"column"}}>
            <div className='order_track'>
                <OrderTimeLine />
                <OrderTextArea /> 
            </div>
            <Button type="primary" style={{alignSelf: "flex-end"}}>Post Review</Button> 
        </div>
    </Card>
}

export default OrderTrackCard;