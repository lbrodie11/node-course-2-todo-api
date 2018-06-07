const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b1951d39f4d286fe23c9bab11';
var id = '5b171c51f2517c2915cdf7e1';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => {
//     console.log(e)
// });

User.findById(id).then((user) => {
    if(!user){
        return console.log('Id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e)
})