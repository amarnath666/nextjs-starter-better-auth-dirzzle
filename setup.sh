#!/bin/bash

# ===============================
# Next.js Drizzle Better Auth Starter Pack Setup Script
# ===============================

echo "🚀 Setting up Next.js Drizzle Better Auth Starter Pack..."

# -------------------------------
# 1️⃣ Check Node.js version
# -------------------------------
if ! command -v node &> /dev/null; then
  echo "❌ Node.js is not installed. Please install Node.js v22.15.0"
  exit 1
fi

NODE_VERSION=$(node --version)
echo "✅ Node.js version: $NODE_VERSION"

# -------------------------------
# 2️⃣ Check .env file exists
# -------------------------------
if [ ! -f .env ]; then
  echo "❌ .env file not found!"
  echo "Please create it:"
  echo "   cp .env.example .env"
  echo "Then edit .env with your actual values."
  exit 1
fi

# -------------------------------
# 3️⃣ Check required env variables using grep instead of source
# -------------------------------
echo "🔍 Checking required environment variables in .env..."

REQUIRED_VARS=(
  BETTER_AUTH_SECRET
  NEXT_PUBLIC_BETTER_AUTH_URL
  POSTGRES_URL
  GOOGLE_CLIENT_ID
  GOOGLE_CLIENT_SECRET
)

MISSING_VARS=()

for VAR in "${REQUIRED_VARS[@]}"; do
  if ! grep -q "^$VAR=" .env; then
    MISSING_VARS+=("$VAR")
  fi
done

if [ ${#MISSING_VARS[@]} -gt 0 ]; then
  echo "❌ Missing required environment variables:"
  for VAR in "${MISSING_VARS[@]}"; do
    echo "   - $VAR"
  done
  echo ""
  echo "Please update your .env file with the missing values."
  echo "Refer to the README.md for configuration instructions."
  exit 1
fi

echo "✅ All required environment variables are present in .env"

# -------------------------------
# 4️⃣ Check if Bun is installed
# -------------------------------
if ! command -v bun &> /dev/null; then
  echo "📦 Installing Bun..."
  curl -fsSL https://bun.sh/install | bash
  export PATH="$HOME/.bun/bin:$PATH"
else
  echo "✅ Bun is already installed"
fi

# -------------------------------
# 5️⃣ Install dependencies
# -------------------------------
echo "📦 Installing dependencies..."
bun install

# -------------------------------
# 6️⃣ Generate database migrations
# -------------------------------
echo "🗄️  Generating database migrations..."
bun drizzle-kit generate

# -------------------------------
# 7️⃣ Push migrations to database
# -------------------------------
echo "🔄 Applying migrations to database..."
bun drizzle-kit push

# -------------------------------
# 8️⃣ Generate Better Auth schema
# -------------------------------
echo "🔐 Generating Better Auth schema..."
npx @better-auth/cli@latest generate

echo ""
echo "🎉 Setup complete! Your application is ready to run."
echo ""
echo "🚀 Start the development server:"
echo "   bun dev"
echo ""
echo "🌐 Your app will be available at the URL you set in .env (NEXT_PUBLIC_BETTER_AUTH_URL)"
echo ""
echo "📖 Check the README.md for more info!"
