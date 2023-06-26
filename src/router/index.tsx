import React from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom'
import { Home, About, Products, Contact, ProductDetail, Whoops404 } from './pages'

function App() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          index: true,
          element: <div>Click a Link.</div>
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'products',
          element: <Products />,
          children: [
            {
              path: ':id',
              element: <ProductDetail />
            }
          ]
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: '*',
          element: <Whoops404 />
        }
      ]
    },
    {}
  ])
}

export default App

export function App2() {
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
