import React from 'react'
import ShowPoem from "./ShowPoem"

class PoemBody extends React.Component{  

    constructor(){
        super()
        {
            this.state = {
                poem: null,
                isLoaded:false
            }
        }
    }
    
    async componentDidMount(){

        const url = "https://poetrydb.org/title/Ozymandias/lines.json";

        const response = await fetch(url)
        const data = await response.json()
        this.setState(
            {
                poem:data,
                isLoaded:true
            }
        )
    }

    showPoem = (i)=>{
            return(
                <ShowPoem 
                    data={this.state.poem[0].lines[i]} 
                />
            )
    }

    render(){
        if(!this.state.isLoaded){
            return(
                <h3>Loading.....</h3>
            )
        }else{
            console.log(this.state.poem[0].lines)
            return(
                <div className="container">
                     {this.state.poem[0].lines.map((name, index)=>{    
                        if(index<this.state.poem[0].lines.length){
                            return(
                                  this.showPoem(index)                                
                            )
                        }   
                    })}
                </div>
            )}
    }
}

export default PoemBody