import React, { useEffect } from 'react';

import api from '../services/api';
import useSocket from '../services/socket';
import { Container } from './styles';

export default function App() {
  const [socket] = useSocket();

  /**
   * API REQUEST TEST
   */
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/');

        if (response.status !== 200) throw Error('ERROR IN REQUEST TO API');

        alert(`API RESPONSE: ${JSON.stringify(response.data)}`);
      } catch (err) {
        alert(`[ERRO API] => ${err.message}`);
      }
    })();
  }, []);
  /*************************************************************/

  /**
   * SOCKET TEST CONNECTION
   */
  useEffect(() => {
    try {
      socket.on('receiveTest', ({ response }) => {
        alert(`SOCKET RESPONSE: ${response}`);
      });

      socket.emit('test');
    } catch (err) {
      alert(`[ERRO SOCKET] => ${err.message}`);
    }
  }, []);
  /*******************************/

  return <Container />;
}
