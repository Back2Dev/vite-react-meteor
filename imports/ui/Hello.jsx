import React, { useState } from "react"

const Hello = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
      <p>You've pressed the buttons {counter} times.</p>
    </div>
  )
}

export default Hello
