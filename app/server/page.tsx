import React from 'react'
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function Server() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/signin?callbackUrl=/server");
    }

    return (
        <div className='flex flex-col justify-center items-center text-2xl min-h-screen'>
            <span>Olá <span className='text-green-700'>{session?.user?.name}</span>. Seja bem vindo!</span>
            <span>Essa é uma página renderizada pelo lado do Servidor.</span>
            <span className='text-blue-400'>Você está autenticado com segurança!</span>
        </div>
    )
}
