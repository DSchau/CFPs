import React, { Component } from 'react';
import styled from 'react-emotion';
import GatsbyLink from 'gatsby-link';

import particlesConfig from '../../particles.json';

import { ANIMATE_BACKGROUND, MEDIA, THEME } from '../../style';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(#ffa81f, #d85d15)',
  backgroundSize: '250% 250%',
  backgroundColor: THEME.accentColor,
  animation: `${ANIMATE_BACKGROUND} 10s ease infinite`,
  position: 'fixed',
  transition: 'height 250ms ease-in-out',
  width: '100%',
  '.particles-js-canvas-el': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, ({ height }) => ({
  height
}));

const LogoContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  zIndex: 2,
  pointerEvents: 'none'
});

const Logo = styled.h1({
  backgroundColor: THEME.backgroundColor,
  color: 'white',
  fontFamily: `'Montserrat', sans-serif`,
  fontSize: '2rem',
  fontWeight: 700,
  padding: '0.5rem 1rem',
  margin: 0,
  textTransform: 'uppercase',
  pointerEvents: 'auto',
  [MEDIA.greaterThan('medium')]: {
    fontSize: '2.5rem'
  },
  [MEDIA.greaterThan('large')]: {
    fontSize: '4.5rem',
    padding: '1rem 2rem'
  }
});

const Title = styled.h2({
  backgroundColor: 'white',
  color: THEME.backgroundColor,
  fontFamily: `'Montserrat', sans-serif`,
  fontSize: '1.25rem',
  fontWeight: 700,
  padding: '0.375rem 0.75rem',
  margin: 0,
  textTransform: 'lowercase',
  pointerEvents: 'none',
  [MEDIA.greaterThan('medium')]: {
    fontSize: '1.75rem'
  },
  [MEDIA.greaterThan('large')]: {
    fontSize: '2.25rem',
    padding: '0.75rem 1.5rem'
  }
});

const Link = styled(GatsbyLink)({
  color: 'inherit',
  textDecoration: 'none'
});

export class Header extends Component {
  componentDidMount() {
    require.ensure(['@dschau/particles.js'], () => {
      const particles = require('@dschau/particles.js');

      particles('header', particlesConfig);
    });
  }

  render() {
    const { isHome, ...rest } = this.props;
    return (
      <Container id="header" {...rest}>
        <LogoContainer>
          <Link to="/"><Logo>Dustin <span css={{ fontWeight: 400 }}>Schau</span></Logo></Link>
        </LogoContainer>
        {isHome && <Title>Proposals</Title>}
      </Container>
    );
  }
}