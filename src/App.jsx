import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes:
import Index from "./routes/Index.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;