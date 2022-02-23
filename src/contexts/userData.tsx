import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { UserDataProps } from '../types';

interface UserDataProviderProps {
  children: ReactNode;
}

interface UserDataContextProps {
  userData?: UserDataProps;
}

export const UserDataContext = createContext({} as UserDataContextProps);

export function UserDataProvider({ children }: UserDataProviderProps) {
  const name = Cookies.get('userID');

  const [userData, setUserData] = useState<UserDataProps>();

  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => setUserData(data));
    // eslint-disable-next-line
  }, [name]);

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
}
