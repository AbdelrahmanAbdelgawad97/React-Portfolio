import "../../index.css"
import { Link, NavLink } from 'react-router'
export default function NavBar() {
  return (
    <>
        
        <nav className="navbar navbar-expand-lg main-bg-color position-fixed start-0 end-0 top-0 py-4 z-5">
            <div className="container">
                <Link className="navbar-brand text-uppercase text-white fs-2 fw-bold" to="/">start framework</Link>
                <button className="text-white navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white fw-bold fs-6 text-uppercase" aria-current="page" to="/about">about</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link text-white fw-bold fs-6 text-uppercase" to="/portfolio">portfolio</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link text-white fw-bold fs-6 text-uppercase" to="/contact">contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
