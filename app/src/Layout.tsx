import React from "react";
import styled from "styled-components";

const TopRightImage = styled.img`
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  position: absolute;
`;

const BottomLeftImage = styled.img`
  background-repeat: no-repeat;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopRightImage src={`/top-right-background.svg`} />
      <BottomLeftImage src={`/bottom-left-background.svg`} />
      {children}
    </>
  );
};

export default Layout;
