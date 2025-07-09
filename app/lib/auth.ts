import { db } from "./drizzle";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import * as schema from "./schema";

export const auth = betterAuth({
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    database: drizzleAdapter(db, {
        provider: "pg",
        schema
    }),
     emailVerification: {
        sendOnSignUp: false, // Disable email verification
    },
    plugins: [nextCookies()]
});