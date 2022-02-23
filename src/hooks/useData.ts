import { UserDataProps } from '../types';
import { useEffect, useState } from 'react';

export function useData(name: string) {
  const [userData, setUserData] = useState<UserDataProps>();

  function isExists(data: UserDataProps) {
    if (data.message === 'Not found') {
      console.log('aqui', data.message)
      return;
    } else {
      setUserData(data);
    }
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => isExists(data));
    // eslint-disable-next-line
  }, [name]);

  return { userData };
}
