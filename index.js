const express = require('express')
const cors = require('cors')
const crypto = require('crypto')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser())

let body = {
    status: false,
    activePlayers: 0,
    token: ''
}
let Queue = {
    v2: {body,capcity:2},
    v3: {body,capcity:3},
    v4: {body,capcity:4},
    v5: {body,capcity:5},
    v6: {body,capacity:6}
}
let match = {}

// 2 player Match
app.get('/assignV2',(req,res)=>{
    if(Queue.v2.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v2.body
        activePlayers++
        status = true 
        token = hash
        Queue.v2.body =  {activePlayers,status,token}
        res.send(Queue.v2.body)
        console.log('sent')
        match[token] = {output: "not ready"}
    }else{
        let {activePlayers,status,token} = Queue.v2.body
        activePlayers++ 
        Queue.v2.body =  {activePlayers,status,token}
        res.send(Queue.v2.body)
        if(activePlayers == Queue.v2.capcity){
            match[token] = {output: "ready"}
            status = false
            activePlayers = 0
            Queue.v2.body =  {activePlayers,status,token}
        }
    }
})

// 3 Player Match
app.get('/assignV3',(req,res)=>{
    if(Queue.v3.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v2.body
        activePlayers++
        status = true 
        token = hash
        Queue.v3.body =  {activePlayers,status,token}
        res.send(Queue.v3.body)
        console.log('sent')
        match[token] = {output: "not ready"}
    }else{
        let {activePlayers,status,token} = Queue.v3.body
        activePlayers++ 
        Queue.v3.body =  {activePlayers,status,token}
        res.send(Queue.v3.body)
        if(activePlayers == Queue.v3.capcity){
            match[token] = {output: "ready"}
            status = false
            activePlayers = 0
            Queue.v3.body =  {activePlayers,status,token}
        }
    }
})

// 4 Player Match
app.get('/assignV4',(req,res)=>{
    if(Queue.v4.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v4.body
        activePlayers++
        status = true 
        token = hash
        Queue.v4.body =  {activePlayers,status,token}
        res.send(Queue.v4.body)
        console.log('sent')
        match[token] = {output: "not ready"}
    }else{
        let {activePlayers,status,token} = Queue.v4.body
        activePlayers++ 
        Queue.v4.body =  {activePlayers,status,token}
        res.send(Queue.v4.body)
        if(activePlayers == Queue.v4.capcity){
            match[token] = {output: "not ready"}
            status = false
            activePlayers = 0
            Queue.v4.body =  {activePlayers,status,token}
        }
    }
})

// 5 Player Match
app.get('/assignV5',(req,res)=>{
    if(Queue.v5.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v5.body
        activePlayers++
        status = true 
        token = hash
        Queue.v5.body =  {activePlayers,status,token}
        res.send(Queue.v5.body)
        console.log('sent')
        match[token] = {output: "not ready"}
    }else{
        let {activePlayers,status,token} = Queue.v5.body
        activePlayers++ 
        Queue.v5.body =  {activePlayers,status,token}
        res.send(Queue.v5.body)
        if(activePlayers == Queue.v5.capcity){
            match[token] = {output: "ready"}
            status = false
            activePlayers = 0
            Queue.v5.body =  {activePlayers,status,token}
        }
    }
})

// 6 Player Match
app.get('/assignV6',(req,res)=>{
    if(Queue.v6.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v6.body
        activePlayers++
        status = true 
        token = hash
        Queue.v6.body =  {activePlayers,status,token}
        res.send(Queue.v6.body)
        match[token] = {output: "not ready"}
        console.log('sent')
    }else{
        let {activePlayers,status,token} = Queue.v6.body
        activePlayers++ 
        Queue.v6.body =  {activePlayers,status,token}
        res.send(Queue.v6.body)
        if(activePlayers == Queue.v6.capacity){
            match[token] = {output: "ready"}
            status = false
            activePlayers = 0
            Queue.v6.body =  {activePlayers,status,token}
        }
    }
})


app.get('/checkMatch/:token',(req,res)=>{
    const {token} = req.params
    if(match[token]){
        res.send(match[token])
    }else{
        res.send({output: "not found"})
    }
})
app.listen(3000,()=>console.log('server started'))