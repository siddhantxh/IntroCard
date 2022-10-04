import React from "react"
import ReactDOM from "react-dom"
import Info from "./components/Info.js"
import Footer from "./components/Footer.js"
import About from "./components/About.js"
import Intrests from "./components/Intrests.js"


function Card(){
        return(
            <div className="card">
                <img className="imageMeri" src="https://i.postimg.cc/Y0C0WtF0/photo-2022-10-04-20-33-06.jpg"></img>
                <Info/>
                <About/>
                <Intrests/>
                <Footer/>
            </div>            
        )
}

ReactDOM.render(<Card/>, document.getElementById("root"))