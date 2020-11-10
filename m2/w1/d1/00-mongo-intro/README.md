



# MongoDB







```bash
# List all databases
show dbs

# Select an existing database or create a new database

use db_name
```





```bash
# Create a colleciton in the current database
db.createCollection('users')


# Add/insert documents to the colleciton
db.users.insertOne( { name: 'Anna', age: 30 } )
db.users.insertOne( { name: 'Anna', age: 40 } )
db.users.insertOne( { name: 'Anna', age: 50 } )

db.users.insertOne( 
 { name: 'Anna', age: 50, address: { city: 'bcn'}  } 
)

# We can see the collections in the databse
show collections


# Show all of the documents in the collection
db.users.find()

# Show all the documents and prettify the output
db.users.find().pretty()
```







# CRUD



### Create `.insertOne()` `.insertMany()`



```bash
db.users.insertOne( { name: 'Anna', age: 30 } )
db.users.insertOne( { name: 'Marco', age: 30 } )
db.users.insertOne( { name: 'Marco', age: 50 } )
db.users.insertOne( { name: 'Sarah', age: 30 } )
db.users.insertOne( { name: 'Sarah', age: 50 } )


db.users.insertMany( 
	[
	  { name: 'Chris', age: 35 },
	  { name: 'Bob', age: 40 },
	] 
)


db.users.find()
db.users.find().pretty()
```





### Read `.find()`

```bash
# Get all of the documents from the collection
db.users.find()

db.users.find( {} )


# Get a document by value (query)
db.users.find( { name: "Anna" }  )

db.users.find( { age: 30 }  )
```





### And keyword `$and`

```bash

db.users.find( 
	{ $and:  [ {name: "Anna"}, {age: 30}  ]    }
)
```





### OR keyword `$or`



```bash
db.users.find(
  {
   $or: [  { name: 'Anna'},  {name: "Marco"}  ]
  }
)
```





```bash
db.users.find( 
	{
		$and: [
		 { $or: [ {age: 30}, {age: 40}  ]  },
		 { $or: [ {name: "Anna"}, {name: "Marco"}  ]  },
		]
	}
)
```





age **30** & name **Anna**

age **40** & name **Anna**



age **30** & name **Marco**

age **40** & name Marco







### Keywords `$gt`,  `$gte`,  `$lt`,  `$lte`,  `$ne`,  `$nor`



```bash
# greater than - 
db.users.find( {  age: { $gt: 40 }   } )

# greater than or equal
db.users.find( {  age: { $gte: 40 }   } )


# less than - 
db.users.find( {  age: { $lt: 40 }   } )


# less than or equal
db.users.find( {  age: { $lte: 40 }   } )

# not equal
db.users.find( { age: { $ne: 40 }   } )


# not equal to any of the given expressions
# Get all users that are not Anna, and that are not 40

db.users.find(  
	{ $nor: [ { name: "Anna"}, { age: 40 }  ]    }   
)
```





### Projections

##### Syntax example

```bash
db.collectionName.find( queryObj,  projectionObj  )
```

 

##### Use

```bash
# Get only the name field
db.users.find( {age: 30}, { name: 1, _id: 0  } )
 
# Get only the age field
db.users.find( {}, {age: 1, _id: 0 } )
 
 
db.users.find( {}, { age: 1, name: 1, _id: 0 } )

db.users.find( {}, { name: 1, age: 1,  _id: 0 } )
```









### Update  - `updateOne()` , `updateMany()`, `replaceOne()`



```bash
db.collection.updateOne(  queryObj,  updateObj  )


db.collection.updateMany(  queryObj,  updateObj  )


db.collection.replaceOne( queryObj, newDocuObj )
```



```bash
# update the first matching document in the collection

db.users.updateOne( 
	{ name: "Anna" },  
	{ $set:  { name: "Annaaa - Updated 1" }    } 
)


db.users.updateOne( 
	{ name: "Anna" },  
	{ $set:  { name: "Annabbb - Updated 2" }    } 
)





# update many documents that are matching the query

const phone = { personal: "",  work: "", ext: "+34" }

db.users.updateMany(
	{ },
	{ $set:  { phone :  phone  }  }
)




db.users.updateMany(
  { age: { $lte: 40 }  },
  { $set:  { "phone.whatsapp" : ""  }    }
)



# replace one document that matches the condition
# `_id` value doesn't change




db.users.replaceOne(
  { name: 'Chris' },
  { species: 'robot', age: 'Unknown', emotions: false }
)

```









### Delete - `deleteOne()`, `deleteMany()`



```bash
# Delete a firstm matching document which matches the condition

db.users.deleteOne( { name: 'Sarah' }  )


# Delete all the documents that match the condition
db.users.deleteMany( { age:  { $gte: 50 }  } )


# DON'T TRY THIS AT HOME :)

# To delete all of document from the database
db.users.deleteMany(  { }  )
```







### Important



### `db.collection_name.drop()`

Removes only the particular collection

```bash
db.users.drop()
```





### `db.dropDatabase()`

Removes the current database

```bash
db.dropDatabase()
```

