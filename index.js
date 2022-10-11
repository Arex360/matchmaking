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
    token: '',
}
let Queue = {
    v2: {body,capcity:2,timestamp:0},
    v3: {body,capcity:3,timestamp:0},
    v4: {body,capcity:4,timestamp:0},
    v5: {body,capcity:5,timestamp:0},
    v6: {body,capacity:6,timestamp:0}
}
let match = {}
let timeoutv2 = {}
let timeoutv3 = {}
let timeoutv4 = {}
let timeoutv5 = {}
let timeoutv6 = {}
// 2 player Match
app.get('/assignV2',(req,res)=>{
    if(Queue.v2.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        hash = hash.slice(0,5)
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v2.body
        activePlayers++
        status = true 
        token = hash
        Queue.v2.body =  {activePlayers,status,token}
        res.send(Queue.v2.body)
        console.log('sent')
        match[token] = {output: "not ready"}
        Queue.v2.timestamp = Math.floor(Math.floor(Date.now() / 1000))
        timeoutv2= setTimeout(()=>{
            let {activePlayers,status,token,expired} = Queue.v2.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v2.body = {activePlayers,status,token} 
            console.log('resetted')
        },30000)
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
            console.log('resetted')
        }
        clearTimeout(timeoutv2)
        timeoutv2 = setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v2.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v2.body = {activePlayers,status,token}
        },30000)
    }
})

// 3 Player Match
app.get('/assignV3',(req,res)=>{
    if(Queue.v3.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        hash = hash.slice(0,5)
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v2.body
        activePlayers++
        status = true 
        token = hash
        Queue.v3.body =  {activePlayers,status,token}
        res.send(Queue.v3.body)
        console.log('sent')
        match[token] = {output: "not ready",expired:false}
        timeoutv3= setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v3.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v3.body = {activePlayers,status,token}
            console.log('resetted')
        },30000)
    }else{
        let {activePlayers,status,token} = Queue.v3.body
        activePlayers++ 
        Queue.v3.body =  {activePlayers,status,token}
        res.send(Queue.v3.body)
        if(activePlayers == Queue.v3.capcity){
            match[token] = {output: "ready",expired:false}
            status = false
            activePlayers = 0
            Queue.v3.body =  {activePlayers,status,token}
        }
        clearTimeout(timeoutv3)
        timeoutv3 = setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v3.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v3.body = {activePlayers,status,token}
        },30000)
    }
})

// 4 Player Match
app.get('/assignV4',(req,res)=>{
    if(Queue.v4.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        hash = hash.slice(0,5)
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v4.body
        activePlayers++
        status = true 
        token = hash
        Queue.v4.body =  {activePlayers,status,token}
        res.send(Queue.v4.body)
        console.log('sent')
        match[token] = {output: "not ready",expired:false}
        timeoutv4 = setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v4.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v4.body = {activePlayers,status,token}
        },30000)
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
        clearTimeout(timeoutv4)
        timeoutv4 = setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v4.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v4.body = {activePlayers,status,token}
        },30000)
    }
})

// 5 Player Match
app.get('/assignV5',(req,res)=>{
    if(Queue.v5.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        hash = hash.slice(0,5)
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v5.body
        activePlayers++
        status = true 
        token = hash
        Queue.v5.body =  {activePlayers,status,token}
        res.send(Queue.v5.body)
        console.log('sent')
        match[token] = {output: "not ready",expired:false}
        timeoutv5 = setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v5.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v5.body = {activePlayers,status,token}
        },30000)
    }else{
        let {activePlayers,status,token} = Queue.v5.body
        activePlayers++ 
        Queue.v5.body =  {activePlayers,status,token}
        res.send(Queue.v5.body)
        if(activePlayers == Queue.v5.capcity){
            match[token] = {output: "ready",expired:false}
            status = false
            activePlayers = 0
            Queue.v5.body =  {activePlayers,status,token}
        }
        clearTimeout(timeoutv5)
        timeoutv5 = setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v5.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v5.body = {activePlayers,status,token}
        },30000)
    }
})

// 6 Player Match
app.get('/assignV6',(req,res)=>{
    if(Queue.v6.body.status == false){
        console.log('creating new hash')
        let hash = crypto.createHash('md5').update(Math.floor(Date.now() / 1000).toString()).digest("hex")
        hash = hash.slice(0,5)
        console.log(Math.floor(Date.now() / 1000))
        let {activePlayers,status,token} = Queue.v6.body
        activePlayers++
        status = true 
        token = hash
        Queue.v6.body =  {activePlayers,status,token}
        res.send(Queue.v6.body)
        match[token] = {output: "not ready",expired:false}
        console.log('sent')
        timeoutv5 = setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v6.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v6.body = {activePlayers,status,token}
        },30000)
    }else{
        let {activePlayers,status,token} = Queue.v6.body
        activePlayers++ 
        Queue.v6.body =  {activePlayers,status,token}
        res.send(Queue.v6.body)
        if(activePlayers == Queue.v6.capacity){
            match[token] = {output: "ready",expired:false}
            status = false
            activePlayers = 0
            Queue.v6.body =  {activePlayers,status,token}
        }
        clearTimeout(timeoutv6)
        timeoutv6 = setTimeout(()=>{
            let {activePlayers,status,token} = Queue.v6.body
            match[token].expired = true
            expired = true
            token = ''
            activePlayers=0
            status= false
            Queue.v6.body = {activePlayers,status,token}
        },30000)
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