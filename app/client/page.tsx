'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

export default function Client() {

    const {data:session} = useSession({
        required:true
    });

  return (
    <div className='text-xl'>
    Página Client com Segurança <span className='text-blue-400'>Cliente Autenticado</span>
    </div>
  )
}
