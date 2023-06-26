import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementAsync } from './counterSlice'

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState('2')

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input value={amount} onChange={e => setAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>Add Amount</button>
        <button onClick={() => dispatch(incrementAsync(Number(amount)))}>Add Async</button>
      </div>
    </div>
  )
}
