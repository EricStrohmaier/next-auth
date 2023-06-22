import { authOpions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOpions)

export {handler as GET, handler as POST}