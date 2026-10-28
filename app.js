const allNames = [
    'Ava', 'Liam', 'Mia', 'Noah', 'Emma', 'Lucas', 'Sophia', 'Mason', 'Olivia', 'Ethan',
    'Isabella', 'James', 'Charlotte', 'Benjamin', 'Amelia', 'Henry', 'Harper', 'Alexander', 'Evelyn', 'Daniel',
    'Abigail', 'Michael', 'Ella', 'Matthew', 'Scarlet', 'Joseph', 'Grace', 'Samuel', 'Chloe', 'David',
    'Lily', 'Gabriel', 'Zoe', 'Christopher', 'Nora', 'Anthony', 'Aria', 'Andrew', 'Mile', 'Joshua',
    'Layla', 'John', 'Hannah', 'Ryan', 'Stella', 'Kevin', 'Aurora', 'Nathan', 'Paisley', 'Isaac',
    'Ruby', 'Thomas', 'Elena', 'Leo', 'Bella', 'Wyatt', 'Lucy', 'Julian', 'Alice', 'Hudson'
];

const randomNames = [...allNames].sort(() => Math.random() - 0.5).slice(0, 50);

randomNames.forEach((name) => {
    console.log(name);
});