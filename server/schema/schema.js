const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Book {
    id: ID
    name:String
    genre:String
    author:Author
}
type Author{
    id:ID!
    name:String
    age:Int
    books:[Book]
}
type Query{
    books:[Book]
    authors:[Author]
    book(id:ID!):Book
    author(id:ID!):Author
}
type Mutation{
    createAuthor(name:String,age:Int):Author
    createBook(name:String,genre:String,authorId:String):Book
}
`
module.exports=typeDefs