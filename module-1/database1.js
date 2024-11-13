
// comparison query


// find the value less than 20
db.test.find({age:{ $gt:18 ,$lt: 30 } , {age:1}).sort({age:1})

// in and nin

db.test.find(
    {
        gender: "Female",
        age: { $nin: [18, 20, 22, 24, 40] }
    },	
    {
        age: 1,
        gender: 1
    }
).sort({ age: 1 });

db.test.find(
    {
        gender: "Male",
        age: { $nin: [18, 20, 22, 24] },
        interests: { $in: ["Cooking", "Gaming"] }
    }
)
.project({ interests: 1, age: 1, gender: 1 }) // Specify fields in an object
.sort({ age: 1 });


