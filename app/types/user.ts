import { z } from "zod";

// Zod schemas for type validation
export const UserSchema = z.object({
  id: z.string(),
  name: z.string().nullable(),
  email: z.string().email(),
  image: z.string().url().nullable(),
  emailVerified: z.boolean(),
  createdAt: z.string().or(z.date()).optional(),
  updatedAt: z.string().or(z.date()).optional(),
});

export const SessionSchema = z.object({
  user: UserSchema,
  session: z.object({
    id: z.string(),
    userId: z.string(),
    expiresAt: z.string().or(z.date()),
    token: z.string(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    ipAddress: z.string().nullable().optional(),
    userAgent: z.string().nullable().optional(),
  }),
});

export const AuthResponseSchema = z.object({
  data: SessionSchema.nullable().optional(),
  error: z.string().nullable().optional(),
});

// TypeScript types
export type User = z.infer<typeof UserSchema>;
export type Session = z.infer<typeof SessionSchema>;
export type AuthResponse = z.infer<typeof AuthResponseSchema>;

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
