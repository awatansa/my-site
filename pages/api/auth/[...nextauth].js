import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.SECRET,
};

const AuthProvider = (req, res) => NextAuth(req, res, options);

export default AuthProvider;
