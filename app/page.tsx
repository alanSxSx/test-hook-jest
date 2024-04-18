import Image from "next/image";
import SignInButton from "./components/SignInButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center gap-10 pt-10">
      <Link href="/home">Home</Link>
      <Link href="/server">Server</Link>
      <Link href="/client">Client</Link>
      <SignInButton/>
    </div>
  );
}
