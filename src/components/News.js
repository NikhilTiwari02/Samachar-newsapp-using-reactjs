import React, { Component } from "react";
import Newscomponent from "./Newscomponent";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
export default class News extends Component {
    static defaultProps={
        country:"in",
        pageSize:10,
        category:"general",
    }
    static propTypes={
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    //constructor runs first
    // articles=["this is hello this is hii how are you are the best"]
    constructor(){
        super();
        // console.log("this is constructor"); 
        this.state={
            articles:[],
            loading:true,
            page:1
        }
    }
    key=1;
    async componentDidMount(){
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2854c8d2a1544689061d938069715f1&pageSize=${this.props.pageSize}`
           let data= await fetch(url);
           let parseddata=await data.json();
           this.setState({articles:parseddata.articles,
            totalArticles:parseddata.totalResults,
            loading:false
        })
              }
    prevOnClick= async()=>{
        // console.log("previous is clicked")
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country={this.props.country}&category=${this.props.category}&apiKey=f2854c8d2a1544689061d938069715f1&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
           let data= await fetch(url);
           let parseddata=await data.json();
           this.setState({
               page:this.state.page-1,
               articles:parseddata.articles,
               loading:false
           })
    }
    nextOnClick=async()=>{
        if(!Math.ceil(this.state.totalArticles/this.props.pageSize)<this.state.page+1)
        {this.setState({loading:true});
        let url=`https://newsapi.org/v2/top-headlines?country={this.props.country}&category=${this.props.category}&apiKey=f2854c8d2a1544689061d938069715f1&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data= await fetch(url);
        let parseddata=await data.json();
        this.setState({
            page:this.state.page+1,
            articles:parseddata.articles,
            loading:false
        })
    }
    }
    render() {
        return( 
            <div className="container my-3">
                <h1 className="text-center">Top headlines - Samachar</h1>
               {this.state.loading && <Spinner/>}
            <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4 my-2" key={this.key++}>
                <Newscomponent title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} url={element.url}/>
                </div>
            })}
            </div>
            <div className="d-flex justify-content-between my-3">    
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prevOnClick}>&larr; Previous</button>
            <button  type="button" disabled={Math.ceil(this.state.totalArticles/this.props.pageSize)<this.state.page+1} className="btn btn-dark" onClick={this.nextOnClick}>Next &rarr;</button>
            </div>
            </div>
        )
        
    }
}
 
