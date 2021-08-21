const dbfstream = require('dbfstream');
var table = [];
var columnas =[];
var renglones = [];
const promise = new Promise((resolve,reject) => {
    try {
        
        var dbf = dbfstream('./proveedor.dbf', 'utf-8'); 
        //console.log('inicio lectura')
        
        dbf.on('header', header => {
            columnas.push(header.name)
        });
        
        dbf.on('data', (data) => {
                var obj = {
                    'CLIENTE':data.CLIENTE,
                    'NOMBRE':data.NOMBRE,
                    'TIPO':data.TIPO,
                }
                renglones.push(obj)
        });
        
        dbf.on('end', () => {
          table.push(columnas)
          table.push(renglones)
        });
        resolve(table)
    } catch (error) {
        reject('no se puede ejecutar')
    }
}) 

module.exports = promise;