const express = require('express');
const app = express();
const login = require('./routes/login')
const jsonPatch = require('./routes/jsonpatch')
const thumbnail = require('./routes/thumbnail')
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/v1/api',login)
app.use('/v1/api',jsonPatch)
app.use('/v1/api',thumbnail)



let server = app.listen(PORT,()=>console.log('app has started'))

module.exports = server