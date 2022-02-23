import { ReactNode } from "react";

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
  name: string;
  blog: string;
  bio: string;
}

export interface UserDataProviderProps {
  children: ReactNode;
}

export interface UserDataContextProps {
  userData?: UserDataProps;
}