import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AdvertiseItem from './components/AdvertiseItem';

const AdvertiseGrid = () => (
  <Container>
    <Row className="pb-4">
      <Col xs="12" sm="6" md="3" className="p-0" >
        <AdvertiseItem />
      </Col>
      <Col xs="12" sm="6" md="3" className="p-0" >
        <AdvertiseItem />
      </Col>
      <Col xs="12" sm="6" md="3" className="p-0" >
        <AdvertiseItem />
      </Col>
      <Col xs="12" sm="6" md="3" className="p-0" >
        <AdvertiseItem />
      </Col>
    </Row>
  </Container>
);


export default AdvertiseGrid;