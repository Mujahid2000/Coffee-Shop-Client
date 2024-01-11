
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { key } from 'localforage';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className='m-20'>
      
      <h1 className='text-5xl font-extrabold text-purple-600 text-center my-10'>Coffee Point{coffees.length}</h1>
      <div className='grid grid-cols-2 space-x-3 space-y-3'>
      {
        coffees.map(coffee =><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>

    </div>
  )
}

export default App
