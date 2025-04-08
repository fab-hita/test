import NextAuth from "next-auth"
import LinkedIn from "next-auth/providers/linkedin"
// import LinkedInProvider from "next-auth/providers/linkedin"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    LinkedIn
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_CLIENT_ID,
    //   clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    // })
  ],
})
