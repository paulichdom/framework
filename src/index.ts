import { User } from './models/User';

const user = new User({});

user.set({ name: 'newName'});

user.on('change', () => {console.log('change#1')})
user.on('change', () => {console.log('change#2')})
user.on('move', () => {console.log('mooooooving')})

user.trigger('change')
