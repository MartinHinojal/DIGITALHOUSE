const express = require('express');
const path = require('path') 
const app = express();

const publicPath = path.resolve(__dirname, './public');

app.get('/', (req, res) => {
    res.sendFile(path.join (__dirname, './views/home.html'))    
})

app.get('/register', (req, res) => {
    res.sendFile(path.join (__dirname, './views/register.html'))    
})

app.get('/login', (req, res) => {
    res.sendFile(path.join (__dirname, './views/login.html'))    
})

app.use(express.static(publicPath) );

app.listen(3000, () => {

    console.log('Servidor inicial en puerto: http://localhost:3000')

});
