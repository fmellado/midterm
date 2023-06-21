const Student = require('../models/student.model')

exports.create = (req, res)=> {
    if (!req.body.age){
        return res.status(400).send({
            message:"Age can not be empty"
        })
    }

    const student = new Student({
        name : req.body.name || 'Jhon Smith',
        age : req.body.age || 99,
        major : req.body.major || 'No_major'

    });

    student.save()
        .then(data=>res.send(data))
        .catch(err => {
            res.status(500).send({
                message:"someting went wrong while inserting data"
        })
    });
}

exports.findAll = (req, res) =>{
    Student.find().then(students => {
        res.send(students)
    }
    ).catch(err => {
        res.status(500).send({
            'message' : 'Something went wrong!!', 'error' : err
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    Student.findById(id).then(students => {
        if(!students){
            res.status(400).send({
                'message' : 'Student not availible!'
                                })
        }
        res.send(students)
    }).catch(err => {
        res.status(500).send({
            'message' : 'Something went wrong!!', 'error': err
        })
    })
}

exports.update = (req,res) => {
    const id = req.params.id;
    Student.findByIdAndUpdate(id, {
        name : req.body.name, /* || 'Update function',*/ 
        age: req.body.age,
        major: req.body.major
    }, {new:true}).then(student =>{
        res.send(student)
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
    Student.findByIdAndRemove(id).then(students => {
        if(!students)
            res.send({ 'message' : 'Student Not found'})


        res.send({
            'message' : 'Student Removed!'
        })
    }
    ).catch(err => {
        res.status(500).send({'message' : 'Something went wrong deleting!',
        'error' : err
        })
    })
}