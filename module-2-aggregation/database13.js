
Explain:

db.test.find({
    "_id" : ObjectId("6406ad63fc13ae5a40000065")
}).explain("executionStats")

CollScan:
db.massive.find({"email" : "gofffrye@flexigen.com"})
IXSCAN
db.getCollection("massive").createIndex({email:1})
Index Delete
db.getCollection("massive").dropIndex({email:1})

Indexing from MongoDb compass

db.getCollection("massive").find()

db.getCollection("massive").createIndex({about: "text"})

db.getCollection("massive").find({$text: { $search: "dolor" }}).project({about:1})
