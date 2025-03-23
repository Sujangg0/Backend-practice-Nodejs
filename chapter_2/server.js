const express = require('express');
const app = express();
const PORT = 8383;

let data =  ['sujan']

// Middleware
app.use(express.json())


app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.get('/dashboard', (req, res) => {
    res.send(`
        <body style="background:pink; color:blue">
            <h1>Dashboard</h1>
            <a href="/api/data">Home</a>
        </body>
        `)
});


// API endpoints (non visual)

// CRUD-method => Create-post , Read-get, Update-put ,and Delete-delete 

app.get('/api/data', (req, res) => {
    console.log("this one was for data")
    res.send(`
        <body style="background:Black; color:Red;">
            <h1>Data:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
    `)
})

app.post('/api/data', (req, res) =>{
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
});

app.delete('/api/deldata', (req, res) => {
    data.pop()
    console.log("The last element of the array has been deleted.")
    res.sendStatus(203)
})

app.listen(PORT, () => {console.log(`Server Running in http://localhost:${PORT}`)});