import React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism-okaidia.css';

import { ProposalTitle } from '../components';
import { FADE_IN_BOTTOM } from '../style';

const Container = styled.div({
  transform: 'translateY(16px) scale(.99)',
  transformOrigin: '50% 0',
  opacity: '0',
  animation: `${FADE_IN_BOTTOM} 0.3s cubic-bezier(.39, .575, .565, 1) both`
});

const Title = styled.h1({
  fontWeight: 700,
  textAlign: 'center'
});

const ConferenceTitle = styled.h2({
  fontSize: 22,
  fontWeight: 400,
  textAlign: 'center',
  textTransform: 'uppercase',
  margin: 0
});

const Content = styled.section({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFF',
  overflow: 'hidden',
  float: 'left',
  outline: '1px solid rgba(0,0,0,0.125)',
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.25)'
});

const Post = styled.div({
  padding: '1rem'
});

export default function Proposal({ data }) {
  const { proposal } = data;
  const { conference, date, description, title, tags } = proposal.frontmatter;
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <link rel="author" href="https://dustinschau.com" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        {tags &&
          tags.length > 0 && <meta name="keywords" content={tags.join(', ')} />}
        <meta name="og:title" content={title} />
        <meta name="og:type" content="article" />
        <meta name="author" content="Dustin  Schau" />
        <meta name="article:author" content="Dustin Schau" />
        <meta name="twitter:creator" content="@schaudustin" />
      </Helmet>

      <Content>
        <ProposalTitle date={date} hover={false} title={title}>
          {conference && <ConferenceTitle>{conference}</ConferenceTitle>}
        </ProposalTitle>
        <Post dangerouslySetInnerHTML={{ __html: proposal.html }} />
      </Content>
    </Container>
  );
}

export const pageQuery = graphql`
  query ProposalBySlugQuery($slug: String!, $year: Int!) {
    proposal: markdownRemark(
      fields: { slug: { eq: $slug }, year: { eq: $year } }
    ) {
      ...ProposalFragment
    }
  }
`;
