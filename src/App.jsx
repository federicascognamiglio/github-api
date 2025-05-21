
function App() {

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="d-flex justify-between align-center">
          <a className="nav-brand" href="/">GitHub API</a>
          <div>
            <input className="input" type="text" name="search-param" id="search-param" placeholder="Search..." />
            <select className="select" name="search-by" id="search-by">
              <option value="repositories">Repositories</option>
              <option value="users">Users</option>
            </select>
            <button className="btn" type="submit">Search</button>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main>

        <h1 className="text-center main-title">Your search for: </h1>

      </main>
    </>
  )
}

export default App
