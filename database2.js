// 

db.test.find({
    
    $or: [
      {interests:"Traveling"},
      {interests:"Cooking"}
      
    ]
      
  })
     .projection({
        interests:1
     })
     .sort({})
  

  db.test.find(
      {
          $or: [
              { "skills.name": "JAVASCRIPT" },
              { "skills.name": "PYTHON" }
          ]
      }
  )
  .project({
      skills: 1
  });


  db.test.find(
    {
        "skills.name": { $in: ["JAVASCRIPT", "PYTHON"] }
    }
)
    .project({
        skills: 1
    });


// exists

db.test.find({
    age: {$exists: true}
})

  