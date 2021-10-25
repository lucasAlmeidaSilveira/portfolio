export interface ProjectProps {
  id: number;
  name: string;
  private: boolean;
  description: string;
  homepage: string;
}

export interface UserDataProps {
  id: string;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  bio: string;
}