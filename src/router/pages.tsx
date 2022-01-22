import { NavLink, Outlet, useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import products from './products'

export function Home() {
  const links = [
    {
      path: 'about',
      name: 'About'
    },
    {
      path: 'products',
      name: 'Products'
    },
    {
      path: 'contact',
      name: 'Contact'
    }
  ]

  return (
    <div>
      <nav>
        {links.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => {
              return {
                margin: '5px',
                color: isActive ? 'red' : ''
              }
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  )
}

export function About() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={searchParams.get('filter') || ''}
        onChange={(event) => {
          const filter = event.target.value
          if (filter) {
            setSearchParams({ filter })
          } else {
            setSearchParams({})
          }
        }}
      />
      <div>
        {products
          .filter((item) => {
            const filter = searchParams.get('filter')
            if (!filter) return true
            return item.name.toLowerCase().startsWith(filter.toLowerCase())
          })
          .map((item) => (
            <div key={item.id}>{<Product dataSource={item} />}</div>
          ))}
      </div>
      <Outlet />
    </div>
  )
}

export function Product(props: any) {
  return <p>{JSON.stringify(props.dataSource)}</p>
}

export function ProductDetail() {
  const params = useParams()
  const product = products.find((item) => item.id === params.id)
  console.log(product)

  return (
    <div>
      <p>Product Detail</p>
      <div>{product ? JSON.stringify(product) : 'Not Found.'}</div>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

export function Whoops404() {
  const location = useLocation()
  return <div>Resource not found at {location.pathname}.</div>
}
