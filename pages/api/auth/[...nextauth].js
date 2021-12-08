import Providers from "next-auth/providers";
import NextAuth from "next-auth";

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
};

const AuthProvider = (req, res) => NextAuth(req, res, options);

export default AuthProvider;
