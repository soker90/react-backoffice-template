import React, { memo } from 'react';

const Logo = props => (
  <img
    alt="Logo"
    src="/static/logo.png"
    {...props}
  />
);

Logo.displayName = 'Logo';

export default memo(Logo);
