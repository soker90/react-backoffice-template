/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkConnection } from '../actions/checkConnection';

const useIsDisconnected = () => {
  const offline = useSelector(({ common }) => common.offline);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkConnection());
  }, [offline]);

  return offline;
};

export default useIsDisconnected;
