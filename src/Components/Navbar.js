import React from 'react';
import styled from 'styled-components';
import Background from "./Components/Background.js"

const Container = styled.div`
  display: flex;
  flex-direction: row;
//   height: 75%;
  margin: auto;
`;

const CardStarted = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 4px 0;
  }

  &:after {
    content: '';
    position: absolute;
    left: -15px;
    top: -15px;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      @extra-active-color 0%,
      @extra2-active-color 100%
    );
    border-radius: 4px;
  }
`;

const AdditionalContainer = styled.div`
	width: 600px;
	height: 100%;
	// background-size: cover;
	// background-repeat: no-repeat;
`;

function MyContainer() {
  return (
    <div>
    <Background />
    <Container>
      <CardStarted className="main-content">
        This is the main content of the container.
      </CardStarted>
      <AdditionalContainer className="additional-container">
        This is the additional container.
      </AdditionalContainer>
    </Container>
    </div>
  );
}

export default MyContainer;
