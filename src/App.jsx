import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Movie from "./pages/Movie.jsx"
import "./App.css"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movie" element={<Movie />} />
    </Routes>
  )
}