const express = require('express')
const app = express()
const uuid = require('uuid/v4')

app.use(express.json())


let bounties = [
    { 
        firstName: "Qui-Gon",
        lastName: "Jin",
        living: false,
        bountyAmount: 600,
        type: "jedi",
        _id: 1
    },{ 
        firstName: "Nate",
        lastName: "Jensen",
        living: true,
        bountyAmount: 400000,
        type: "sith",
        _id: 2
    },{ 
        firstName: "Annakin",
        lastName: "Skywalker",
        living: true,
        bountyAmount: 12,
        type: "sith",
        _id: 3
    },{ 
        firstName: "Forrest",
        lastName: "Gump",
        living: false,
        bountyAmount: 9000,
        type: "jedi",
        _id: 4
    }
]

app.get("/bounties", (req, res) => {
    res.send(bounties)
})

app.get("/bounties/:_id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
    res.send(foundBounty)
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(newBounty)
})

app.delete("/bounties/:_id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
    const updatedDB = bounties.filter(bounty => bounty._id !== req.params._id)
    bounties = updatedDB
    res.send(`You deleted ${foundBounty.firstName} ${foundBounty.lastName}`)
})

app.put("/bounties/:_id", (req, res) => {
    const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
    const updatedObj = req.body
    const updatedBounty = Object.assign(foundBounty, updatedObj)
    const updatedDB = bounties.map(bounty => bounty._id === req.params._id ? updatedBounty : bounty)
    bounties = updatedDB
    res.send(updatedBounty)
})

app.listen(5000, () =>{
    console.log("server is running on port 5000")
})