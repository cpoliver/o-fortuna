import React from "react";
import styled from "styled-components";

const getRotateTransform = ({ totalItems, index }) => {
  const rotate = index * (360 / totalItems);

  return { transform: `rotate(${rotate}deg)` };
};

const WheelContainer = styled.div`
  background: black;
  position: relative;
  flex: 1;
`;

const WheelItem = styled.div.attrs({
  style: getRotateTransform
})`
  background: white;
  color: black;
  top: 50%;
  left: 50%;
  margin: 0.5rem;
  padding: 0.5rem;
  position: absolute;
  transform-origin: top left 20rem;
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
