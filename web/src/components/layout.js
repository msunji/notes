import React from "react";
import GlobalStyle from "../style/globalStyle";
import styled from "styled-components";
import "@fontsource/quicksand";
import "@fontsource/quicksand/600.css";

const Container = styled.div`
  font-family: "Quicksand", Arial, sans-serif;
  font-size: 1.3rem;
  width: 70%;
  margin-top: 250px;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
`;

export default function Layout(props) {
  return (
    <>
      <GlobalStyle />
      <Container>{props.children}</Container>
    </>
  );
}
