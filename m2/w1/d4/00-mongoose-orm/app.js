// Mongoose ODM - Object Document Mapper
// - ODM helps to enforce the structure of the docuemnts in the DB
// - We can create blueprints (called schemas) used to enforce documents structure
// - These schemas and queries are written in JS 

const mongoose = require('mongoose');



// CONNECT TO THE DATABASE   - use
// The same instance of the connnection to the DB is shared accross our application ( we need to run mongoose.connect() only once  )
mongoose
  .connect(
    'mongodb://localhost:27017/example-mongoose',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((connectionObject) => {
    console.log('Connected to the database');
  })


  // Collections in DB will be a assigned Model

  // cats  -  Cat  model  ( controller enabling access to a specific collection - Enables us to C R U D)
  // dogs  -  Dog  model  ( controller enabling access to a specific collection - Enables us to C R U D)
  

  // Instruction to mongoose to create a
  // collection `cats`
  const Cat = mongoose.model('Cat', 
    // SCHEMA OBJECT
    {
      name: String,
      color: String
    }
  )

  // // Create documents  - `create` is similar as `insertMany` in mongo shell
  // Cat.create(  { name: 'Iron Kitty Cat 2',  color: 'Ironhack black' }  )
  //   .then((createdDocument) => {
  //     console.log('createdDocument', createdDocument)
  //   })
  //   .catch((error) => {
  //     console.log('Operation error', error);  
  //   })


  // // Find documents
  // // Retrieve all of the documents from the `cats` collection
  // Cat.find()
  //   .then((result) => {
  //     console.log('result', result)
  //   })
  //   .catch((error) => {
  //     console.log('Operation error', error);
  //   });

    

// Creates collection of   `dogs` or starts managing it if it already exists
const Dog = mongoose.model('Dog',  { name: String, age: Number } );

// Create one document
// Dog.create(  { name: 'Fluffy', age: 3 }  )
//   .then( (result) => {
//     console.log('Dog.create() result', result)
//   })
//   .catch( (error) => console.log(error));

const arrayOfCats = [
  { name: 'marbles', color: 'black' },
  { name: 'fluffy', color: 'white' },
];

const arrayOfDogs = [ 
  {name: 'daisy', age: 1 },
  {name: 'bella', age: 3 },
];

const promise1 = Cat.insertMany( arrayOfCats );
const promise2 = Dog.insertMany( arrayOfDogs );


// If any of the promises are rejected only the `catch` block will run
// If all promises are fullfiled `then` block runs
Promise.all( [ promise1, promise2 ]  )
  .then( (result) => {
      console.log('result', result)
  })
  .catch( (err) => {
    console.log("Promise.all ERROR",err)
  });
  


/* 
  MONGOOSE CONNECTION EVENTS
  We can provide a callback to be run on each
  of the below database events.
*/ 

// When mongoose successfully connects to the DB
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected');
})

// When mongoose disconnects
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
})

// If the connection to DB throws any errors
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:' + err); 
})


// NODE EVENTS
// SIGINT happens when the Node process ends
process.on('SIGINT', () => {

  mongoose.connection.close( () => {
    console.log('Mongoose connection disconnected due to app termination');
  })

})



