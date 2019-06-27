import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
  
const Video = props => (
  <Link href={'/' + props.videoTitle} >
    <a>
      <Item videoImageUrl = {props.videoImageUrl}>
        <h1>{props.videoTitle}</h1>
      </Item>
    </a>
  </Link>
);
  
const Item = styled.div`
  border: 2px solid pink;
  min-height:250px;
  background-image: url('${props => props.videoImageUrl}');
`;

export default Video;