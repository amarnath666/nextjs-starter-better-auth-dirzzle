import { db } from './drizzle'
import { UsersTable } from './schema'

async function seed() {
  console.log('🌱 Running seed...')

  // Insert multiple profiles
  await db.insert(UsersTable).values([
    {
      name: 'Guillermo Rauch',
      email: 'rauchg@vercel.com',
      image: 'https://images.ctfassets.net/e5382hct74si/2P1iOve0LZJRZWUzfXpi9r/9d4d27765764fb1ad7379d7cbe5f1043/ucxb4lHy_400x400.jpg',
    },
    {
      name: 'Lee Robinson',
      email: 'lee@vercel.com',
      image: 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg',
    },
    {
      name: 'Steven Tey',
      email: 'stey@vercel.com',
      image: 'https://images.ctfassets.net/e5382hct74si/4QEuVLNyZUg5X6X4cW4pVH/eb7cd219e21b29ae976277871cd5ca4b/profile.jpg',
    },
  ]).onConflictDoNothing() // 🗝️ avoid duplicates

  console.log('✅ Seed complete!')
}

seed()
  .then(() => {
    console.log('🌱 Done seeding!')
    process.exit(0)
  })
  .catch((err) => {
    console.error('❌ Seed failed:', err)
    process.exit(1)
  })
