
// const { MongoClient, ServerApiVersion } = require('mogodb');
// const uri = "mongodb+srv://m_aqib:19pwbcs0695@cluster0.qen96o8.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




const { default: mongoose } = require('mongoose');

const dbconnect = async ()=>{
    try{
        let conn = await mongooge.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("db connected: " + conn.connection.host)
    }
    catch(err){
        console.log("some error occured " + err.message)
    }
}

module.exports = dbconnect;