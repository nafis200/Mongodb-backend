
// bucket limit sort

db.test.aggregate([

    // stage-1
   {
       $bucket: {
             groupBy: "$age",
             boundaries: [ 20, 40,60, 80 ],
             default: "Up to 80 age",
             output: {
               "count": { $sum: 1 },
               "karakara ache": {$push: "$name"}
             }
           }
   },
   //stage-2 
   {
       $sort:{count: -1}
   },
   //limit add also   
//   {
//       $limit: 2
//   },
   //stage-3 
    // {
    //     $project: {count:1}
    // }  
])
