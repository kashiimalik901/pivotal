function navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <button className="btn btn-sm btn-outline-secondary products active" type="button">Products</button>
                <button className="btn btn-sm btn-outline-secondary channels" type="button">Channels</button>
                <button className="btn btn-sm btn-outline-secondary clients" type="button">Clients</button>
                <button className="btn btn-sm btn-outline-secondary branches" type="button">Client branches</button>
                <button className="btn btn-sm btn-outline-secondary echange-rates" type="button">Exchange rates</button>
            </form>
        </nav>
    )
}
export default navbar;