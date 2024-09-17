//import router
import AppRoutes from './routes';

//import Link from react router dom
import { Link } from "react-router-dom";

//import useState dan useEffect
import { useState, useEffect } from 'react';

//import js cookie
import Cookies from 'js-cookie';

export default function App() {

  //init state user
  const [user, setUser] = useState([]);

  //useEffect
  useEffect(() => {
      //get user data from cookie
      const userData = Cookies.get('user');

      if (userData) {
          //assign user data to state user
          setUser(JSON.parse(userData));
      }
  }, []);

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container">
        <Link to="/" className="navbar-brand">HOME</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="" target="_blank" className="nav-link active" aria-current="page"><i className="fas fa-user fa-fw"></i> {user?.name}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="container mt-5">
      <AppRoutes />
    </div>
  </div>
  )
}