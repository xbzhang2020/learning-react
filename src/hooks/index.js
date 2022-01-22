import { useState } from 'react'
import { StarFilled } from '@ant-design/icons'

function App() {
  return (
    <div>
      <StarRating totalStars={5} />
    </div>
  )
}

export function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0)
  return (
    <div>
      {new Array(totalStars).fill('').map((item, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onSelect={() => {
            setSelectedStars(index + 1)
          }}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}

export function Star({ selected = false, onSelect = (f) => f }) {
  return <StarFilled style={{ color: selected ? 'red' : 'gray' }} onClick={onSelect} />
}

export default App
