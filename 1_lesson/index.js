// Написати програму, яка виводить числа від 1 до 10, використовуючи цикли for і while.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Створити масив з елементів різних типів дов 10 елементів. Вивести їх тип за допомогою typeof у консоль.

const mixedArray = [1, 'Hello', true, 3.14, null, undefined, { key: 'value' }, [1, 2, 3], function() {}, NaN];

mixedArray.forEach(element => console.log(typeof element));

for (let i = 0; i < mixedArray.length; i++) {
    console.log(typeof mixedArray[i]);
}

let index = 0;
while (index < mixedArray.length) {
    console.log(typeof mixedArray[index]);
    index++;
}

index = 0;
do {
    console.log(typeof mixedArray[index]);
    index++;
} while (index < mixedArray.length);

// Створити масив об'єктів і фільтрувати тих, кому більше 20 років

const people = [
    { name: 'Alice', age: 19, pets: ['dog'] },
    { name: 'Bob', age: 22, pets: ['cat', 'dog'] },
    { name: 'Charlie', age: 30, pets: [] },
    { name: 'Diana', age: 25, pets: ['rabbit'] }
];

const over20 = people.filter(person => person.age > 20);
console.log(over20);

// За допомогою map пройтися по масиву із завдання вище та додати кожному домашню тварину

const updatedPeople = people.map(person => {
    person.pets.push('hamster');
    return person;
});
console.log(updatedPeople);

// Створити масив із 10 елементів і заповнити його числом 42 за допомогою відповідного методу

const filledArray = new Array(10).fill(42);
console.log(filledArray);

filledArray.splice(4, 0, 'answer');
console.log(filledArray);

const foundWord = filledArray.find(element => element === 'answer');
console.log(foundWord);

// Приклади використання keys, hasOwn, values.

const someObject = {
    name: 'Alice',
    age: 30,
    occupation: 'Developer'
};

console.log(Object.keys(someObject));

console.log(Object.hasOwn(someObject, 'name')); // true
console.log(Object.hasOwn(someObject, 'salary')); // false

console.log(Object.values(someObject));
