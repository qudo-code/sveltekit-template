// Things the app needs to run
import { PrismaClient, Prisma } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const MAX_RETRIES = 5;

async function generateFakeUsers() {
    const existingUsers = await prisma.user.findMany({});

    if(existingUsers.length > 1) {
        console.log("Skipping generation: fake users already exist");
        return;
    };

    function createRandomUser() {
        return {
            username: faker.internet.userName(),
            bio: faker.lorem.sentence(),
            name: faker.person.fullName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
        };
    }

    const users = faker.helpers.multiple(createRandomUser, {
        count: 50,
    });

    const fakeUsers = await prisma.user.createMany({
        data: users,
    });

    console.log("Generated users")
}

export const generateFake = async () => {   
    let retries = 0;

    try {
        const fakeUsers = await generateFakeUsers();
    } catch (error) {
        if(retries >= MAX_RETRIES) {
            console.log("Max retries reached, aborting seeding...");
            return;
        }

        console.log("Error seeding db, retrying...in 3 seconds", error);
        retries++;
        setTimeout(generateFake, 3000);
    }
}

generateFake();
