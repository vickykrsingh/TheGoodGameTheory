import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";
import { useEffect } from 'react';
import LoadingSekleton from '../LoadingSekleton';
function PokemonList() {
    const [ pokemonListState, setPokemonListState] = usePokemonList(false);
    useEffect(() => {
        console.log("render")
    })
    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                    {pokemonListState.pokemonList.map((p) => pokemonListState.isLoading ? <LoadingSekleton key={p.id} /> : <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />)}
            </div>
            <div className="controls mt-4">
                <button disabled={pokemonListState.prevUrl == null} onClick={() => {
                    const urlToSet = pokemonListState.prevUrl;
                    setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet})
                }} className='w-48 h-12 bg-slate-500 hover:bg-slate-700 text-slate-200 duration-300'>Prev</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => {
                    const urlToSet = pokemonListState.nextUrl;
                    setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet})
                }} className='w-48 h-12 bg-slate-500 hover:bg-slate-700 text-slate-200 duration-300'>Next</button>
            </div>
        </div>
    )
}

export default PokemonList;