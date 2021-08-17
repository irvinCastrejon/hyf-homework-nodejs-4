const express = require('express');
const app = express();

const usersData = [];

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/users', function(req, res) {
    res.json(usersData);

});

app.get('/user/:id', function(req, res) {
    const user = usersData.find(usr => usr.id == req.params.id)
    res.json(user);
});

app.post('/user', (req, res) => {
    usersData.push({ id: 0 });
    res.json(usersData);
});

app.delete('/user/:id', function(req, res) {
    if (usersData.length > 0) {
        index = usersData.indexOf(req.params.id);
        usersData.splice(index, 1);
        res.status(202).json(usersData);
    } else {
        res.status(204).json(usersData);
    }
})
app.listen(3000, function() { console.log('server is listening') })