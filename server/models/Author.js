const  mongooes =require('mongoose')
const Schema =mongooes.Schema

const AuthorSchema =new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

module.exports=mongooes.model('authors',AuthorSchema)