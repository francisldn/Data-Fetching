import { User } from '../types/User';
import ErrorFallBack from './ErrorFallBack';
import Loading from './Loading';
import CardItem from './CardItem';
import useUsers from '../hooks/useUsers';
import { Suspense } from 'react';

export default function CardList() {
    const {users, loading, error} = useUsers()

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center grid-cols-1 mt-8">
      <Suspense fallback={<Loading />}>
        {users.map((user:User) => (<CardItem key={`${user.id}${user.email}`} user={user}/>))}
      </Suspense>
    </div>
  )
}