const PokemonService = require('../services/pokemonService');

class PokemonController {
  static async createPokemon(req, res, next) {
    try {
      const { pokemonName } = req.body;
      if (!pokemonName) {
        return res.status(400).json({
          success: false,
          message: 'Pokemon name is required'
        });
      }

      const result = await PokemonService.createPokemon(pokemonName);
      res.status(201).json({
        success: true,
        message: 'Pokemon created successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllPokemons(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;
      const result = await PokemonService.getAllPokemons(page, limit);
      res.json({
        success: true,
        data: result.pokemons,
        total: result.total,
        totalPages: result.totalPages, 
        currentPage: result.currentPage
      });
    } catch (error) {
      next(error);
    }
  }

  static async getPokemonById(req, res, next) {
    try {
      const pokemon = await PokemonService.getPokemonById(req.params.id);
      res.json({
        success: true,
        data: pokemon
      });
    } catch (error) {
      next(error);
    }
  }

  static async updatePokemon(req, res, next) {
    try {
      const { pokemonName } = req.body;
      if (!pokemonName) {
        return res.status(400).json({
          success: false,
          message: 'Pokemon name is required'
        });
      }

      const result = await PokemonService.updatePokemon(req.params.id, pokemonName);
      res.json({
        success: true,
        message: 'Pokemon updated successfully',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  static async deletePokemon(req, res, next) {
    try {
      await PokemonService.deletePokemon(req.params.id);
      res.json({
        success: true,
        message: 'Pokemon deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PokemonController;