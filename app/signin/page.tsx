'use client'
import Link from 'next/link'
import React from 'react'
import { signIn as signInNextAuth, useSession } from 'next-auth/react';


export default function signIn() {

    const {data:session} = useSession();

    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-3'>
            <span className='pt-8 text-2xl'>Olá. Seja bem Vindo !</span>
            <span className='text-2xl'>Você precisa fazer o Login Para Acessar o sistema.</span>
            <div className='flex justify-center items-center gap-3 pt-36'>
                <Link href="/" className='flex items-center justify-center bg-blue-500 text-white px-16 py-3 rounded-md hover:bg-blue-400'>Voltar</Link>
                <button className='flex items-center justify-center bg-sky-600 text-white px-16 py-3 rounded-md hover:bg-sky-500' onClick={() => signInNextAuth("google")}>Login</button>
            </div>
        </div>
    )
}
