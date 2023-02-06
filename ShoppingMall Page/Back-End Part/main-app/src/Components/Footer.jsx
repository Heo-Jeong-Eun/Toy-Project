import React from 'react'
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter>
      <p>UwangJwawang</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0px;
  background-color: #131d47;
  color: #f1f1f1;
  width: 100%;
  height: 40px;
  p {
    padding-left: 10px;
  }
`;

export default Footer