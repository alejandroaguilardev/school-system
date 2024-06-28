import { faker } from '@faker-js/faker';
import { min } from 'class-validator';

export class IdMother {
    static create(value?: number): number {
        return value ?? faker.number.int({ min: 1, max: 10000 });
    }
}
