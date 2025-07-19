const express = require('express');
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rl9p0co.mongodb.net/coffeeDB?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

   const coffeeCallection = client.db("coffeeDB").collection('coffee');

    
    //  এভাবেও করা যায়
    // const database = client.db("usersDB");
    // const userCalection = database.collection("users");
  
      //  এখানে সমস্ত ডাটা দেখানোর জন্য rid করা হয়েছে র্অথাৎ সমস্ত ডাটাকে fetch করা দেখানো যাবে
  app.get('/coffee', async(req, res)=>{
    const cursor = coffeeCallection.find();
    const result = await cursor.toArray();
    res.send(result);
  })
 
  //  এটার মাধ্যমে নির্দৃূষ্ট একটি ডাটাকে আপডেট করা যাবে
  app.put('/coffee/:id', async(req, res)=>{
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)} 
  const option = {upsert: true}
  const updateCoffee = req.body;
  
  const coffee = {
    $set:{
      name:updateCoffee.name,
      supplier:updateCoffee.supplier,
      category:updateCoffee.category,
      photo:updateCoffee.photo,
      chef:updateCoffee.chef,
      taste:updateCoffee.taste,
      details:updateCoffee.details, 
    }
  }
  const result = await coffeeCallection.updateOne(filter,coffee,option)
  res.send(result)

  })
// এখানে নির্দৃূষ্ট একটি ডাটাকে delete করতাছে
  app.delete('/coffee/:id', async(req, res)=>{
   const id = req.params.id;
   const query = {_id: new ObjectId(id)};
   const result = await coffeeCallection.deleteOne(query);
   res.send(result)
   })

// এটার মাধ্যমে নির্দৃূষ্ট একটি ডাটাকে rid করা হয়েছে র্অথাৎ নির্দৃূষ্ট ডাটাকে fetch করা দেখানো যাবে
  app.get('/coffee/:id', async(req, res)=>{
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const user = await coffeeCallection.findOne(query);
  res.send(user)
  })
// এখানে Client সাইট থেকে একটা করে ডাটা আসবে আর সেটা mongo db তে সেভ করবে
  app.post('/coffee', async(req, res)=>{
  const user = req.body;
  console.log(user)
  const reasult = await coffeeCallection.insertOne(user)
  res.send(reasult)
 })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req,res)=>{
 res.send('hello server')
})

app.listen(port, ()=>{
 console.log(`running on port server ${port}`)
})