import React from "react";
import styled, { keyframes } from "styled-components";

const getRotateTransform = ({ totalItems, index }) => {
  const rotate = index * (360 / totalItems);

  return { transform: `rotate(${rotate}deg)` };
};

const rotateWheel = keyframes`
  keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const WheelContainer = styled.div`
  animation: ${rotateWheel} 2s infinite;
  background: black;
  margin: 20rem;
  position: relative;
  display: flex;
  flex: 1;
`;

const WheelItem = styled.div.attrs({
  style: getRotateTransform
})`
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  transform-origin: 20rem;
  width: 10rem;
`;

const Wheel = ({ items }) => (
  <WheelContainer>
    {items.map((item, i) => (
      <WheelItem totalItems={items.length} index={i} key={i}>
        {item} {i}
      </WheelItem>
    ))}
  </WheelContainer>
);

export default Wheel;
