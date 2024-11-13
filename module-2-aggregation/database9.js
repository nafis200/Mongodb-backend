

// Unwind and group difference

db.test.aggregate([

    // stage1 
    {
      $unwind: "$friends"  
    },
    {
        $group:
        {
            _id: "$friends",
            count: {$sum: 1}
             

        }
    }
])


db.test.aggregate([

    // stage1 
    {
        $unwind: "$interests",
    },
    {
        $group:

        {
            _id: "$age",
            interestsPerage: { $push: "$interests" }

        }
    }

])

