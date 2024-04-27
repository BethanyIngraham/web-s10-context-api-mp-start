import React from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'

// After copying data from App to Context and properly connecting
// hook to data in components, remove the original data 
// and any hooks (like reducer) from App
export default function App() {
  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes />
      <QuoteForm />
    </div>
  )
}
