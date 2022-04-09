import React,{Component} from 'react'
import Newscomponent from './Newscomponent'
export default class News extends Component{
     article=["heello i am the article","this is name of the new era","there is name of new era"]
    constructor(){
        super();
        this.state={
            articles:this.article,
            loading :false
        }
        // console.log(this.article)
    }
    async componentDidMount()
    {
      //this runs after render method 
      //first start with constructor then render and then component did mount
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=f2854c8d2a1544689061d938069715f1" 
      let data=await fetch(url)
      let parsedData=await data.json(); 
      console.log(parsedData)
      this.setState({articles:parsedData.articles})
    }
    render(){
        return(
            <div className="container my-3">
                <h1>Samachar - Top headlines</h1>
              <div className="row">
                  { this.state.articles.map((element)=>{
                      return <div className="col-md-4" key={element.url}>
              <Newscomponent title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
                  </div>
                  }
                )
                }
            </div>
            </div>
        )
    }
}