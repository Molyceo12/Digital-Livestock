import { PrismaClient } from '../generated/prisma';


const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Prisma connected successfully');
  } catch (error) {
    console.error('❌ Connection failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

