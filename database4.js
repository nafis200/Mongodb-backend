
// Array query



// Type and size er difference

// Size: use an array
// Type: use and string,number


db.test.find({
    friends: {
        $size: 4
    }
}).project({friends:1})


db.test.find({
    company: {
        $type: "null"
    }
})


// Array er 2nd no index  Cooking value kotogulo data te ache

db.test.find({
    "interests.2":"Cooking"
})

// Exact position e thakbe

db.test.find({
      interests: ["Cooking","Reading"]
})

// But I want but not position matter

db.test.find({
      interests: {$all: ["Cooking","Reading"]}
})


db.test.find({
    
    skills: {$elemMatch: {
        name: 'JAVASCRIPT',
        level: 'Intermidiate'
    } }
    
}).project({skills:1})










   

