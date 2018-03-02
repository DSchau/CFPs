import React from 'react';
import styled from 'react-emotion';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem auto',
  padding: '1rem',
  backgroundColor: 'white',
  outline: '1px solid rgba(0,0,0,0.125)',
  transition: '175ms ease-in-out',
  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0)'
  }
});

const Title = styled.h1({
  margin: 0
});

export function Proposal({ excerpt, fields, frontmatter }) {
  return (
    <Container>
      <Title>{frontmatter.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </Container>
  );
}

export const proposalFragment = graphql`
  fragment ProposalFragment on MarkdownRemark {
    id
    excerpt(pruneLength: 250)
    html
    fields {
      slug
    }
    frontmatter {
      title
    }
  }
`;
