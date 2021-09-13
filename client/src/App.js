import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import {useState} from "react";
import Dropdown from './components/Dropdown';

import AddressData from './components/AddressData';
import HistoricalActivity from './components/HistoricalActivity';
import Amenities from './components/Amenities';

function App() {
  const queryClient = new QueryClient();
  const [propertyName, setPropertyName] = useState()


  return (
    <div className="App">
       <QueryClientProvider client={queryClient}>
         
      <Dropdown propertyName={propertyName} setPropertyName={setPropertyName} />
      <AddressData propertyName={propertyName} />
      <HistoricalActivity propertyName={propertyName}/>
      <Amenities propertyName={propertyName}/>

      </QueryClientProvider>
    </div>
  );
}

export default App;
