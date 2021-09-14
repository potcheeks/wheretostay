import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

import Dropdown from "./components/Dropdown";
import ContentDisplay from "./components/ContentDisplay";

function App() {
  const queryClient = new QueryClient();
  const [propertyName, setPropertyName] = useState();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Dropdown
          propertyName={propertyName}
          setPropertyName={setPropertyName}
        />
        <ContentDisplay propertyName={propertyName} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
