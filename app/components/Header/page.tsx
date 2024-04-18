import Link from 'next/link'
import React from 'react'
import SignInButton from '../SignInButton'

export default function Header() {
  return (
    <div className="flex w-full items-center justify-center gap-10 pt-10">
    <Link href="/home">Home</Link>
    <Link href="/server">Server</Link>
    <Link href="/client">Client</Link>
    <SignInButton/>
  </div>
  )
}
