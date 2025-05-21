function AppCard ({item}) {
    return (
        <div className="card">
            <h2 className="card-title">{item.full_name}</h2>
            <h3 className="card-label">{item.visibility}</h3>
            <p className="card-description">{item.description}</p>
            <div className="card-footer">
                <p>View Repo</p>
            </div>
        </div>
    )
}

export default AppCard