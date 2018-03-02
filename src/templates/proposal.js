import React from 'react';
import styled from 'react-emotion';

import { FADE_IN_BOTTOM } from '../style';

const Container = styled.div({
  transform: 'translateY(16px) scale(.99)',
  transformOrigin: '50% 0',
  opacity: '0',
  animation: `${FADE_IN_BOTTOM} 0.3s cubic-bezier(.39, .575, .565, 1) both`
});

const Title = styled.h1({
  textAlign: 'center'
});

const Content = styled.section({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFF',
  outline: '1px solid rgba(0,0,0,0.125)',
  padding: '1rem'
});

export default function Proposal({ data }) {
  const { proposal } = data;
  return (
    <Container>
      <Content>
        <Title>{proposal.frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: proposal.html }} />
      </Content>
    </Container>
  );
}

export const pageQuery = graphql`
  query ProposalBySlugQuery($slug: String!, $year: Int!) {
    proposal:markdownRemark(
      fields:{
        slug:{eq: $slug}
        year:{ eq: $year }
      }
    ) {
      ...ProposalFragment
    }
  }
`;
