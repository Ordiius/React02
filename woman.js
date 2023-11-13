import Human from './human.js';

class Woman extends Human {
    greeting() {
        return `Hi, I'm ${this.name}.`;
    }
}

export default Woman;
