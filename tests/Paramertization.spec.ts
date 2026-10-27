import test from "@playwright/test";


[
    {
        name: 'Ravi',
        email: 'ravi@example.com'
    },
    {
        name: 'John',
        email: 'john@example.com'
    }
].forEach(({ name, email }) => {
    test.describe('Parameterized describe', () => {
        test(`Parameterized test ${name}`, async ({ }) => {
            console.log(`Name: ${name}, Email: ${email}`);
        });
    });
});