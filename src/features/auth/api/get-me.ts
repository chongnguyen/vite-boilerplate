import { TAuthUser } from '@/features/auth'
import { QueryOptions, useQuery } from '@tanstack/react-query'

const user: TAuthUser = {
  id: '123',
  firstName: 'Nguyen',
  lastName: 'Trong',
  email: 'nguyen@gmail.com',
  bio: 'Hello my name ',
}

export async function getMe(token?: string): Promise<TAuthUser> {
  console.log(token)
  return user
}

type TUseGetMeParams = {
  token: string
  config: QueryOptions<TAuthUser>
}

export const useGetMe = ({ token, config }: TUseGetMeParams) => {
  return useQuery<TAuthUser, Error>({
    queryKey: ['getMe', token],
    queryFn: () => getMe(token),
    enabled: !!token,
    ...config,
  })
}
