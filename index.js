
const mongoose = require('mongoose');

const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    const carbonara = { name: "Carbonara", cuisine: "Italian"}
    return Recipe.create(carbonara)
  
  }) .then(newRecipe => console.log('Nova Receita criada', newRecipe))
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
