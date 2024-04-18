import Image from "next/image";
import SignInButton from "./components/SignInButton";
import Provider from './components/Provider';

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center gap-10 pt-10">
      <Provider>
      <button>Home</button>
      <button>Server</button>
      <button>Client</button>
      <SignInButton/>
      </Provider>
    </div>
  );
}
