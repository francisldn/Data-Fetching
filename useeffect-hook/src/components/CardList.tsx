import React, {useState, useEffect} from 'react';
import { UserApi, User } from '../types/User';
import ErrorFallBack from './ErrorFallBack';
import Loading from './Loading';
import CardItem from './CardItem';
import { apiURL, getUsers } from '../utils/apiService'

export default function CardList() {
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)

    useEffect(() => { 
        setLoading(true)  
        getUsers(apiURL)
            .then(({results:data}) => {
                setUsers(
                data.map((user:UserApi) => {
                    return {
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
                    }}))
                })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    },[])

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center grid-cols-1 mt-8">
        {isLoading 
        ? <Loading />
        : isError 
        ? <ErrorFallBack />
        : users.map((user:User) => (<CardItem key={user.id} user={user}/>))
        }
    </div>
  )
}