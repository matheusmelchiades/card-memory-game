import { useEffect, useRef } from 'react';

import io from 'socket.io-client';

const useSocket = () => {
  const { current: socket } = useRef(io(process.env.REACT_APP_SOCKET_URL));

  useEffect(() => {
    return () => {
      socket && socket.removeAllListeners();
      socket && socket.close();
    };
  }, [socket]);

  return [socket];
};

export default useSocket;
