import { User } from './models/User';

const user = new User({ name: 'myName', age: 20 });

const name = user.get('name');
const age = user.get('age');

console.log({ name, age });
