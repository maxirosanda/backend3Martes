import { faker } from '@faker-js/faker';

 const createFakerProduct = () => {
    return {
        title: faker.commerce.productName(),
        description:faker.commerce.productDescription(),
        stock:faker.number.int({ min: 10, max: 100 }),
        price:faker.commerce.price(),
        image:faker.image.url()
    }
}

export const createFakerProducts = (number) =>{
    const products = []
    for(let i = 0; i < number; i++){
        const product = createFakerProduct()
        products.push(product)
    }
    return products
}

const createFakerUser = () => {
    return ({
        firstName:faker.person.firstName(),
        lastName:faker.person.lastName(),
        age:faker.number.int({ min: 18, max: 100 }),
        address:faker.location.streetAddress(),
        avatar:faker.image.avatar()
    })
}

export const createFakerUsers = (number) =>{
    const users = []
    for(let i = 0; i < number; i++){
        const user = createFakerUser()
        users.push(user)
    }
    return users
}
