import React ,{Component} from 'react'
import {Link} from "react-router-dom"
export default class Navbar extends Component{
    render(){
      return(
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.backgroundcolor} bg-${this.props.backgroundcolor}`}>
      <Link className="navbar-brand mx-2" to="#">Samachar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link"  to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/technology">Technology</Link>
          </li><li className="nav-item">
            <Link className="nav-link" to="/sports">Sports</Link>
          </li><li className="nav-item">
            <Link className="nav-link" to="/entertainment">Entertainment</Link>
          </li><li className="nav-item">
            <Link className="nav-link" to="/politics">Politics</Link>
          </li><li className="nav-item">
            <Link className="nav-link" to="/business">Business</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/science">Science</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/health">Health</Link>
          </li>
          
        </ul>
      </div>
    </nav>
      )
    }
}