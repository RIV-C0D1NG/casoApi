const express = require('express')
const app = express()
const port = 3000

// cliente
const mysql = require('mysql2/promise');
const cors = require('cors')
const session = require('express-session')
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}))
app.use(session({
    secret:'juh1i2ue2b90091sjaisjn'
}))

// Conx DB
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'tienda3',
});
app.get('/', (req, res) => {
  res.send('Hola bebe')
})
app.get('/login',async(req,res) => {
    const datos = req.query;
    // SELECT 
try {
    const [results, fields] = await connection.query(
      "SELECT * FROM `usuario` WHERE `usuariot` = ? AND `clave` = ?",
      [datos.usuariot, datos.clave]
    );
    if (results.length > 0) {
        req.session.usuario = datos.ususario;
        res.status(200).send('inicio de sesion correcto');
    } else {
        res.status(401).send('datos incorrectos');
    }
  
    console.log(results); // resultados = filas del servidor
    console.log(fields); // campos= meta from resutados
  } catch (err) {
    console.log(err);
  }
    
} )
app.get('/validar',(req,res) =>{
    if(req.session.usuario){
        res.status(200).send('sesion validada')
    }else{
        res.status(401).send('no autorizado')
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})