import { PrismaClient, Todo } from '@prisma/client';

const prisma = new PrismaClient();

export async function dropTables() {
    await prisma.Todo.deleteMany({});
    await prisma.user.deleteMany({});
}

module.exports = { dropTables };
