import React from 'react';
import styled from 'react-emotion';

import { getColor } from '../../style';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem 0',
  transition: '175ms ease-in-out'
});

const Heading = styled.h1({
  color: 'white',
  textAlign: 'center',
  fontWeight: 700,
  margin: '1rem auto',
  lineHeight: 1.5,
  padding: '1rem 0',
  border: '4px solid white',
  borderLeftWidth: 0,
  borderRightWidth: 0
});

const PostDate = styled.h2({
  color: 'white',
  fontSize: 18,
  margin: 0,
  opacity: 0.75,
  textAlign: 'center'
});

export function Title({ children, date, hover, title }) {
  return (
    <Container
      css={{
        backgroundColor: getColor(title),
        ...(hover !== false
          ? {
              ':hover': {
                backgroundColor: getColor(title, 75, 35)
              }
            }
          : {})
      }}
    >
      <Heading>
        {title}
        {children}
      </Heading>
      {date && <PostDate>{date}</PostDate>}
    </Container>
  );
}
