
db.test.find({})
db.test.insertMany({})

// field filtering
db.test.find({gender: "Male"},{ gender: 1, name:1 })

// Project
db.test.find({gender: "Male"}).project({name:1})

// FindOne
db.test.findOne({gender: "Male"},{name:1})

// Sort value mongodb

db.test.find({age: {$gte: 40} }).sort({age: 1})



