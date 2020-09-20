import React from 'react';
import styled from 'styled-components';
import layoutRightLine from '../../../assets/svg/layout-right-side.svg'

  function RightLine() {
    return (
        <RightLineItem>
            <img src={layoutRightLine} alt="" className="rightLine__image"/>
        </RightLineItem>
    );
  }

  const RightLineItem = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    min-height: 100%;
    .rightLine__image {
        height: 100%;
    }
  `

export default RightLine;
