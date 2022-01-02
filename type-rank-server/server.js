const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const Provinsi = require('./models/provinsi')

//express app
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());

// to allow cors shiz
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const PORT = 5000
const DB_PASS = 'vDB8cIHxcqi79ReN'
const DB_URI = `mongodb+srv://tamy:${DB_PASS}@cluster0.z95m2.mongodb.net/type-rank?retryWrites=true&w=majority`

let locationPosted
/*
TODO:
- ranking aja get semua, terus nnt react ator send top 5 in front kang
*/


//connect to mongodb
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err))


// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
// app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//[+] Sending data to react on start (IF REALLY NEEDED, SO MANY PPL, CHANGE TO CURSOR)
//const all = await Provinsi.find();
app.get('/all-provinces', (req, res) => {
    //res.send('Hello World!')
    Provinsi.find()
        .then(provinces => res.send(provinces))
        .catch(err => res.status(400).json('Error: ' + err))
})


app.post('/post-location', (req, res) => {
    //res.send('post-location')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    locationPosted = req.body.loc
    //locationPosted = "Sulawesi Selatan"
    console.log(locationPosted)
    Provinsi.findOne({ "name" : locationPosted }, (err, result) => {
        if (err) throw err

        //if empty, result == null
        if(result === null){
            addProvinsi(locationPosted)
        } else {
            updateProvinsi(result.name, result.count)
        }
    })
    //console.log(req.body)
})

function addProvinsi(n) {
    console.log("Provinsi " + n + " added.")
    const provinsi = new Provinsi({
        name: n,
        count: '1'
    })
    provinsi.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

function updateProvinsi(n, c) {
    var myQuery = { name: n }
    var newValues = { $inc: { count: 1 } }
    Provinsi.updateOne(myQuery, newValues, (err, res)=>{
        if (err) throw err
        console.log("Count updated");
    })
    //console.log("Provinsi " + n + " originally has " + c + " count.")
}

/* = = = = = = = = = = = = = = = = = = = = = = = = = 
locationPosted is location of user.
check database for said location:
    if empty: new Provinsi, name = locationPosted
    if !empty: update count to Provinsi.name = locationPosted
= = = = = = = = = = = = = = = = = = = = = = = = = */


// app.get('/all-leaderboard', (req, res) => {
//     Provinsi.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// app.get('/update-leaderboard', (req, res) => {
//     const provinsi = new Provinsi({
//         name: 'North Sulawesi',
//         count: '1'
//     })
//     //check leaderboard for same name
//     //if there is same name, addCount(name)
//     //else, addProvinsi(name)
//     provinsi.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
    
// })

