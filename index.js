
const _ = require('lodash');
const numbers  = process.argv.slice(2);
console.log('Введені дані:', numbers);

//створює новий масив, застосовуючи функцію до кожного елемента
const mappedNumbers = _.map(numbers, n => n * 2);
console.log('Mapped numbers:', mappedNumbers);

//створює новий масив, включаючи тільки ті елементи, для яких функція поверне true
const evenNumbers = _.filter(numbers, n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

//застосовує функцію до аккумулятора та кожного елемента масиву для зменшення його до одного значення
const sum = _.reduce(numbers, (acc, n) => acc + n, 0);
console.log('Sum:', sum);
// створює новий масив, впорядкований за результатами застосування функції до елементів
const sortedNumbers = _.sortBy(numbers);
console.log('Sorted numbers:', sortedNumbers);

// перевіряє, чи міститься значення у масиві
const hasThree = _.includes(numbers, 3);
console.log('Has three:', hasThree);