import { useLoaderData } from 'react-router-dom';
import MultipolCards from './MultipolCards/MultipolCards';
import { useState } from 'react';

function App() {
  const loader = useLoaderData();
  const [coffesDelet, setCoffeesDelet] = useState(loader)

  return (
    <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
      {coffesDelet?.map((coffee) => <MultipolCards key={coffee._id} coffees={coffee} coffesDelet={coffesDelet} setCoffeesDelet={setCoffeesDelet}></MultipolCards>)}
    </div>
  );
}

export default App;
