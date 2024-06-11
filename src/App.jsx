import Details from "./components/Details"
import Hero from "./components/Hero"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="/:slug" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App