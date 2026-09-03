import "./App.css";
import { CompanyProvider } from "./context/CompanyContext.tsx";
import Rout from "./Routers.tsx";

function App() {
  return (
    <CompanyProvider>
      <Rout />
    </CompanyProvider>
  );
}

export default App;
