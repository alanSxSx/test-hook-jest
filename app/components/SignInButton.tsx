import Image from 'next/image'
import React from 'react'

export default function SignInButton() {
  return (
    <>
    <button type='button' className='text-white bg-blue-700 p-2 rounded-md hover:bg-blue-500'>Login</button>
    <Image src="/next.svg" width={100} height={100} alt='Logo'></Image>
    </>
  )
}
