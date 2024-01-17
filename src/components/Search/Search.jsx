import useDebounce from '../../hooks/useDebounce';

function Search({updateSearchTerm}) {
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))
    return (
        <div className="w-full md:w-[80%] flex items-center justify-center bg-slate-300 mx-auto my-8">
            <input 
                id="pokemon-name-search"
                type="text"
                placeholder="pokemon name...."
                onChange={debouncedCallback}
                className='items-center justify-between flex w-full h-12 outline-none border-slate-600 border-2 px-4'
            />

        </div>
    );
}

export default Search;