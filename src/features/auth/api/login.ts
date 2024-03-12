import { TAuthUser } from '@/features/auth'

const user: TAuthUser = {
  id: '123',
  firstName: 'Nguyen',
  lastName: 'Trong',
  email: 'nguyen@gmail.com',
  bio: 'Hello my name ',
}

export type TLoginCredentialsDTO = {
  email: string
  password: string
}

export type TLoginResponse = { accessToken: string; user: TAuthUser }
export const login = async ({
  email,
  password,
}: TLoginCredentialsDTO): Promise<TLoginResponse> => {
  const accessToken = 'Bearer eyJhbGciOiJIUzUxMiJ9' + email + password

  return {
    user,
    accessToken,
  }
}
