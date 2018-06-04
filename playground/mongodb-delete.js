// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
       return console.log('Unable to connect to MonogoDB server');
    }
    console.log('Connected to MonogoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    db.collection('Users').deleteMany({
        name: 'Laqwan Brodie'
    }).then((result) => {
        console.log(result);
    })

    //deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat Lunch'
    // }).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Users').findOneAndDelete({
    //     _id: 123
    // }).then((result) => {
    //     console.log(result);
    // })

    client.close();
});

