import { faker } from "@faker-js/faker";

export const fakeNames = Array.from(Array(400), () => faker.name.findName());
