import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const username = 'admin'
  const password = await hash(username, 10)

  const admin = await prisma.user.upsert({
    where: { username },
    update: {},
    create: {
      username,
      password
    }
  })

  console.log({ admin })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
