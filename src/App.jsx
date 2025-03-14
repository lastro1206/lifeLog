import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/auth'
          element={<Auth />}
        />
        <Route
          path='/todo'
          element={<Todo />}
        />
      </Routes>
    </>
  );
}

export default App;
