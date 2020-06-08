import { memo } from 'react';
import PropTypes from 'prop-types';

const HasPermission = (
  {
    access,
    children,
    permissions,
  }
) => {
  if (!permissions.includes(access)) return null;

  return children;
};

HasPermission.propTypes = {
  access: PropTypes.string.isRequired,
  permissions: PropTypes.array.isRequired,
};

HasPermission.displayName = 'HasPermission';

export default memo(HasPermission);
