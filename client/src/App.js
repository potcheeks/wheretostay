import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import {useState} from "react";
import Dropdown from './components/Dropdown';

import AddressData from './components/AddressData';


function App() {
  const queryClient = new QueryClient();
  const [propertyName, setPropertyName] = useState()


  return (
    <div className="App">
       <QueryClientProvider client={queryClient}>

      <Dropdown propertyName={propertyName} setPropertyName={setPropertyName} />
      <AddressData propertyName={propertyName} />


      </QueryClientProvider>
    </div>
  );
}

export default App;
