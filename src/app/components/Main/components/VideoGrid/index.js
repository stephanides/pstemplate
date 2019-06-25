import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Pagination from "react-js-pagination";
import Video from './components/Video';
import data from '../../../../../data.json';
  
class VideoGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      itemsCountPerPage: 1,
      totalItemsCount:1,
      videoTitle: "",
      videoImageUrl: "",
    };
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render(){
    return(
      <Container>
        <Row>
         {data.map((dataDeatil, index)=>{
            return <Col xs="12" sm="6" md="3" className="p-0" key={index}>
              <Video videoTitle = {dataDeatil.name} videoImageUrl = {dataDeatil.img}/>
            </Col>
            })}
          <div className="d-flex justify-content-center w-100 pt-3">
            <Pagination 
              itemClass="page-item" 
              linkClass="page-link"
              activePage={this.state.activePage}
              itemsCountPerPage={12}
              totalItemsCount={data.length}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange.bind(this)} 
            />
          </div>
        </Row>
      </Container>
    )
  }
}
  
  
export default VideoGrid;