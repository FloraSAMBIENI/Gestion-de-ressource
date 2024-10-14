const mongoose = require('mongoose');

const ressourceSchema = new mongoose.Schema({
  name: String,
  link: String
});

const Ressource = mongoose.model('Ressource', ressourceSchema);

module.exports = Ressource;
