import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";

import Dropdown from './components/Dropdown'

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
       <QueryClientProvider client={queryClient}>
      <Dropdown />
      </QueryClientProvider>
    </div>
  );
}

export default App;
