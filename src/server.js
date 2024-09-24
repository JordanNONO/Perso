const express = require('express');

const app = express();

const port = 3000;


//for POST request
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Routes 
app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
} );
