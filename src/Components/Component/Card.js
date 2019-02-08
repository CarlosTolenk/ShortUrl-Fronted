import React from 'react';


//Assets
import '../../App.css';

const Card = (props) => {
    const data = props.data;
    const name = data.url.substring(0, data.url.length - 4).replace('.', '');   
  
    return(        
        <div className="col s12 l4 m6">        
            <div className="card white darken-1">
                <div className="card-content ">
                    <span className="card-title blue-text text-darken-2 ">{props.index +1} - {
                        name.charAt(0).toUpperCase() + name.slice(1)
                        }</span>
                    <p><b>URL:</b><span> {data.url}</span></p>
                    <p><b>Linking Root Domains:</b><span> {data.root} </span></p>
                    <p><b>MozRank:</b><span> {data.mozrank} </span></p>
                    <p><b>MozTrust:</b><span> {data.moztrust} </span></p>
                </div>
                <div className="card-action">
                    <a className="blue-text" target="_blank" href={`http://${data.url}`}>Go to {name.toUpperCase()}</a>                       
                </div>
            </div>    
        </div>

    )
}

export default Card;


