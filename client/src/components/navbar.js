function Navbar({ currentPage, handlePageChange }) {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className='nav-item active'>
                        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gym" onClick={() => handlePageChange('Gym')} className={currentPage === 'Gym' ? 'nav-link active ' : 'nav-link '}>Gym</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;