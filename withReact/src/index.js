import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
const Ha = () => (
  <div>
   <Counter />
 </div>
)
render(<Ha />, document.getElementById("app"))
