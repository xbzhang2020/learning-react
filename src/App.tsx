// import MyContext from './components/context'
// import MyState from './components/state'
// import MyRedux from './components/redux'
// import HooksDemo from './hooks'
// import RouterDemo from './router'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      {/* <h1>Hello React, learn react</h1> */}
      {/* <HooksDemo /> */}
      {/* <RouterDemo /> */}
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App
