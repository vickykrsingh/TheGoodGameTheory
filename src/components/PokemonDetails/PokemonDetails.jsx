import { useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import LoadingSekleton from "../LoadingSekleton";
function PokemonDetails({ pokemonName }) {
    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id, pokemonName);
    return (
        pokemon.image ? <>
        <div className="w-full md:max-w-[80%] min-h-screen mx-auto px-4 bg-slate-400 flex flex-col items-center justify-between py-8 mt-4">
            <img className="w-96 h-96 object-fit bg-slate-200 p-8 rounded-lg" src={pokemon.image} />
            <div className="text-lg font-semibold tracking-wider"><span>{pokemon.name}</span></div>
            <div className="text-lg font-semibold tracking-wider">Height: {pokemon.height}</div>
            <div className="text-lg font-semibold tracking-wider">Weight: {pokemon.weight}</div>
            <div className="w-full flex items-center justify-center gap-2">
                <span className="font-semibold text-lg">Types : </span>
                {pokemon.types && pokemon.types.map((t) => <div className="font-semibold font-medium" key={t}> {t} </div>)}
            </div>

            {
                pokemon.types && pokemon.similarPokemons && 
                <div>
                    <span className="font-semibold text-2xl tracking-wider text-slate-300 py-8">more {pokemon.types[0]} type pokemons</span>

                    <ul className="flex gap-2 flex-wrap mt-4">
                        {pokemon.similarPokemons.map((p) => <li className="bg-slate-700 text-slate-300 px-3 py-1 rounded-xl flex items-center justify-center text-sm" key={p.pokemon.url}>{p.pokemon.name}</li>)}

                    </ul>
                </div>
            }
        </div>
        </> :  <div className="w-full md:max-w-[80%] min-h-screen mx-auto px-4 bg-slate-400 flex flex-col items-center justify-between py-8 mt-4">
            <LoadingSekleton/>
        </div>
    );
}

export default PokemonDetails;