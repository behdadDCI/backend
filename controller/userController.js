import userModel from "../model/userModel.js"
import bcrypt from "bcryptjs"

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findById({ _id: req.params.id })
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.find()
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}

export const createUser = async (req, res) => {
    const existUser = await userModel.findOne({ email: req.body.email })
    if (existUser) return res.status(400).json({ message: "user already exist" })
    try {
        const { firstName, lastName, email, password, photo } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        await userModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            photo: photo
        });
        res.status(200).json({ message: "user created" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
     await user.updateOne({ _id: req.params.id }, { $set: req.body })
        res.json({ message: "user successfully updated"});
    } catch (error) {
        res.json(error)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await user.deleteOne({ _id: req.params.id })
        res.json(user)
    } catch (error) {
        res.json(error)
    }
}