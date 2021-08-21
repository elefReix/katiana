const express = require('express');
var reader = require('./reader');
var dbfTable = [];
const app = express();
const port = 3000;

//ruta vacia
app.get('/',(req,res) => {
    res.send('ruta sin datos')
})

//ruta dbf reader
app.get('/readDbf',(req,res) => {
    reader.then(data => {
        console.log(JSON.stringify(data))
        res.status(200).json({'data':data});
    }).catch(
        console.log('no se puede asasasa')
    );
});

//
app.use(express.static(__dirname+'/public'))

app.use((req,res,next) =>{
    res.status(404).sendFile(__dirname+'/public/not_found.html')
})

//inicializa server
app.listen(port, () => {
    console.log('nuevo server ',port);
});


//805552241155670A00UPES