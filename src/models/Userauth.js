import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Userauth';
const COLLECTION_NAME = 'usersauth';

const userauthSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
}, {
    timestamps: true,
});

export const UserauthModel = mongoose.model(DOCUMENT_NAME, userauthSchema, COLLECTION_NAME);