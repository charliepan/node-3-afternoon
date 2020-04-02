require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const PC = require('./controller/products_controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnathorized: false}
}).then(dbInstance => {
    app.set('db',dbInstance);
}).catch(err => console.log(err));

// ENDPOINTS
app.get('/api/products', PC.getAll);
app.get('/api/products/:id', PC.getOne);
app.put('/api/products/:id',PC.update);
app.post('/api/products',PC.create);
app.delete('/api/products/:id',PC.delete);

app.listen(SERVER_PORT, ()=>{
    console.log(`Server is on port ${SERVER_PORT}`);
});