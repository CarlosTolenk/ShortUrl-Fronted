import React from 'react';

//Assets
import '../../App.css';

 //GENERAL Fetch
 const urlGet = 'http://127.0.0.1:8000/short/';

//{item.short}


const ItemTable = (props) => {
  const item = props.data;
  return(
    <tr>
      <td>{item.id}</td>
      <td>{item.url}</td>
      <td>
       <a href={`${urlGet}${item.short}`} target="_blank">http://127.0.0.1:8000/short/{item.short}</a>       
      </td>
    </tr>    
  )
}

const Table = (props) => {
    return(  
        <React.Fragment>            
        <h4>Yours URL to shorten</h4>    
        <table className="m-10 p-10-b">
        <thead>
          <tr>
              <th>ID</th>
              <th>URL</th>
              <th>Short</th>
          </tr>
        </thead>

        <tbody>
          {
              props.dataShort.map((item, i) => <ItemTable data={item} key={i.toString()} />)
          }
       
        </tbody>
      </table>  
  
        </React.Fragment>
    )
}

export default Table;


