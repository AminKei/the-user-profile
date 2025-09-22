export interface UserBody {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserResponse {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
}

/* llgin */
export interface LoginUser {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface UserProfile {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface UserUpdate {
  email: string;
  name: string;
}

export interface UserUpdateResponse {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}
