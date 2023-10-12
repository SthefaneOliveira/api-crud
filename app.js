const express = require('express');
const path = require('path');
const methodOverride = require('method-override'); 
const app = express();
const port = 3000;
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

const alunosRouter = require('./routes/alunos');
 
app.use('/alunos', alunosRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
