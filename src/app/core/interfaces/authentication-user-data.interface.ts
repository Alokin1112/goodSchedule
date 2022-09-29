export interface AuthenticationUserRegisterData {
  user: {
    username: string,
    password: string,
    password_confirmation: string,
  }
}

export interface AuthenticationUserLoginData {
  user: {
    username: string,
    password: string,
  }
}