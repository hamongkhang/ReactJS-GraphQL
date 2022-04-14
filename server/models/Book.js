const  mongooes =require('mongoose')
const Schema =mongooes.Schema

const BookSchema =new Schema({
    name:{
        type:String
    },
    genre:{
        type:String
    },
    authorId:{
        type:String
    },
})

module.exports=mongooes.model('books',BookSchema)