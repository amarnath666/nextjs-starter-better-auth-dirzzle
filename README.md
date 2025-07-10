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
- 🧭 **Navigation Bar** - Responsive navbar with authentication state
- 🚀 **Google Login Popup** - Seamless OAuth authentication flow
- 👤 **Profile Component** - User profile management interface

## Getting Started

You have two options to set up the project:

### Option A: Quick Setup (Recommended)

Use the automated setup script:

```bash
# Clone the repository
git clone https://github.com/amarnath666/nextjs-starter-better-auth-dirzzle
cd nextjs-drizzle-better-auth-starter

**Important**: You must configure your `.env` file with actual values before running the setup script. The script will validate your configuration and guide you through any missing requirements.

# First, configure your environment variables
cp .env.example .env
# Edit .env file with your actual values (see Environment Configuration section below)

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
cd nextjs-drizzle-better-auth-starter
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

Open the `.env` file and configure the following variables:

```env
# Better Auth Configuration
BETTER_AUTH_SECRET=your-secret-key-here
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# Database Configuration (choose one of the following)
POSTGRES_URL=postgresql://username:password@localhost:5432/database_name
# OR for Neon (recommended)
# POSTGRES_URL=postgresql://username:password@ep-example.us-east-1.aws.neon.tech/database_name
# OR for Supabase
# POSTGRES_URL=postgresql://postgres:password@db.example.supabase.co:5432/postgres
# OR for Railway
# POSTGRES_URL=postgresql://postgres:password@containers-us-west-1.railway.app:5432/railway

# Google OAuth Configuration
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
```

#### Environment Variables Explanation:

- **BETTER_AUTH_SECRET**: A secure random string used for signing tokens. Generate one using `openssl rand -base64 32` or use the setup script
- **NEXT_PUBLIC_BETTER_AUTH_URL**: The base URL of your application (use `http://localhost:3000` for development)
- **POSTGRES_URL**: Your PostgreSQL connection string (supports local PostgreSQL, Docker, Neon, Supabase, Railway, and other providers)
- **GOOGLE_CLIENT_SECRET** & **GOOGLE_CLIENT_ID**: OAuth credentials from Google Cloud Console (see Google OAuth Setup section)

**⚠️ Important**: All environment variables must be configured before running the application or setup script.

### 4. Google OAuth Setup

To enable Google authentication:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create OAuth 2.0 Client IDs
5. Add your domain to authorized origins
6. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs
7. Copy the Client ID and Client Secret to your `.env` file

### 5. Database Setup

#### Option A: Using Cloud Providers (Recommended)

