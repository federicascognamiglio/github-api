import { useState } from "react"
import axios from 'axios'

// Components
import AppCard from "./components/AppCard"

function App() {

  // Variabili di Stato
  const [searchParam, setSearchParam] = useState('react')
  const [results, setResults] = useState('')

  // Funzioni
  const getResults = (param) => {
    axios.get(`https://api.github.com/search/repositories?q=${param}`)
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
            <select className="select" name="search-by" id="search-by">
              <option value="repositories">Repositories</option>
              {/* <option value="users">Users</option> */}
            </select>
            <button className="btn" type="submit" onClick={() => getResults(searchParam)}>Search</button>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="container">
        <h1 className="main-title text-center">Your search for: {searchParam}</h1>
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
