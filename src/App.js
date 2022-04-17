import React,{Component} from "react"
import Navbar from "./components/Navbar"
import News from "./components/News"
import { BrowserRouter  
,Routes
,Route
 } from "react-router-dom"
export default class App extends Component{
  render(){
    let a=1
    return(
      // <div>
      <BrowserRouter>
      <Navbar backgroundcolor={"dark"}/>
    <div>
    <Routes>
      <Route exact path="/" element={<News pageSize={10} country={"in"} key={a++} category="general"/>}/>
        <Route exact path="/technology" element={<News pageSize={10} country={"in"} key={a++} category="technology"/>} />
        <Route exact path="/sports" element={<News pageSize={10} country={"in"} key={a++} category="sports"/>} />
        <Route exact path="/entertainment" element={<News pageSize={10} country={"in"}
        key={a++}  category="entertainment"/>} />
        <Route exact path="/politics" element={<News pageSize={10} country={"in"}
        key={a++}  category="politics"/>} />
        <Route exact path="/science" element={<News pageSize={10} country={"in"} 
        key={a++} category="science"/>} />
        <Route exact path="/health" element={<News pageSize={10} country={"in"} 
        key={a++} category="health"/>} />
        <Route exact path="/business" element={<News pageSize={10} country={"in"} 
        key={a++} category="business"/>} />
    </Routes>
    </div>
  </BrowserRouter>
    );
  }
}