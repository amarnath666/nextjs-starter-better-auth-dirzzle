import { createAuthClient } from "better-auth/client"

// Create auth client with proper typing
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:3000',
});
