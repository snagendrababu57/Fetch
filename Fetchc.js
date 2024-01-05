import React, { Component } from "react";


class Fetchc extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            loading:true
        }
    }
    componentDidMount(){ 
        fetch('https://fakestoreapi.com/products')
        .then(res=>{
            return res.json();
            })
            .then(data=>{
                this.setState({
                    data:data,
                    loading:false
                })
            })
    }
    render(){
        const{data,loading}=this.state;
        return(
            <div>
                {loading ?(
                    <p>Loading.....</p>
                ):(
                    <div>
                        {data.length >0 &&(
                            <ul>{data.map(datas=>(
                                <li key={datas.id}>{datas.description}</li>
                            ))}</ul>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
export default Fetchc;