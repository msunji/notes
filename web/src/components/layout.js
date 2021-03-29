import React from "react";
import styled from "styled-components";
import "@fontsource/quicksand";
import "@fontsource/quicksand/600.css";

const Container = styled.div`
  font-family: "Quicksand", Arial, sans-serif;
  width: 70%;
  margin: 0 auto;
  max-width: 700px;
`;

export default function Layout(props) {
  return <Container>{props.children}</Container>;
}
