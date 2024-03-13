import { TAuthUser } from '@/features/auth'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/libs/react-query'

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

export const useLogin = ({
  credentials,
}: {
  credentials: TLoginCredentialsDTO
}) => {
  return useMutation<TLoginResponse, Error, TLoginCredentialsDTO>({
    mutationKey: ['login', credentials],
    mutationFn: login,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['getMe'] })
    },
  })
}
