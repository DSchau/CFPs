import React from 'react';
import styled from 'react-emotion';

const Container = styled.main({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  margin: '0 auto',
  padding: '1rem',
  width: '100%',
  maxWidth: 960,
});

export function Content({ children, render = children, ...rest }) {
  return (
    <Container {...rest}>{render()}</Container>
  );
}
