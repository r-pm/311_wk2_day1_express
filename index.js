
const express = require('express');
const app = express();

const port = process.env.PORT || 4000 //means: whatever is in var PORT, or 4000 if nothing there. nec to be able to .listen to port w/o hard coding?

const { users } = require('./state');//pulling in [users] from state.js

//GET /users
app.get('/users', function(req, res){
  res.send(users);
});
//[users] shows up in postman w/ get to /users


// GET /users/1
app.get('/users/1', function(req, res){  //not hard coded = '/users/:id',
  res.send(req.params.id);//i want to send user of _id:1
});
//cant get it to send object at _id=1 :/ can only send id itself

// POST /users
app.post('/users', function(req, res, next){
  {
     "_id": 6,
     "name": "Guy Duderson",
     "occupation": "Surfer",
     "avatar": "https://www.surfertoday.com/images/celebrities/matthewmcconaughey_surfing.jpg"
  }
  next({
    res.json(); //i want to send user of _id:6 
  })
});



/* PUT /users/1
app.put('/users/1', function (req, res, next) {
  const keyVal = req.key
  wtf how do we actually do middleware w/ these methods that doesn't just send a text response 
  next(res.json(users/1))
})
Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value (ex. name, occupation) on the first user object in the users array in state.js.
 Use `res.json()` to send this user back to the client.

* DELETE /users/1
app.delete('/users/1', function (req, res, next) {
  res.send('users array without users/1')
  next(res.send('deleted'));
})
* Give your server the ability to respond to a DELETE request with a path "/users/1" and remove the first item from the users array. Use `res.send()` to send back a messsage, "deleted"*/

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))