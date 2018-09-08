import React from "react";
import styled from "styled-components";
import * as R from "ramda";

import cities from "./data";
import Wheel from "./components/Wheel";

const ITEMS = R.take(32, cities);

const AppContainer = styled.div`
  background: tomato;
  bottom: 0;
  display: flex;
  left: 0;
  margin: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export default () => (
  <AppContainer>
    <Wheel items={ITEMS} />
  </AppContainer>
);
