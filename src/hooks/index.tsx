import { useState } from 'react'
import { StarFilled } from '@ant-design/icons'

export function useInput(initValue) {
  const [value, setValue] = useState(initValue)
  return [
    {
      value,
      onChange: event => setValue(event.target.value)
    },
    () => setValue(initValue)
  ]
}

function App() {
  const [usernameProps, resetUsername] = useInput('')
  const [rate, setRate] = useState(0)
  const [commentProps, resetComment] = useInput('')

  function submit(event) {
    event.preventDefault()

    // 模拟提交表单行为
    // console.log({ username: usernameProps.value, rate, comment: commentProps.value })
  }

  function reset(event) {
    event.preventDefault()
    resetUsername()
    setRate(0)
    resetComment()
  }

  return (
    <form>
      <div>
        <label>用户名称：</label>
        <br />
        <input {...usernameProps} type="text" />
      </div>
      <div>
        <label>评分：</label>
        <StarRating value={rate} onChange={setRate} />
      </div>
      <div>
        <label>评论：</label>
        <br />
        <textarea {...commentProps} />
      </div>
      <button onClick={submit}>提交</button>
      <button onClick={reset}>重置</button>
    </form>
  )
}

export function StarRating({ value = 0, total = 5, onChange = f => f }) {
  return (
    <div>
      {new Array(total).fill('').map((item, index) => (
        <Star
          key={index}
          selected={index < value}
          onChange={() => {
            onChange(index + 1)
          }}
        />
      ))}
    </div>
  )
}

export function Star({ selected = false, onChange = f => f }) {
  return <StarFilled style={{ color: selected ? 'red' : 'gray' }} onClick={onChange} />
}

export default App
