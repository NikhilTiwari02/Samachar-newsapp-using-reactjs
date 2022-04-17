// import { getByTitle } from "@testing-library/react";
import React,{Component} from "react";
export default class Newscomponent extends Component{
    render(){
       const {title,description,imageurl,url}=this.props
        return(
    <div className="card">
  <img className="card-img-top" src={imageurl} alt="not found"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a href={url} rel="noreferrer" target="_blank" className="btn btn-dark btn-sn">Readmore</a>
  </div>
</div>
        )
    }
}