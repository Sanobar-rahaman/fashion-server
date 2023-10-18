const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const  app = express()
const port = process.env.PORT ||5001;

//middlewere
app.use(cors())
app.use(express.json())

// sanobar2566
// VKWwTiCgH20R0YyM



// const uri = "mongodb+srv://<username>:<password>@cluster0.6q5hueg.mongodb.net/?retryWrites=true&w=majority";


// const uri = "mongodb+srv://sanobar2566:VKWwTiCgH20R0YyM@cluster0.6q5hueg.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://sanobar2566:VKWwTiCgH20R0YyM@cluster0.6q5hueg.mongodb.net/?retryWrites=true&w=majority";


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
    // await client.connect();

    const fashionCollection = client.db('coffeeDB').collection('fashion')

app.post('/fashion',async(req,res)=>{
    const newFashion = req.body
    console.log(newFashion);
    const result = await fashionCollection.insertOne(newFashion)
    console.log(result);
    console.log('hello');
    res.send(result);

})
app.get('/fashion',async(req,res)=>{
  const cursor = fashionCollection.find()
  const result = await cursor.toArray()
  res.send(result);
})
app.delete('/fashion/:id',async(req,res)=>{
  const id = req.params.id
  const query = {_id : new  ObjectId(id)}
  const result = await fashionCollection.deleteOne(query)
  res.send(result)

})

   


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send('Fashion successfully loded')

})
app.listen(port,()=>{
    console.log(`Fashion making serrver is running on port:${port}`);
})