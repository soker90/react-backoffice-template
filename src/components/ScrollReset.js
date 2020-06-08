import { useEffect, memo } from 'react';
import { useLocation } from 'react-router';

const ScrollReset = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

ScrollReset.displayName = 'ScrollReset';

export default memo(ScrollReset);
