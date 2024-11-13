// Update
// $set just replace non-primitive

db.test.updateOne(
  {_id: ObjectId("6406ad63fc13ae5a40000065")}, 
  {
    $set: {
        age:45
    }  
      
  },
)

// add in array
db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {
        $addToSet: {
            interests: 'Playing Cricket'
        }
    }
);


// Each

// $Each use
db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065")},
    {
        $addToSet: {
         interests: {$each: ["Camera","Soundbox"] }
    }
    
    }
)

// unset
db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065")},
    {
        
        $unset: {education: 1 }
        
    }
)

// pop

db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065")},
    {
        
        $pop: {
            friends: 1
        }
    }

    // Spcefic array theke remove Pull
    db.test.updateOne(
        {_id: ObjectId("6406ad63fc13ae5a40000065")},
        {
            
            $pull: {
                friends: "Fahim Ahammed Firoz"
            }
            
        }
    )
    

    // $pullAll

db.test.updateOne(
    {_id: ObjectId("6406ad63fc13ae5a40000065")},
    {
        
        $pullAll: {
            friends: ["Najmus Sakib", "Tanmoy Parvez"]
        }
        
    }
)

// set

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065") },
    {

        $set: {
            "address.city": "dhaka"
        }


    }
)

// postional Operators

db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000065"),
    "education.major":"Biology" },
    {

        $set: {
            "education.$.major": "CSE"
        }

    }
)






