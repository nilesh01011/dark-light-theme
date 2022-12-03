import { Routes, Route } from "react-router-dom"
import LightPage from './pages/LightPage'
import DarkPage from "./pages/DarkPage";
import DynamicTheme from "./pages/DynamicTheme";

function App() {
  return (
    <>
      <Routes>
        <Route path='/dark' element={<DarkPage theme='black' cars='scorpio' />}></Route>
        <Route path='/booknow' element={<DynamicTheme />}></Route>
        <Route exact path='/' element={<LightPage theme='white' cars='thar' />}></Route>
      </Routes>
    </>
  );
}

export default App;
