import { faker } from '@faker-js/faker';
import { NewTag, db, tags } from '.';
import { v4 as uuidv4 } from 'uuid';
import { exit } from 'process';

const main = async () => {
    const data: NewTag[] = [];

    for (let i = 0; i < 5; i++) {
        data.push({
            id: uuidv4(),
            title: faker.commerce.productMaterial()
        });
    }

    console.log('Seed start');
    await db.insert(tags).values(data);
    console.log('Seed done');
    return exit();
};

main();
