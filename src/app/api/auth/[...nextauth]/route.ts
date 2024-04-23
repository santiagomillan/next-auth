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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log("Before parsing JSON");
        const user = await res.json();
        console.log("After parsing JSON");
        console.log("USER", user);

        if (user.error) {
          console.log("Error in user data", user.error);
          throw user;
        }

        console.log("Returning user data", user);
        return user.data.user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
