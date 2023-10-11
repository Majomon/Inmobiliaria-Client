import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Home from "./components/Home";

//Antes de ROUTES tengo que poner el navbar para que cargue cuando la ruta sea distinta al componente Start

// Axios default
axios.defaults.baseURL = "https://inmobiliaria-api-green.vercel.app";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
