import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

const Block = styled.div`
  padding-bottom: 2rem;
`;

const Updated = ({ note }) => {
  return (
    <li>
      <Link>
        {note._updatedAt} {note.title}
      </Link>
    </li>
  );
};

// markup
const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Block>
          <h1>Notes</h1>
          <p>
            Loosely based on the idea of digital gardens, here's a collection of
            my notes ranging from baking to drawing and code. Notes are
            organised thematically, but you can also check out the most recently
            updated notes right after this bit of text.
          </p>
        </Block>

        <Block>
          <h2>Recently Updated</h2>
          <ul>
            {data.allSanityNote.nodes.map((note) => (
              <Updated key={note.id} note={note} />
            ))}
          </ul>
        </Block>

        <h2>The whole lot of them</h2>
      </Layout>
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allSanityNote {
      nodes {
        slug {
          current
        }
        title
        id
        excerpt
        _updatedAt(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