**Neon (Recommended)**
1. Sign up at [Neon](https://neon.tech/)
2. Create a new database
3. Copy the connection string to your `.env` file

**Supabase**
1. Sign up at [Supabase](https://supabase.com/)
2. Create a new project
3. Go to Settings > Database and copy the connection string

**Railway**
1. Sign up at [Railway](https://railway.app/)
2. Create a new PostgreSQL database
3. Copy the connection string from the database dashboard

#### Option B: Docker PostgreSQL (Quick Setup)

Run PostgreSQL in a Docker container:

```bash
docker run --name postgres-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=database_name \
  -p 5432:5432 \
  -d postgres:15
```

Then use this connection string in your `.env`:
```env
POSTGRES_URL=postgresql://postgres:password@localhost:5432/database_name
```

**Note**: The database configuration in `lib/db.ts` automatically handles SSL settings. Cloud providers require SSL (`ssl: 'require'`), while local and Docker setups don't need SSL.

#### Option C: Local PostgreSQL
If you prefer to run PostgreSQL locally, ensure it's installed and running, then create a database for your project.

#### Generate and Apply Migrations

Generate database migrations based on your schema:

```bash
bun drizzle-kit generate
```

Apply migrations to your database:

```bash
bun drizzle-kit push
```

### 6. Better Auth Schema Generation

Generate the required database schema for Better Auth:

```bash
npx @better-auth/cli@latest generate
```

### 7. Start the Development Server

```bash
bun dev
```

Your application will be available at `http://localhost:3000`

## Database Management

### Viewing Your Database

Launch Drizzle Studio to view and manage your database:

```bash
bun drizzle-kit studio
```

This will open a web interface where you can browse your database tables, view data, and execute queries.

### Schema Changes

When you modify your database schema:

1. Generate new migrations:
   ```bash
   bun drizzle-kit generate
   ```

2. Apply the changes:
   ```bash
   bun drizzle-kit push
   ```

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── navbar.tsx      # Navigation bar with auth state
│   └── profile.tsx     # User profile component
├── lib/                 # Utility functions and configurations
│   └── db.ts           # Database connection with SSL handling
├── db/                  # Database schema and configurations
├── public/              # Static assets
├── .env.example         # Environment variables template
├── drizzle.config.ts    # Drizzle configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── components.json      # shadcn/ui configuration
├── docker-compose.yml   # Docker PostgreSQL setup (optional)
├── Dockerfile          # Docker configuration for the app
├── setup.sh            # Automated setup script
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun drizzle-kit generate` - Generate database migrations
- `bun drizzle-kit push` - Apply migrations to database
- `bun drizzle-kit studio` - Open Drizzle Studio

## UI Components & Styling

This starter pack includes a complete UI system built with:

### shadcn/ui Components
Pre-built, accessible components that you can copy and paste into your project:
- Button, Input, Dialog, and other form components
- Navigation and layout components
- Customizable and theme-aware

### Tailwind CSS
Utility-first CSS framework for rapid UI development:
- Responsive design utilities
- Dark mode support
- Custom color schemes
- Optimized for production

### Pre-built Components

**Navigation Bar (`components/navbar.tsx`)**
- Responsive navigation with mobile menu
- Authentication state management
- User avatar and dropdown menu
- Google login button integration

**Profile Component (`components/profile.tsx`)**
- User profile display and editing
- Account settings interface
- Profile picture upload
- Account deletion and management

## Authentication Features

This starter pack includes:

- **Email/Password Authentication**: Traditional login and registration
- **Google OAuth**: Social authentication with Google login popup
- **Session Management**: Secure session handling
- **Protected Routes**: Route protection middleware
- **User Management**: User profile and account management
- **Responsive Navigation**: Mobile-friendly navbar with auth state
- **Profile Interface**: Complete user profile management system

## Docker Deployment

### Option A: Docker with External Database

Build and run the application in Docker:

```bash
# Build the Docker image
docker build -t nextjs-drizzle-auth .

# Run the container
docker run -p 3000:3000 --env-file .env nextjs-drizzle-auth
```

### Option B: Docker Compose (Full Stack)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - POSTGRES_URL=postgresql://postgres:password@postgres:5432/database_name
      - BETTER_AUTH_SECRET=your-secret-here
      - NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
      - GOOGLE_CLIENT_ID=your-google-client-id
      - GOOGLE_CLIENT_SECRET=your-google-client-secret
    depends_on:
      - postgres

  postgres:
    image: postgres:15
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=database_name
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

Run with Docker Compose:

```bash
docker-compose up -d
```

## Deployment

### Database Setup

1. Choose a PostgreSQL provider (Neon, Supabase, Railway, or local)
2. Update the `POSTGRES_URL` in your production environment
3. Run migrations: `bun drizzle-kit push`
4. Generate Better Auth schema: `npx @better-auth/cli@latest generate`

### Environment Variables

Ensure all environment variables are properly configured in your deployment platform:

- Set `BETTER_AUTH_SECRET` to a secure random string
- Update `NEXT_PUBLIC_BETTER_AUTH_URL` to your production domain
- Configure your production database URL
- Set up Google OAuth credentials for your production domain

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

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Happy coding!** 🚀