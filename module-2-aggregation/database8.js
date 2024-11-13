
// group

db.test.aggregate([
    
    // stage1 
    {
        $group : { _id : '$address.country', count:{$sum : 1}}
    }
])


db.test.aggregate([

    // stage1 
    {
        $group: { _id: '$address.country',
        amakwdekaoName: { $push: "$name" },
        count:{$sum:1} }
    }
])


// $$ROOT dile sob dekahy

db.test.aggregate([

    // stage1 
    {
        $group: { _id: '$address.country', count: { $sum: 1 }, amakwdekaoName: { $push: "$$ROOT" } }
    }
])


db.test.aggregate([

    // stage1 
    {
        $group: { _id: '$address.country', 
        count: { $sum: 1 }, 
        fullDocs: { $push: "$$ROOT" } }
    },
    // stage-2
    {
        $project: {
            "count":1,
            "fullDocs.name":1,
            "fullDocs.email":1,
            "fullDocs.phone":1
        }
    }
])


// Null means all id ke sum kore sob database er salary ekei group er under e ese poreche
db.test.aggregate([

    // stage1 
    {
        $group:
        {
            _id: null,
             totalSalary: {$sum: "$salary"}

        }
    },

])

// eikhane theke max,min,avg sob ber korte parba


db.test.aggregate([

    // stage1 
    {
        $group:
        {
            _id: null,
             totalSalary: {$sum: "$salary"},
             maxSalary: {$max: "$salary" },
             minSalary: {$min:"$salary"},
             avgSalary: {$avg: "$salary"}

        }
    },
    
    // stage-2
    {
        $project: {
           totalSalary: 1,
           maxSalary: 1,
           minSalary: 1,
           AverageSalary: "$avgSalary",
           RangebetweenMaxAndMin: {
               $subtract: ["$maxSalary","$minSalary"]
           }
        }
    }
])



