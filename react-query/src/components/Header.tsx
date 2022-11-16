import React from "react"

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row w-screen justify-center'>
      <div className='w-[26rem] h-[26rem] md:ml-8'>
          <img src='users.gif' alt='logo' className='h-full w-full' />
      </div>
    </div>
  )
}

export default Header
