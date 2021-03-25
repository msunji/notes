import * as React from "react";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  const notes = data.allSanityNote.nodes.map((note) => (
    <div key={note.id}>
      <h2>{note.title}</h2>
      <p>{note._updatedAt}</p>
      <p>{note.excerpt}</p>
    </div>
  ));

  return (
    <div>
      <h1>Here's a list of notes</h1>
      {notes}
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allSanityNote {
      nodes {
        title
        id
        excerpt
        _updatedAt(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
