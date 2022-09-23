export interface AuthenticationUserRegisterData {
  user: {
    username: string,
    password: string,
  }
}

export interface AuthenticationUserLoginData {
  username: string,
  password: string,
}