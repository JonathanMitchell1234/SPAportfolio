import React from "react"
import styled from "styled-components";

const ParentStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

const FooterStyles = styled.nav`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 6px;

  /* apply position: fixed on larger screens */
  @media (min-width: 768px) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

const Footer = () => {
  return (
    <ParentStyles>
      <FooterStyles>
        <h3>Made with &#9829; by Jonathan Mitchell</h3>
      </FooterStyles>
    </ParentStyles>
  );
}


export default Footer;