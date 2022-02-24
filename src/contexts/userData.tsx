import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import {
  UserDataContextProps,
  UserDataProps,
  UserDataProviderProps,
} from '../types';

export const UserDataContext = createContext({} as UserDataContextProps);

export function UserDataProvider({ children }: UserDataProviderProps) {
  const [userData, setUserData] = useState<UserDataProps>({} as UserDataProps);
  const userID = Cookies.get('userID');
  const infoAdd = {
    instagram: Cookies.get('instagram'),
    phone: Cookies.get('phone'),
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${userID}`)
      .then(response => response.json())
      .then(data => setUserData({data, infoAdd}));
    // eslint-disable-next-line
  }, [userID]);

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
}
