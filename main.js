import searchFunction from './search.js';
import Human from './human.js';
import Man from './man.js';
import Woman from './woman.js';

// Створення масиву
const people = [];
for (let i = 0; i < 15; i++) {
    const isMan = Math.random() < 0.5;
    if (isMan) {
        const man = new Man(`Man${i}`, 20 + i, 60 + i, 'man');
        people.push(man);
    } else {
        const woman = new Woman(`Woman${i}`, 20 + i, 55 + i, 'woman');
        people.push(woman);
    }
}

// Виклики функції пошуку з різними параметрами
searchFunction(people, 'name', 'Man1')
    .then(result => {
        console.log('Пошук за name:Man1');
        result.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => {
        console.log('Помилка пошуку:', error);
    });

searchFunction(people, 'age', 30)
    .then(result => {
        console.log('Пошук за age:30');
        result.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => {
        console.log('Помилка пошуку:', error);
    });

searchFunction(people, 'name', 'NonexistentName')
    .then(result => {
        console.log('Пошук за name:NonexistentName');
        result.forEach(person => {
            console.log(person.greeting());
            console.log(person.getInfo('gender'));
        });
    })
    .catch(error => {
        console.log('Помилка пошуку:', error);
    });
