import { Link } from 'react-router-dom';
// import './App.css'
import CustomRoutes from './routes/CustomRoutes';

function App() {

  return (
    <div className="w-full">
      <h1 className='font-extralight text-lg tracking-widest text-center mt-4'>
        <Link to="/">Pokedex</Link>
      </h1>
      <CustomRoutes />
    </div>
  )
}

export default App
