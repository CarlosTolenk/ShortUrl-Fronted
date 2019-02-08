import React from 'react';

//Assets
import '../../App.css';

const Form = (props) => {
    return(  
        <React.Fragment>
        <h4>Enter the URL to shorten it.</h4>      
                <div className="row ">
                    <form className="col s12" >
                        <div className="input-field col s12">
                            <input placeholder="https://google.com" type="url" className="validate"
                                value={props.onValue}
                                onChange={props.onChange}
                            />
                            <label >URL</label>
                        </div> 
                                                         
                    </form>     
                    <div className="col s12">
                        <button className="btn waves-effect blue accent-3" type="submit" value="submit"
                            onClick={props.onSubmit}
                        >Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>             
                </div>
        </React.Fragment>
    )
}

export default Form;


