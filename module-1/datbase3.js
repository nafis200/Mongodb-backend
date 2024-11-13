
// Type

db.test.find({
    age: {$type : "string"}
})

// age ke string ke baiye dibe

db.test.find({
    friends: {
        $type: "array"
    }
})

