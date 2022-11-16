import React from "react"
import { User } from "../types/User"

interface Props {
  user: User
}

export default function CardItem({ user }: Props) {
  const {firstName, lastName, age,  city, country, picture} = user
  return (
    <article className='flex flex-col rounded-xl w-[80%] mx-auto overflow-hidden border-gray-300 border-2 shadow-gray-800 mb-4 box-effect'>
      <div className='overflow-hidden h-32 w-32 rounded-full flex mx-auto my-8'>
        <img src={picture} alt='' className='w-full h-full object-cover' />
      </div>
      <p className=' px-8 text-xl pb-3 text-slate-500'>First Name: {firstName}</p>
      <p className=' px-8 text-xl pb-3 text-slate-500'>Last Name: {lastName}</p>
      <p className='px-8 text-xl pb-5 text-slate-500'>Age: {age}</p>
      <p className='px-8 text-xl pb-5 text-slate-500'>City: {city}</p>
      <p className='px-8 text-xl pb-5 text-slate-500'>Country: {country}</p>
    </article>
  )
}
