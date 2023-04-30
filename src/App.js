import "./App.css";
import { Main } from "./Components/main";

import { Selection } from "./Components/Selection";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./Pages/Home";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route index element={<Selection />} />
      <Route path="/pages/:pageid" element={<Main />}></Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
