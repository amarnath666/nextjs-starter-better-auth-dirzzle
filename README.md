# Next.js Drizzle Better Auth Starter Pack

A modern authentication starter template built with Next.js, Drizzle ORM, and Better Auth. This template provides a solid foundation for building secure web applications with user authentication.

## Features

- 🔐 **Better Auth** - Modern authentication library with multiple providers
- 🗄️ **Drizzle ORM** - Type-safe database operations
- ⚡ **Next.js 14+** - React framework with App Router
- 🔑 **Google OAuth** - Social authentication support
- 🐘 **PostgreSQL** - Robust database solution (Neon, Supabase, Railway supported)
- 🎨 **TypeScript** - Type safety throughout the application
- 🎭 **shadcn/ui** - Beautiful and accessible UI components
- 🌊 **Tailwind CSS** - Utility-first CSS framework

## Getting Started

You have two options to set up the project:

### Option A: Quick Setup (Recommended)

Use the automated setup script:

```bash
# Clone the repository
git clone https://github.com/amarnath666/nextjs-starter-better-auth-dirzzle
cd nextjs-starter-better-auth-dirzzle

# First, configure your environment variables
cp .env.example .env
# Edit .env file with your actual values 

# Give permission to execute the setup script
chmod +x setup.sh

# Run the setup script
./setup.sh
```

### Option B: Manual Setup

Follow these steps to set up the project manually:

### 1. Clone the Repository

```bash
git clone https://github.com/amarnath666/nextjs-starter-better-auth-dirzzle
cd nextjs-starter-better-auth-dirzzle
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Environment Configuration

Copy the environment variables from the example file:

```bash
cp .env.example .env
```

Open the `.env` file and configure the variables.

### 4. Database Setup

> **ℹ️ Note:**  
> The database configuration in `app/lib/drizzle.ts` automatically uses `ssl: 'require'`.  
> This is needed for **cloud-hosted Postgres** (e.g., Supabase, Neon, Railway).
> 
> If you are using a **local Postgres Docker container**, you should **disable SSL**:
> ```ts
> const sql = postgres(process.env.POSTGRES_URL!)
> ```
> Instead of:
> ```ts
> const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })
> ```
> Otherwise, your local Docker Postgres might reject the connection.


#### Generate and Apply Migrations

Generate database migrations based on your schema:

```bash
bun drizzle-kit generate
```

Apply migrations to your database:

```bash
bun drizzle-kit push
```

### 5. Better Auth Schema Generation

Generate the required database schema for Better Auth:

```bash
npx @better-auth/cli@latest generate
```

### 6. Start the Development Server

```bash
bun run dev
```

Your application will be available at `http://localhost:3000`

## Database Management

### Viewing Your Database

Launch Drizzle Studio to view and manage your database:

```bash
bun drizzle-kit studio
```

This will open a web interface where you can browse your database tables, view data, and execute queries.

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun drizzle-kit generate` - Generate database migrations
- `bun drizzle-kit push` - Apply migrations to database
- `bun drizzle-kit studio` - Open Drizzle Studio

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Support

If you encounter any issues or have questions:

- Check the [Better Auth documentation](https://better-auth.com)
- Review the [Drizzle ORM documentation](https://orm.drizzle.team)
- Visit the [Next.js documentation](https://nextjs.org/docs)

---

**Happy coding!** 🚀
