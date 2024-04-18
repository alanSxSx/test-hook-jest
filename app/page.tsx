import Image from "next/image";
import SignInButton from "./components/SignInButton";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center gap-10 pt-10">

      <button>Home</button>
      <button>Server</button>
      <button>Client</button>
      <SignInButton/>

    </div>
  );
}
