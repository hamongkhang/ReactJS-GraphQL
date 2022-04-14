const { argsToArgsConfig } = require('graphql/type/definition')
const {books,authors} =require('../data/static')
const Author =require('../models/Author')
const Book =require('../models/Book')
const resolvers={
    Query:{
        books:async(parent,args,{getMethods})=>await getMethods.getAllBooks(),
        authors:async (parent,args,{getMethods})=>await getMethods.getAllAuthors(),
        book:async(parent,{id},{getMethods})=>await getMethods.getOneBook(id),
        author:async(parent,{id},{getMethods})=>await getMethods.getOneAuthor(id)
    },

    
	Book: {
		author: async ({ authorId }, args, { getMethods }) =>
			await getMethods.getOneAuthor(authorId)
	},

	Author: {
		books: async ({ id }, args, { getMethods }) =>
			await getMethods.getAllBooks({ authorId: id })
	},

    Mutation:{
        createAuthor: async(parent,args,{getMethods})=>await getMethods.createAuthor(args),
        createBook:async(parent,args,{getMethods})=>await getMethods.createBook(args),
    }
}
module.exports=resolvers