import React from 'react';
import styled from 'styled-components';
  
const Video = (props) => {
  return(
    <a href={'/' + props.videoTitle} >
      <Item videoImageUrl = {props.videoImageUrl}>
        <h1>{props.videoTitle}</h1>
      </Item>
    </a>
  )
};
  
const Item = styled.div`
  border: 2px solid pink;
  min-height:250px;
  background-image: url('${props => props.videoImageUrl}');
`;

export default Video;