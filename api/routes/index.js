const express = require('express');
const router = express.Router();
const todoController = require('../controllers')

router.get('/test', (req,res,next)=>{
    console.log("working fine");
    res.json({message :"working fine susmita"})
})

router.post('/testPost', (req,res,next)=>{
    console.log(req.body);
    res.json(req.body)
})

router.get('/testParams/:test', (req, res, next)=>{
    console.log(req.params.test)
    res.json({requestParam : req.params.test})
})

router.post('/addTodo', (req, res, next) =>{
    let task = req.body
    console.log("incoming todo", req.body);
    todoController.addTodo(task)
        .then(result =>{
            console.log("response from cotroller", result)
            res.json({
                message : "inserted successfully",
                insertedData : task
            })
        })

})

router.get('/viewTodo', (req, res, next) => {
    todoController.viewTodo()
        .then(result =>{
            console.log("response from cotroller", result)
            res.json({
                message : "viewed successfully",
                Output : result
            })
    })
})

router.get('/viewTodo/:id', (req, res, next) => {
    let id=req.params.id
    console.log("viewing todo", id);
    todoController.viewTodo(id)
        .then(result =>{
            console.log("response from cotroller", result)
            res.json({
                message : "viewed successfully",
                Output : result
            })
        })
    
})

router.delete('/deleteTodo/:id', (req, res, next) => {
    let id=req.params.id
    console.log("deleting todo", id);
    todoController.deleteTodo(id)
        .then(result =>{
            console.log("response from cotroller", result)
            res.json({
                message : "viewed successfully",
                Output : result
            })
        })
    
})

router.put('/editTodo/:id', (req, res, next) => {
    let id=req.params.id
    console.log("editing todo", id);
    console.log("new entry", req.body)
    todoController.editTodo(id,req.body)
        .then(result =>{
            console.log("response from cotroller", result)
            res.json({
                message : "viewed successfully",
                Output : result
            })
        })
    
})



module.exports=router;