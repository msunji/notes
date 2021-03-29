const path = require("path");

const createNotePage = async (graphql, actions, reporter) => {
  const { createPage } = actions;
  const getNoteResult = await graphql(`
    {
      allSanityNote {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (getNoteResult.errors) {
    throw getNoteResult.errors;
  }

  const noteTemplate = path.resolve(`src/components/note.js`);
  const posts = getNoteResult.data.allSanityNote.nodes || [];

  posts.forEach((node) => {
    const path = `${node.slug.current}`;

    createPage({
      path,
      component: noteTemplate,
      context: { id: node.id },
    });
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createNotePage(graphql, actions, reporter);
};
