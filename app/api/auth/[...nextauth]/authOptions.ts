import { AuthOptions } from "next-auth";
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
