// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// import User from "../../../models/User";
// import bcrypt from "bcryptjs";
// import { dbConnect } from "../../../lib/mongodb";

// export default NextAuth({
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials, req) {
//         dbConnect();

//         const { email, password } = credentials;

//         const user = await User.findOne({ email });

//         if (!user) {
//           throw new Error("Invalid Email or Password");
//         }

//         const isPasswordMatched = await bcrypt.compare(password, user.password);

//         if (!isPasswordMatched) {
//           throw new Error("Invalid Email or Password");
//         }

//         return user;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";

import User from "../../../models/User";
import bcrypt from "bcryptjs";
import { dbConnect } from "../../../lib/mongodb";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email });
          //console.log("User found in authorize:", user);

          if (!user) {
            throw new Error("Invalid Email or Password");
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordMatched) {
            throw new Error("Invalid Email or Password");
          }

          // Return only the user's id, email and name
          // console.log("Returning user from authorize:", {
          //   id: user._id,
          //   email: user.email,
          //   name: user.name,
          // });
          return { id: user._id, email: user.email, name: user.name };
        } catch (error) {
          throw new Error("Something went wrong");
        }
      },
      callbacks: {
        async signIn(user, account, profile) {
          console.log("User in signIn callback:", user);
          return true;
        },
        async jwt(token, user) {
          console.log("JWT callback - user:", user);
          if (user) {
            token.id = user.id;
            token.email = user.email;
            token.name = user.name;
          }
          return token;
        },
        async session(session, token) {
          console.log("Session callback - token:", token);
          if (token && token.id && token.email && token.name) {
            session.user = {
              ...session.user,
              id: token.id,
              email: token.email,
              name: token.name,
            };
          }
          return session;
        },
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
