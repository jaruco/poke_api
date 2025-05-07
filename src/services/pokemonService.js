const axios = require('axios');
const Pokemon = require('../models/pokemonModel');

class PokemonService {
  static async fetchPokemonFromApi(pokemonName) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      return {
        name: response.data.name,
        types: response.data.types.map(type => type.type.name),
        height: response.data.height,
        weight: response.data.weight,
        abilities: response.data.abilities.map(ability => ability.ability.name),
        front_sprite: response.data.sprites.front_default,
        back_sprite: response.data.sprites.back_default,
        official_artwork: response.data.sprites.other['official-artwork'].front_default
      };
    } catch (error) {
      throw new Error('Pokemon not found in PokeAPI');
    }
  }

  static async createPokemon(pokemonName) {
    const pokemonData = await this.fetchPokemonFromApi(pokemonName);
    return await Pokemon.create(pokemonData);
  }

  static async getAllPokemons(page = 1, limit = 20) {
    const offset = (page - 1) * limit;
    const { count, rows } = await Pokemon.findAndCountAll({
      limit,
      offset,
      order: [['id', 'ASC']],
      attributes: ['id', 'name', 'types', 'height', 'weight', ['front_sprite', 'frontSprite'], ['back_sprite', 'backSprite'], ['official_artwork', 'officialArtwork']] 
    });
    return {
      pokemons: rows,
      total: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    };
  }

  static async getPokemonById(id) {
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }
    return pokemon;
  }

  static async getPokemonByName(name) {
    console.log("name input", name);
    const pokemon = await Pokemon.findOne({
      where: { name: name.toLowerCase() },
      attributes: ['id', 'name', 'types', 'height', 'weight', ['front_sprite', 'frontSprite'], ['back_sprite', 'backSprite'], ['official_artwork', 'officialArtwork']]
    });
    console.log("pokemon result", pokemon);
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }

    return pokemon;
  }

  static async updatePokemon(id, pokemonName) {
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }
    const pokemonData = await this.fetchPokemonFromApi(pokemonName);
    return await pokemon.update(pokemonData);
  }

  static async deletePokemon(id) {
    const pokemon = await Pokemon.findByPk(id);
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }
    await pokemon.destroy();
    return true;
  }
}

module.exports = PokemonService;