const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Todo = require('../models')

todo = {}

todo.addTodo = (task)=>{

    console.log(task)
    let title = task.title;
    let todoTask = task.todo
    console.log("the title is", title);
    console.log("the task is", todoTask);
    return Todo.insertMany(task)
        .then(result =>{
            console.log(result)
            return result
        })
}

todo.viewTodo =(id) =>{
    console.log(id)
    console.log("the id is", id, " ", typeof(id));
    if(id!=null)
    {
        return Todo.find({_id : id})
        .then(result=> {
            console.log(result)
            return result
        })
    }
    else{
        return Todo.find()
        .then(result=> {
            console.log(result)
            return result
        })
    }    
}

todo.editTodo =(id,task) =>{
    console.log("at controller",id)
    console.log("at controller", task);
    
    console.log("the id is", id, " ", typeof(id));
    return Todo.update({_id: id},{$set : { title :task.title, todo : task.todo}} )
        .then(result=> {
            console.log(result)
            return result
        })
}

todo.deleteTodo =(id) =>{
    console.log(id)
    console.log("the id is", id, " ", typeof(id));
    return Todo.deleteOne({_id: id} )
        .then(result=> {
            console.log(result)
            return result
        })
}

module.exports=todo
