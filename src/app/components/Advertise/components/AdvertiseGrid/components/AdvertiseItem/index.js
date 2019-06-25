import React from 'react';
import styled from 'styled-components';
  
const AdvertiseItem = (props) => {
  return(
    <a href="/#">
      <Item>
      </Item>
    </a>
  )
};
  
const Item = styled.div`
  border: 2px solid pink;
  min-height:200px;
  background-image: url('${props => props.videoImageUrl}');
`;

export default AdvertiseItem;