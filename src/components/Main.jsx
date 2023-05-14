import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { baseUrl } from '../endpoints'

export default function Main() {

  const [quote, setQuote] = useState("Loading quotes...")
  const base = baseUrl

  useEffect(() => {
    axios.get(base)
      .then(({ data: { content } }) => {
        setTimeout(() => {
          setQuote(content)
        }, 2000);
      })
      .catch(({ message }) => {
        setQuote(message)
      })
  }, [])

  const handleQuote = () => {

    axios.get(base)
      .then(({ data: { content } }) => {
        setQuote(content)
      })
      .catch(({ message }) => {
        setQuote(message)
      })

  }

  return (
    <>
      <div>
        <div>
          <h3>Random Quote</h3>
          <p>
            {quote}
          </p>
          <div style={{ display: "flex", flexDirection: "row", backgroundColor: 'white', margin: 30 }} >
            <button style={{ backgroundColor: 'red', borderWidth: 0, marginLeft: 10, marginRight: 10, height: 60 }} onClick={handleQuote}>
              Generate New Quote
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

