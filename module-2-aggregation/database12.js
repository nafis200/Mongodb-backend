
db.Orders.aggregate([
    {
        $lookup: {
               from: "test",
               localField:"userId",
               foreignField: "_id",
               as: "Nafis ahamed"
             }
    }    
  ])
  