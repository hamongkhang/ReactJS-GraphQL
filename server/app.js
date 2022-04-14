const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const mongoose=require('mongoose')
const typeDefs =require('./schema/schema')
const resolvers=require('./resolver/resolver')
const getMethods =require('./data/database')

const server= new ApolloServer({
    typeDefs,
    resolvers,
    context:()=>({getMethods})
})

//Connect to MongoDB
const connect=async()=>{
    try {
        await mongoose.connect(
            'mongodb+srv://HaMongKhang:Yeulaitudau240320012001@tutorialgraphql.azm39.mongodb.net/TutorialGraphQL?retryWrites=true&w=majority'
            )
        console.log('Connected successfully')
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}
connect()
const app = express();
server.start().then(res => {
 server.applyMiddleware({ app });
 app.listen({ port: 4000 }, () =>
     console.log('Now browse to http://localhost:4000' + server.graphqlPath)
 )
})