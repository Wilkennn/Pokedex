import express from 'express';
import { pokemonController } from '../Controller/pokemonController.js';
var controller = new pokemonController()
const router = express.Router();

router.get('/', async(req, res) => {
    const pokemons = [await controller.getDadosAsycn()];
    pokemons.map(async(pokemon) => {
        pokemon.details = await controller.getDadosPokemonSingleAsycn(pokemon.name)
    })
    res.render('index', {
        pokemons: pokemons
    })
});

export default router;