import { DataAPIProps } from '../types';
import { useEffect, useState } from 'react';

export function useData(name: string) {
  const [userData, setUserData] = useState<DataAPIProps>();

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => setUserData(data));
    // eslint-disable-next-line
  }, [name]);

  return { userData };
}
