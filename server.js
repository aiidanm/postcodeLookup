const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const postcodeSearch = (postcode) => {
    
}


app.post('/postcode', (req, res) => {
    const {postcode} = req.body;

})