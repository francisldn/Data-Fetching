import { UserApi} from '../types/User';
import {getUsers, apiURL} from '../utils/apiService';
import { useQuery } from 'react-query';

const fetcher = async(apiURL:string) => {
    try {
      const {results: data} = await getUsers(apiURL)
      return data.map((user:UserApi) => ({
          id: user.id.value,
          firstName: user.name.first,
          lastName: user.name.last,
          username: user.login.username,
          email: user.email,
          phone: user.phone,
          gender: user.gender,
          age:user.dob.age,
          city: user.location.city,
          country: user.location.country,
          picture: user.picture.large,
      }))
    } catch(error) {
      throw new Error('unable to fetch data')
    }
}

const useUsers = () => {
    const {isLoading, isError, data, error} = useQuery(['users',apiURL], () => fetcher(apiURL),{suspense: true})
    
    return ({
        users: data,
        isLoading,
        isError,
        error
    })
}

export default useUsers;
