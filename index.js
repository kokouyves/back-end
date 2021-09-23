'use strict'

const express = require('express') // importer le paquet express
const PORT = 3000

const app = express() // creer une application express

const genererPageAccueil = require('./pages/index-get.js') // ecouter la logique de la page d accueil


app.get('/', async(req,res)=>{   // ecouter la methode GET et la route
    const indexHtml = await genererPageAccueil()
    res.send(indexHtml)
})

app.get('/',(req,res) =>{
    
})

app.listen(PORT,()=>{
                           //demarer le serveur
    console.log('Serveur demarre :http;//localhost:${PORT}  '); 
})