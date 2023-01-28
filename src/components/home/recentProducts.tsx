import { Col, Row, Button } from 'antd';

const products = [
  {
    key: '1',
    image: require('../../assets/images/img1.jpg'),
    title: 'Fresh Dynamic milk mustard sauce 520 ml',
    price: '£2.00'
  },
  {
    key: '2',
    image: require('../../assets/images/img2.jpg'),
    title: 'Good Healthy clover pure & fresh honey 100ml',
    price: '£1.50'
  },
  {
    key: '3',
    image: require('../../assets/images/img3.jpg'),
    title: 'Mid East pizza fresh pure tomato paste 500ml',
    price: '£5.70'
  },
  {
    key: '4',
    image: require('../../assets/images/img4.jpg'),
    title: 'Sante Corn Flakes pure wheat grains 900 ML',
    price: '£4.50'
  }
]

function RecentProducts() {
  return (
    <div className="block products">
      <h1 style={{color:'#ca0245'}} >Recent Products</h1>
      <Row gutter={[24, 24]}>
        {products.map(product => {
          return (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
              <div className="content">
                <div className="image">
                  <img src={product.image} alt="product" />
                </div>
                <h3>{product.title}</h3>
                <div className='price'>{product.price}</div>
                <Button type="primary">Add to Basket</Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default RecentProducts;