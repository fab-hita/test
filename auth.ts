import NextAuth from "next-auth"
import LinkedInProvider from "next-auth/providers/linkedin"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    })
  ],
})
