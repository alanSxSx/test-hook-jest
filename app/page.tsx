import Image from "next/image";
import SignInButton from "./components/SignInButton";
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import PageHomeLogged from "./components/Content/PageHomeLogged";


export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <>
      {session ? (
        <>
         {/* <PageHomeLogged data-testid="pageHomeLoggedComponent"/> */}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen gap-12" data-testid="divHomeNotLogged">
          <Image src="/vercel.svg" className="flex items-center justify-center" width={300} height={300} alt='Logo' />
          <p className="text-6xl flex text-center">Seja bem vindo</p>
        </div>
      )}
    </>
  )
}
