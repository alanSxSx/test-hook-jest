'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function PageHomeLogged() {

    const { data: session } = useSession();

    const [exibirOcultar, setExibirOcultar] = useState(true);


    function exibirOuOcultarNomeEmail() {
        setExibirOcultar(!exibirOcultar)
    }

    return (
        <div className='flex flex-col items-center justify-center gap-6 mt-10' data-testid="divPageHomeLoggedComponent">
            <span className='text-2xl'>Seja Bem Vindo</span>
            <span className='text-2xl'>Seu nome é: {exibirOcultar ? '' : <b>{session?.user?.name}</b>}</span>
            <span>Seu e-mail cadastrado é: {exibirOcultar ? '' : <b>{session?.user?.email}</b>}</span>
            <span>Clique no botão para ocultar seu nome e email:</span>
            <button className='text-white bg-blue-700 py-2 px-4 rounded-md hover:bg-blue-500' onClick={exibirOuOcultarNomeEmail} data-testid="ButtonExibirOcultar">{exibirOcultar ? 'Exibir Mensagem' : 'Ocultar Mensagem'}</button>
        </div>
    )
}
