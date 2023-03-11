// Displays a list of all databases available on the current MongoDB server.
"show dbs"

// Switches to a specific database to start interacting with its collections.
"use <database>"

// Returns all documents in the specified collection.
"db.<collection>.find()"

// Returns a single document from the specified collection.
"db.<collection>.findOne()"

// Inserts a single document into the specified collection.
"db.<collection>.insertOne(<document>)"

// Updates a single document that matches the specified filter in the specified collection.
"db.<collection>.updateOne(<filter>, <update>)"

// Deletes a single document that matches the specified filter in the specified collection.
"db.<collection>.deleteOne(<filter>)"

// Returns the number of documents in the specified collection.
"db.<collection>.countDocuments()"

// Deletes the current database.
"db.dropDatabase()"

// Exits the MongoDB shell.
"exit"



