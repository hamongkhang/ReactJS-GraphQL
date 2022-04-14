const Book =require('../models/Book')
const Author =require('../models/Author')

const getMethods={
    getAllBooks: async (condition = null) =>
		condition === null ? await Book.find() : await Book.find(condition),
    getAllAuthors:async()=>await Author.find(),
    getOneBook:async id=>await Book.findById(id),
    getOneAuthor:async id=>await Author.findById(id),
    createAuthor:async args =>{
        const newAuthor =new Author(args)
        return await newAuthor.save()
    },
    createBook:async args=>{
        const newBook = new Book(args)
        return await newBook.save()
    }
}

module.exports =getMethods