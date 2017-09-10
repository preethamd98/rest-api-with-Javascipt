var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app=express();

app.use(bodyParser.json());

Genre = require('./models/genre.js');
Book = require('./models/book.js');
//Connect to mangoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


app.get('/',(req,res)=>{
  res.send('Please use /api/books or /api/genre');
});

app.get('/api/genre',(req,res)=>{
  Genre.getGenres(function(err,genres){
    if(err){
      throw err;
    }
    res.json(genres);
    //console.log('sucess');
  })

});

app.get('/api/book',(req,res)=>{
  Book.getBooks(function(err,books){
    if(err){
      throw err;
    }
    res.json(books);
    //console.log('sucess');
  })

});

app.get('/api/book/:_id',(req,res)=>{
  Book.getBooksById (req.params._id,function(err,book){
    if(err){
      throw err;
    }
    res.json(book);
    //console.log('sucess');
  })

});

//Adding genre
app.post('/api/genre',(req,res)=>{
  var genre = req.body;
   Genre.addGenre(genre, function(err,genre){
    if(err){
      throw err;
    }
    res.json(genre );
    //console.log('sucess');
  })

});
//Adding book
app.post('/api/book',(req,res)=>{
  var book = req.body;
   Genre.addBook(book, function(err,book){
    if(err){
      throw err;
    }
    res.json(book);
    //console.log('sucess');
  })

})
//Updating genre
app.put('/api/genre/:id',(req,res)=>{
  var id = req.params._id;
  var genre = req.body;
   Genre.updateGenre(id,genre,{} , function(err,genre){
    if(err){
      throw err;
    }
    res.json(genre );
    //console.log('sucess');
  })

});

//Deleting genre
app.put('/api/genre/:id',(req,res)=>{
  var id = req.params._id;
   Genre.deleteGenre(id, function(err,genre){
    if(err){
      throw err;
    }
    res.json(genre );
    //console.log('sucess');
  })

});






app.listen(3000);
