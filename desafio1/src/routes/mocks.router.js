import express from "express";
import { faker } from "@faker-js/faker";

const router = express.Router();

const generateUsers = (cant) => {
        const users = Array.from({ length: cant }, () => ({
        _id: faker.database.mongodbObjectId(),
        name: faker.person.firstName(),
        age: faker.number.int({ min: 18, max: 60 }),
        email: faker.internet.email(),
        password: "coder123",
    }));
    return users;
}

const generatePets = (cant) => {
        const pets = Array.from({ length: cant }, () => ({
        _id: faker.database.mongodbObjectId(),
        name: faker.person.firstName(),
        age: faker.number.int({ min: 1, max: 20 }),
        species: faker.animal.type(),
    }));
    return pets;
}   

router.get("/mockingpets/:cant", (req, res) => {
    const { cant = 50 } = req.params;
    const pets = generatePets(cant);
    res.send(pets);
});

router.get("/mockingusers/:cant", (req, res) => {
    const { cant = 50 } = req.params;
    const users = generateUsers(cant);
    res.send(users);
})

router.post("/generateData/:cantUser/:cantPet", (req, res) => {
    const { cantUser = 50 } = req.params;
    const { cantPet = 50 } = req.params;
    const users = generateUsers(cantUser);
    const pets = generatePets(cantPet);

    res.send("Data generated successfully");
})

export default router;
