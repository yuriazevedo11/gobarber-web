import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = PropTypes.shape({
  children: PropTypes.element,
}).isRequired;
