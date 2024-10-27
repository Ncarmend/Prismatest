import NextAuth from 'next-auth'
//import { AuthOptions } from '@/lib/AuthOptions'
import { authOptions } from '@/lib/AuthOptions'
//import { AuthOptions } from '../../../lib/AuthOptions'
//import GoogleProvider from 'next-auth/providers/google'
//import GitHubProvider from 'next-auth/providers/github'
// Add other providers as needed
//import { PrismaAdapter } from '@next-auth/prisma-adapter'


const handler = NextAuth(authOptions)
export { handler  as GET, handler as POST }
