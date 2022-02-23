import { UserDataProps } from '../types';
import { useEffect, useState } from 'react';

export function useData(name: string) {
  const [userData, setUserData] = useState<UserDataProps>();

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => setUserData(data));
    // eslint-disable-next-line
  }, [name]);

  return { userData };
}
