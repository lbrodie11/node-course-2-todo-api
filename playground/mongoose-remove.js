const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// });

Todo.findOneAndRemove().then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('5b2a88bf44774a7f865aa5dd').then((todo) => {
//     console.log(todo)
// });