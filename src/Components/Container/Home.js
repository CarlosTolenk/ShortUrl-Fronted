import React, { Component } from 'react';
import axios from 'axios';

//Component
import Card from '../Component/Card';
import Loading from '../Component/Loading';
import Footer from '../Component/Footer';

//GENERAL Fetch
const url = 'http://127.0.0.1:8000/api/website';
let dataURL=[];


class Home extends Component {

    constructor(props){
        super(props);
        this.state = { loading: true}  

    }

    getWebsite() {
        axios.get(url)
        .then(res => {
            dataURL = res.data;        
            this.setState({ loading: false });
            localStorage.setItem("websitesTop", JSON.stringify(dataURL));   
        })    
        .catch((err) => console(err));  
    }

    componentDidMount(){   
        if(localStorage.getItem("websitesTop") === null){     
            this.getWebsite();
       
        }else{
            dataURL = JSON.parse(localStorage.getItem("websitesTop"));
            this.setState({ loading: false });          
        }
    }



    render() {  
        return (
            <div>
                {
                    this.state.loading ?
                     <Loading/>
                    : null
                }
                <div className="container"> 
                    <div className="row m-10">                   
                        {
                            dataURL.map((item, i) => <Card data={item} index={i} key={i.toString()} />)
                        }                   
                    </div>    
                </div> 
                <Footer/>            
            </div>
        );
    }
}

export default Home;