
// addFields new data create korbe but ager data unchanged rakhe and out new data soho new database create kore


db.test.aggregate([
    // stage 1  
    {
        $match: { gender: "Male", age: { $lt: 30 } }
    },

    // stage 2 
    {
        $addFields: {
            course: 'level-2',
            eduTech: "Programming Hero next developement"
        }
    },

    // stage 3
    {
        $project: { course: 1, eduTech: 1 }
    },

    // stage 4
    {
        $out: "Course-students-1"
    }
])

// merge

db.test.aggregate([
    // stage 1  
    {
        $match: { gender: "Male", age: { $lt: 30 } }
    },

    // stage 2 
    {
        $addFields: {
            course: 'level-2',
            eduTech: "Programming Hero"
        }
    },

    // stage 3
    {
        $project: { course: 1, eduTech: 1 }
    },

    // stage 4
    {
        $merge: "test"
    }
])


