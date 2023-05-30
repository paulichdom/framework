import { User } from './models/User';

const user = new User({});

user.set({ name: 'newName'});

const name = user.get('name');
const age = user.get('age');

console.log({ name, age });
