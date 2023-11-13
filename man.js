import Human from './human.js';

class Man extends Human {
    greeting() {
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
}

export default Man;
