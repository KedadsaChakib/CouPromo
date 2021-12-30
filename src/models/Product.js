import mongoose from 'mongoose';
const DOCUMENT_NAME = 'Products';
const COLLECTION_NAME = 'products';


export const productSchema = new mongoose.Schema({
    CAPSULE_TEXT: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    CATALOG_PRICE: {
        type: mongoose.Schema.Types.String,
        required: false,
        },
    DISCOUNT_PRICE: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    DISFROM:{
        type: mongoose.Schema.Types.Date,
        required: false,
        
    },
    DISPEND:{
        type: mongoose.Schema.Types.Date,
        required:true
    },
}, {
    timestamps: true,
});

export const ProductModel = mongoose.model(DOCUMENT_NAME, productSchema, COLLECTION_NAME)