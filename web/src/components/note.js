import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "./layout";

const client = require("@sanity/client")({
  projectId: "dq3ola7q",
  dataset: "production",
  useCdn: true,
});

const serializer = {
  types: {},
};

const NoteTemplate = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <BlockContent
        blocks={pageContext.content}
        projectId={client.projectId}
        dataset={client.production}
      />
    </Layout>
  );
};

export default NoteTemplate;
