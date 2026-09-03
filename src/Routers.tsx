import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import { CompanyProvider } from "./context/CompanyContext";

function Rout() {
  return (
    <CompanyProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CompanyProvider>
  );
}

export default Rout;
