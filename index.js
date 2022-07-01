const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
      res.send('Hello guys!! from my smarty node, with nodemon kk')
});
const users = [
      {id:1, name: 'sabana', email: 'sabana@gmail.com', phone: '01799999990'},
      {id:2, name: 'sabnoor', email: 'sabnoor@gmail.com', phone: '01799999991'},
      {id:3, name: 'sakib', email: 'sakib@gmail.com', phone: '01799999992'},
      {id:4, name: 'mousumi', email: 'mousumi@gmail.com', phone: '01799999993'},
      {id:5, name: 'shawon', email: 'shawon@gmail.com', phone: '01799999994'},
      {id:6, name: 'purnima', email: 'purnima@gmail.com', phone: '01799999995'},
      {id:7, name: 'popy', email: 'popy@gmail.com', phone: '01799999996'},
]
app.get('/users', (req, res) =>{
      //filter by query parameter
      if (req.query.name){
            const search = req.query.name.toLowerCase();
            const matched = users.filter(user => user.name.toLowerCase().includes(search));
            res.send(matched);
      } 
      else{
            res.send(users)
      }
      
});
app.get('/fruits', (req, res) =>{
      res.send("'mango', 'banana', 'oranges'")
});
app.get('/users/:id', (req, res) =>{
      console.log(req.params);
      const id = parseInt(req.params.id);
      const user = users.find(u =>u.id === id);
      res.send(user)
});
app.post('/user', (req, res)=>{
      console.log('request', req.body);
      const user = req.body;
      user.id = users.length + 1;
      users.push(user)
      res.send(user)
});

app.listen(port, () =>{
      console.log('listening to port:', port)
})
//after deleting node_modules on github
