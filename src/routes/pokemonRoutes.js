const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemonController');

router.post('/', PokemonController.createPokemon);
router.get('/', PokemonController.getAllPokemons);
router.get('/:id', PokemonController.getPokemonById);
router.put('/:id', PokemonController.updatePokemon);
router.delete('/:id', PokemonController.deletePokemon);

module.exports = router;