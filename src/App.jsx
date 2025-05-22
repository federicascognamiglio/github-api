import { useState } from "react"
import axios from 'axios'

// Components
import AppCard from "./components/AppCard"

function App() {

  // Variabili di Stato
  const [searchParam, setSearchParam] = useState('')
  const [filterValue, setFilterValue] = useState('repositories')
  const [results, setResults] = useState([])

  // Funzioni
  /**
   * Get data from GitHub API request
   *
   * @param {string} filter 
   * @param {string} param 
   */
  const getResults = (filter, param) => {
    if (param === '') {
      alert('Insert at leat 3 characters')
    }
    axios.get(`https://api.github.com/search/${filter}?q=${param}`)
    .then(resp => 
      setResults(resp.data.items)
    )
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="d-flex justify-between align-center">
          <a className="nav-brand" href="/">GitHub API</a>
          <div>
            <input className="input" type="text" name="search-param" value={searchParam} onChange={(e) => setSearchParam(e.target.value)} id="search-param" placeholder="Search..." />
            <select className="select" name="search-by" id="search-by" onChange={(e) => setFilterValue(e.target.value)}>
              <option value="repositories">Repositories</option>
              <option value="users">Users</option>
              <option value="topics">Topics</option>
            </select>
            <button className="btn" type="submit" onClick={() => getResults(filterValue, searchParam)}>Search</button>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="container">
        <h1 className="main-title text-center">{results.length > 0 && `Your search for: ${searchParam}`}</h1>
        <div className="row">
        {
          results && results.map( item => 
            <div key={item.id} className="col">
              <AppCard item={item}/>
            </div>
          )
        }
        </div>
      </main>
    </>
  )
}

export default App
