const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];

// choose random compliment
let randomIndex = Math.floor(Math.random() * compliments.length);
let randomCompliment = compliments[randomIndex];

res.status(200).send(randomCompliment);

});
// chosing random fortune
app.get("/api/fortune", (req,res) => {
  const fortune = ["A faithful friend is a strong defense.",
  "A friend is a present you give yourself.",
  "A hunch is creativity trying to tell you something.",
  "A smile is your personal welcome mat.",
  "Adventure can be real happiness.",
];

let randomIndexFortune = Math.floor(Math.random() * fortune.length);
let randomFortune = fortune[randomIndexFortune];

res.status(200).send(randomFortune)

.catch(error => {
  console.log(error)
})

});
let goat


app.post("/api/goat", (req,res) => {
console.log(req.body)
goat=req.body
let firstName= req.body.firstName
let lastName= req.body.lastName
let sport= req.body.sport
let rings=req.body.rings
res.status(200).send(`The best ${sport} player ever is ${firstName} ${lastName} and has ${rings}`)
})
// app.post('/api/goat',(req,res)=>{
//   userDatabase.push(req.body)
//   res.status(200).send('Succesfully added.')
// })

// });
// app.post("api/goat",(req,res)=>{
//   let{ sport,firstName,lastName}=req.body
//   if(!sport|| !firstName||lastName){
//     res.status(400).send('Missing Data')
//   } else{
//     userDatabase.push(req.body)
//     res.status(200).send("Successful")
//   }
// })


app.put('/api/goat', (req,res)=>{
  let newRings = req.body.rings
goat.rings=newRings 
// {
//     if (goat[i].rings=existingRings){
//       goat[i].rings=newRings
//       res.status(200).send('Seven rings')
//       return
//     }
//   }
  res.status(200).send(`The best ${goat.sport} player ever is ${goat.firstName} ${goat.lastName} and has ${goat.rings}`)
})
app.delete('/api/goat',(req,res)=>{
goat={}
  res.status(200).send(`You've been pwned noob`)
  .catch(error => {
    console.log(error)
  })
})

app.listen(4000, () => console.log("Server running on 4000"));
