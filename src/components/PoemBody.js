import React from 'react'
import ShowPoem from "./ShowPoem"
import {Typography, Space, Select, Button} from 'antd'
const {Title, Text} = Typography
const {Option} = Select

class PoemBody extends React.Component{  

    constructor(){
        super()
        {
            this.state = {
                poem: null,
                isLoaded:false,
                author:null,
                selectAuthor:null,
                poemCount:0
            }
        }
    }
    
    async componentDidMount(){

        const urlAuthor = "https://poetrydb.org/author";

        const responseAuthor = await fetch(urlAuthor)
        const dataAuthor = await responseAuthor.json()
        this.setState(
            {
                author:dataAuthor,
            }
        )
        
        let author = null

        if(this.state.selectAuthor == null){
            author = this.state.author['authors'][Math.floor(Math.random()*this.state.author['authors'].length)]
            console.log(author)
        }else{
            author = this.state.selectAuthor
        }
        
        const url = `https://poetrydb.org/author/${author}`;

        const response = await fetch(url)
        const data = await response.json()
        this.setState(
            {
                poem:data,
                poemCount:0
            }
        )

        const poemNumber=Math.floor(Math.random()*this.state.poem.length)
        this.setState({
            poemCount:poemNumber,
            isLoaded:true
        })
    }

    Author = ()=>{

        const selectAuthor=(value)=>{
            this.setState({
                selectAuthor:value
            })
            this.componentDidMount()
        }
        return(
            <Space align="center">
                <Select
                    className="authorSelect"
                    showSearch
                    style={{ width: 200}}
                    placeholder="Select Author"
                    onChange={selectAuthor}
                //     optionFilterProp="children"
                // //     filterOption={(input, option) =>
                // //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                // // }
                >
                    {
                        this.state.author['authors'].map((name, index)=>{
                            
                            return(                           
                                <Option value={name}>{name}</Option>
                            )
                        })
                    }
                </Select>
            </Space>
        )
    }

    showPoem = (i)=>{
            return(
                <ShowPoem
                    Poem={this.state.poem[this.state.poemCount].lines[i]} 
                />
            )
    }

    render(){
        if(!this.state.isLoaded){
            return(
                <h3>Loading.....</h3>
            )
        }else{
            console.log(this.state.poemCount)
            return(
                <div>
                    <div className="container">
                        {this.Author()}
                        <Button 
                            type="primary" 
                            style={{margin:"0 1em"}}
                            // onClick={this.componentDidMount()}
                        >
                            Random
                        </Button>
                    </div>
                    <div className="container">
                        <Title>{this.state.poem[this.state.poemCount].title}</Title>
                        {this.state.poem[this.state.poemCount].lines.map((name, index)=>{    
                            if(index<this.state.poem[this.state.poemCount].lines.length){
                                return(
                                    this.showPoem(index)                                
                                )
                            }   
                        })}
                        <Title mark level={5}>-{this.state.poem[this.state.poemCount].author}</Title>
                    </div>
                </div>
            )}
    }
}

export default PoemBody