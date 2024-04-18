import { sign } from "crypto";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { pages } from "next/dist/build/templates/app-page";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID ?? '',
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        })
      ],
      pages: {
        signIn:"/signin",
      }
  }
  
  const handler = NextAuth(authOptions)

  export {handler as GET, handler as POST}