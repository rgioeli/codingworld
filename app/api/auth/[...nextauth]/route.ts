// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        return { id: "1", email: credentials.email, image: null, name: "rob" };
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  secret: "balls",
};

export const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
