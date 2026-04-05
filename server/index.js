const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require("./Models/User.js")
require('dotenv').config();

// const MONGO_URL = process.env.MONGO_URL

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// mongoose.connection.on("connected", () => {
//     console.log("Connected_to_MongoDb")
// })
app.get("/", (req,res) => {
    UserModel.find()
    .then(users =>  res.json(users))
    .catch(err => res.json(err))
})


app.post('/api/create', (req,res) => {
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


app.put('/api/update/:id', (req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
     
    }).then(user => res.json(user))
    .catch(err => res.json(err))
} )

app.delete('/api/deleteuser/:id',(req,res)=> {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
   console.log("Server is Running")             
})  

// export default function handler(req, res) {
//   res.json({ message: "API working" });
// }
// module.exports =  function handler(req, res) {
//   res.json({ message: "API working" });
// }