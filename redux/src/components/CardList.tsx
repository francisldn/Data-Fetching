import React, { useEffect} from 'react';
import { User } from '../types/User';
import ErrorFallBack from './ErrorFallBack';
import Loading from './Loading';
import CardItem from './CardItem';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { getUsersData } from '../redux/userSlicer';


export default function CardList() {
    const {users, loading, error} = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUsersData())
    },[])

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center grid-cols-1 mt-8">
        {loading 
        ? <Loading />
        : error 
        ? <ErrorFallBack />
        : users.map((user:User) => (<CardItem key={user.id} user={user}/>))
        }
    </div>
  )
}