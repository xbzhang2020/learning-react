import { Routes, Route } from 'react-router-dom'
import { Home, About, Products, Contact, ProductDetail, Whoops404 } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<div>Click a Link.</div>} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  )
}

export default App
