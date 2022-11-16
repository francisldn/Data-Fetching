import React, {useState, useEffect, useContext, createContext, useMemo} from 'react';
import {User, UserApi} from '../types/User';
import {getUsers, apiURL} from '../utils/apiService';

interface UserProps {
    users: User[],
    loading: boolean,
    error: boolean,
}

export const UserContext = createContext<UserProps>({
    users: [],
    loading: false,
    error: false
})

export const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getUsers(apiURL)
            .then(({results:data}) => {
                console.log({data})
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
                        }})
                    )
                })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    },[])

    const value = useMemo(() => ({
        users,
        loading,
        error
    }),[users, loading, error])

    return (
        <UserContext.Provider value={value}>
          {children}
        </UserContext.Provider>
      )
}

export function useUsers() {
    return useContext(UserContext)
}