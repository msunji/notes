import React from "react";
import PortableText from "@sanity/block-content-to-react";
import Layout from "./layout";

const serializer = {
  types: {},
};

const NoteTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <PortableText blocks={pageContext.content} serializers={serializer} />
    </Layout>
  );
};

export default NoteTemplate;
