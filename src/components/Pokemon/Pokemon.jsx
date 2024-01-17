import { Link } from 'react-router-dom';

function Pokemon({ name, image, id }) {
    return (
        <div className='w-full lg:max-w-96 max-h-96 flex items-center justify-between flex-col bg-slate-500 gap-2 mt-2 rounded-lg'>
            <Link to={`/pokemon/${id}`} className="w-full h-full flex flex-col items-center justify-between">
                <div className='font-semibold text-2xl my-2 text-slate-800'>{name}</div>
                <div>
                    <img className='max-w-80 max-h-80 object-fit p-4' src={image} />
                </div>
            </Link>
        </div>
    )
}

export default Pokemon;