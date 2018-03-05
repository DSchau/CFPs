import React from 'react';
import styled from 'react-emotion';

import { Title } from './title';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem auto',
  backgroundColor: 'white',
  outline: '1px solid rgba(0,0,0,0.125)',
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)',
  transition: '175ms ease-in-out',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0)'
  }
});

const Content = styled.div({
  padding: '1rem'
});

export function Proposal({ excerpt, fields, frontmatter }) {
  return (
    <Container>
      <Title date={frontmatter.date}>{frontmatter.title}</Title>
      <Content
        dangerouslySetInnerHTML={{ __html: frontmatter.description || excerpt }}
      />
    </Container>
  );
}

export { Title as ProposalTitle } from './title';

export const proposalFragment = graphql`
  fragment ProposalFragment on MarkdownRemark {
    id
    excerpt(pruneLength: 250)
    html
    fields {
      slug
    }
    frontmatter {
      date(formatString: "MMMM Do, YYYY")
      description
      tags
      title
    }
  }
`;
