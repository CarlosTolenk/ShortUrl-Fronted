import React, { Component } from 'react';
import axios from 'axios';
import validator from 'validator';
import SweetAlert from 'sweetalert2-react';



//Component
import Form from '../Component/Form';
import Table from '../Component/Table';

//Assets
import '../../App.css';

 //GENERAL Fetch
 const urlGet = 'http://127.0.0.1:8000/api/shorturl';
 const urlPost = 'http://127.0.0.1:8000/api/shorturl';
 let newdata;


class ShortUrl extends Component {

    constructor(props){
        super(props);
        this.state = {
             isData: false,
             value: '',
             dataURL: [],
             show: false,
             shortUrl: '',
             title: '',
             text: ''
            }  

 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getShortUrl = this.getShortUrl.bind(this);
    }


    componentDidMount(){
        this.getShortUrl();                 
    }

    getShortUrl() { 
        axios.get(urlGet)
        .then(res => {      
           if(res.data.length > 0){
            this.setState({
                isData: true,
                dataURL: res.data
            })
           }
                
        })    
        .catch((err) => console(err));  
    }   



    postShortUrl = async() => {       
        const body = {
            url: this.state.value,           
        };
        const respuesta = await axios({
            method: 'post',
            url: urlPost,
            data: body,
            config: { headers: {'Content-Type': 'application/json' }}
            });

         if(respuesta){
             console.log(respuesta.data);
             this.setState({
                isData: true,
                dataURL: this.state.dataURL.concat(respuesta.data),
                show: true,
                title: "It has been added correctly!!",
                text: `The short url is: ${respuesta.data.short} You can visualize in the table`

             })
         } else{
             console.log(respuesta);
         }             
    } 


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        if(!validator.isURL(this.state.value) ){
            this.setState({
                show: true,           
                title: "Error, this is not a URL correctly!!",
                text: "You must enter a valid URL in order to process it"
            })
        }else{
           this.postShortUrl();
           this.setState({
               value: ''
           })
        }
    }
    

    render() {      
        return (
            <div className="container">        
              <Form className="m-10"
                onSubmit={this.handleSubmit}
                onValue={this.state.value}
                onChange={this.handleChange}
               />
              <br></br>
            {
                this.state.isData ?
                <Table className="m-10" dataShort={this.state.dataURL}/>
                :
                <div className="card-panel">
                <span className="blue-text text-darken-2 center-align">You have not registered any short URL yet</span>
               </div>
            }
                  <SweetAlert
                    show={this.state.show}
                    title={this.state.title}
                    text={this.state.text}
                    onConfirm={() => this.setState({ show: false })}
                />
             
            </div>
        );
    }
}


export default ShortUrl;

