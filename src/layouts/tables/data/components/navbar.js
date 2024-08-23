
function navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <button className="btn btn-sm btn-outline-secondary active" type="button">Products</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Channels</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Clients</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Client branches</button>
                <button className="btn btn-sm btn-outline-secondary" type="button">Exchange rates</button>
            </form>
        </nav>
    )
}
export default navbar;