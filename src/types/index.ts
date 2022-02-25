import { InputHTMLAttributes, ReactElement, ReactNode } from 'react';

export interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  setValue: (value: string) => void;
}

export interface ProjectProps {
  id: number;
  name: string;
  private: boolean;
  description: string;
  homepage: string;
}

export interface UserDataProps {
  message?: string;
  id: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  blog: string;
  bio: string;
  email?: string;
  instagram?: string;
  phone?: string;
  projects?: ProjectProps[];
}

export interface UserDataProviderProps {
  children: ReactNode;
}

export interface UserDataContextProps {
  userData: UserDataProps;
}

export interface BoxContactProps {
  icon: ReactElement;
  title: string;
  description?: string;
  url?: string;
}
