const Todo = require('../models/todo.model')

exports.create = (req, res)=> {
    if (!req.body.major){
        return res.status(400).send({
            message:"major can not be empty"
        })
    }

    const todo = new Todo({
        name : req.body.name || 'Name1',
        /*description: req.body.description */
        age : req.body.age || 99,
        major : req.body.major || 'major1'

    });

    todo.save()
        .then(data=>res.send(data))
        .catch(err => {
            res.status(500).send({
                message:"someting went wrong while inserting data"
        })
    });
}

exports.findAll = (req, res) =>{
    Todo.find().then(todos => {
        res.send(todos)
    }
    ).catch(err => {
        res.status(500).send({
            'message' : 'Something went wrong!!', 'error' : err
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Todo.findById(id).then(todos => {
        if(!todos){
            res.status(400).send({
                'message' : 'Todo not availible!'
                                })
        }
        res.send(todos)
    }).catch(err => {
        res.status(500).send({
            'message' : 'Something went wrong!!', 'error': err
        })
    })
}

exports.update = (req,res) => {
    const id = req.params.id;
    Todo.findByIdAndUpdate(id, {
        name : req.body.name || 'Untitled Update function', 
        description: req.body.description
    }, {new:true}).then(todo =>{
        res.send(todo)
    }).catch(err => {
        res.status(500).send({
            'message':'Something went wrong Updating!!',
            'error': err
        })
    })
}

exports.delete = (req, res) => {
    console.log("INn")
    const id = req.params.id;
    Todo.findByIdAndRemove(id).then(todos => {
        if(!todos)
            res.send({ 'message' : 'Not found'})


        res.send({
            'message' : 'Removed!'
        })
    }
    ).catch(err => {
        res.status(500).send({'message' : 'Something went wrong deleting!',
        'error' : err
        })
    })
}