import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Content, Header } from '../components';
import 'normalize.css';
import '../style/global';

const TemplateWrapper = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const headerHeight = isHome ? '45vh' : '25vh';
  return (
    <div>
      <Helmet
        titleTemplate={`Dustin Schau | %s`}
        meta={[
          { name: 'description', content: 'The collection of proposals for various conferences' },
          { name: 'keywords', content: 'proposals, javascript, frontend, developer, programming' }
        ]}
      />
      <Header height={headerHeight} isHome={isHome} />
      <Content children={children} css={{ top: headerHeight }} />
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
