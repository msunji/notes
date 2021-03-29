import React from "react";
import "normalize.css";
import "@fontsource/quicksand";
import "@fontsource/quicksand/600.css";
import styled from "styled-components";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  max-width: 700px;
  font-family: "Quicksand", "Arial", sans-serif;
  color: #524f4c;
`;

export default function Layout(props) {
  return <Container>{props.children}</Container>;
}
