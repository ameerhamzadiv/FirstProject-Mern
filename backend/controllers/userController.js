const User = require('../models/usersmodel');
const mongoose = require('mongoose');


// Get All Users
const GetAllUser = async (request, response) => {
    const users = await User.find({}).sort({createdAt: -1});
    response.json(users);
}

// Get single user
const GetSingleUser = async (request, response) => {
    const { id } = request.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(404).json({error: "No such User"});
    }
    const user = await User.findById(id);
    if(user){
        response.status(200).json(user);
    }else{
        return response.status(400).json({error: "No such User"});
    }
}

// Post/Add User
const CreateUser = async (request, response) => {
    const {name, email, phone} = request.body;

    try{
        const user = await User.create({
            name, email, phone
        })
        response.status(200).json(user);
    } catch(error){
        response.status(400).json({error: error.message});
    }
}

// Delete User
const DeleteUser = async (request, response) => {
    const { id } = request.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(404).json({error: "No such User"})
    }
    const user = await User.findOneAndDelete({_id: id});

    if(user){
        response.status(200).json({msg: "User Deleted"})
    }else{
        return response.status(400).json({error: "User Not Deleted"})
    }
}

// Update User
const UpdateUser = async (request, response) => {
    const { id } = request.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(404).json({error: "No such User"})
    }
    const user = await User.findByIdAndUpdate({_id: id}, {
        ...request.body
    });

    if(user){
        response.status(200).json(user)
    }else{
        return response.status(400).json({error: "User does not Update"})
    }

}


module.exports = {
    GetAllUser,
    GetSingleUser,
    CreateUser,
    DeleteUser,
    UpdateUser
}