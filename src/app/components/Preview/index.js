import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Video from './components/Video';
import Advertise from './components/Advertise';

const Preview = () => (
  <Container fluid >
    <Row>
      <Col xs="8" className="p-0">
        <Video />
      </Col>
      <Col xs="4" className="p-0">
        <Advertise />
      </Col>
    </Row>
  </Container>
);


export default Preview;