import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import { Proposals } from '../components'

export default function IndexPage({ data }) {
  const { proposals } = data;
  return (
    <div>
      <Helmet>
        <title>Proposals</title>
      </Helmet>
      <Proposals list={proposals.edges.map(({ proposal }) => proposal)} />
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    proposals:allMarkdownRemark(
        filter:{
          fields:{
            type:{eq:"proposal"}
          }
        }
        sort:{order:ASC, fields:[frontmatter___title]}
      ) {
        edges {
          proposal:node {
            ...ProposalFragment
          }
        }
      }
  }
`;