var mongoose = require('mongoose')
//Genre Schema
var bookSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  genre:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  author :{
    type:String,
    required:true
  },
  publisher:{
    type:String,
    required:true
  },
  pages:{
    type:String,
    //required:true
  },

  create_date:{
    type:Date,
    default:Date.now
  }
});

var Book = module.exports = mongoose.model('Book',bookSchema);

//Get Books
module.exports.getBooks = function(callback,limit){
   Book.find(callback).limit(limit);
}

//Get Book
module.exports.getBooksById = function(id,callback){
   Book.findById(id,callback);
}

//Add Book
module.exports.addBook = function(book,callback){
   Book.create(id,callback);
}
