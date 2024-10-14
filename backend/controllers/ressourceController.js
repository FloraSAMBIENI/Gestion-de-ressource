const Ressource = require('../models/ressourceModels');


// Créer une nouvelle ressource
exports.createRessource = async (req, res) => {
    try {
      const { name, link } = req.body;
  
      // Vérifier que les champs d'entrée sont valides
      if (!name || !link) {
        return res
          .status(400)
          .json({ message: "Veuillez fournir un nom et un lien" });
      }
  
      // Vérifier si la ressource existe déjà dans la base de données
      const existingRessource = await Ressource.findOne({ name });
  
      if (existingRessource) {
        return res.status(400).json({ message: "La ressource existe déjà" });
      }
  
      // Créer et enregistrer la nouvelle ressource dans la base de données
      const newRessource = new Ressource({
        name,
        link
      });
  
      await newRessource.save();
  
      return res
        .status(201)
        .json({ message: "Ressource créée avec succès", newRessource });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ message: "Erreur lors de la création de la ressource" });
    }
  };


// Obtenir toutes les ressources
exports.getRessources = async (req, res) => {
  try {
    const ressources = await Ressource.find();
    res.json(ressources);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Mettre à jour une ressource
exports.updateRessource = async (req, res) => {
  try {
    const { name, link } = req.body;

    if (name != null) {
      res.ressource.name = name;
    }

    if (link != null) {
      res.ressource.link = link;
    }

    const updatedRessource = await res.ressource.save();
    res.json(updatedRessource);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer une ressource
exports.deleteRessource = async (req, res) => {
  try {
    await res.ressource.deleteOne();
    res.json({ message: "Ressource supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Middleware pour obtenir une ressource par ID
exports.getRessource = async (req, res, next) => {
    let ressource;
    try {
      ressource = await Ressource.findById(req.params.id);
      if (ressource == null) {
        return res.status(404).json({ message: "Ressource non trouvée" });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.ressource = ressource;
    next();
  };

