import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          email: "danny@yopmail.com",
          name: "John Doe",
          id: "1",
        };
        // const res = await fetch(
        //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
        //   {
        //     method: "POST",
        //     body: JSON.stringify({
        //       email: credentials?.email,
        //       password: credentials?.password,
        //     }),
        //     headers: { "Content-Type": "application/json" },
        //   }
        // );
        // const user = await res.json();

        // if (user.error) throw user;

        // return user;
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
