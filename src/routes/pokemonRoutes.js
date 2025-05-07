const express = require('express');
const PokemonController = require('../controllers/pokemonController');

const router = express.Router();

router.post('/', PokemonController.createPokemon);
router.get('/', PokemonController.getAllPokemons);
router.get('/search', PokemonController.getPokemonByName);
router.get('/:id', PokemonController.getPokemonById);
router.put('/:id', PokemonController.updatePokemon);
router.delete('/:id', PokemonController.deletePokemon);

module.exports = router;