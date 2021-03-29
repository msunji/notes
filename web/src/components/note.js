import React from "react";
import Layout from "./layout";

const NoteTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
    </Layout>
  );
};

export default NoteTemplate;
