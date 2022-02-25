import { UserDataProps } from '../types';
import { useEffect, useState } from 'react';

export function useDataProfile(name: string | undefined) {
  const [userData, setUserData] = useState<UserDataProps>();

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {
        const userData = {
          ...data
        }

        setUserData(userData)
      });
    // eslint-disable-next-line
  }, [name]);

  return { userData };
}
