'use client'
import Image from 'next/image'
import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'


export default function SignInButton() {

    const {data:session} = useSession();


  return (
  <>
            {session ? (
                <>
                    <button
                        type='button'
                        className='text-white bg-blue-700 py-2 px-4 rounded-md hover:bg-blue-500'
                        onClick={() => signOut()}
                    >
                        Sair
                    </button>
                    <Image src="/next.svg" width={100} height={100} alt='Logo' />
                </>
            ) : (
                <>
                <button
                        type='button'
                        className='text-white bg-blue-700 py-2 px-4 rounded-md hover:bg-blue-500'
                        onClick={() => signIn("google")}
                    >
                        Login
                </button>
                </>
            )}
        </>
  )
}
