import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes:
import Index from "./routes/Index.jsx";

// Component Import:
import Nav from "./components/Nav.jsx";

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;