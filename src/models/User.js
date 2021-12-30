import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Users';
const COLLECTION_NAME = 'users';

export const sex_type = {
    FEMME: 'f',
    HOMME: 'm',
}

export const userSchema = new mongoose.Schema({
    AGE: {
        type: mongoose.Schema.Types.Number,
        required: true,
    },
    PREF_NAME: {
        type: mongoose.Schema.Types.String,
        required: false,
        },
    REG_DATE: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    SEX_ID:{
        type: mongoose.Schema.Types.String,
        required: true,
        enum: [
            sex_type.HOMME,
            sex_type.FEMME,
        ],
    },
    WITHDRAW_DATE:{
        type: mongoose.Schema.Types.String,
        required:true

    },
  /* PSEUDO:{
        type: mongoose.Schema.Types.String,
        required: false,
    },
     PASSWORD:{
         type: mongoose.Schema.Types.String,
         required: true,
     } 
*/
}, {
    timestamps: true,
});

export const UserModel = mongoose.model(DOCUMENT_NAME, userSchema, COLLECTION_NAME)