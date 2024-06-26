'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';

export default function Client() {

    const {data:session} = useSession({
        required:true,
        onUnauthenticated() {
            redirect("/signin?callbackUrl=/client")
        }
    });



  return (
    <div className='flex flex-col justify-center items-center text-2xl min-h-screen'>
    <span>Olá <span className='text-green-700'>{session?.user?.name}</span>. Seja bem vindo !</span>
    <span>Esssa é uma página Client.</span>
    <span className='text-blue-400'>Você está autenticado com segurança !</span>
    </div>
  )
}
