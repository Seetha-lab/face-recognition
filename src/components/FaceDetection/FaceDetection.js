import React from 'react';
import './FaceDetection.css';

const FaceDetection = ({oninput, onsubmit}) => {
    return(
        <div className="tc"> 
        <h1> Face Recognition!</h1>
        <p className="f3"> 
        {`Here you go, will detect beautiful face from your pictures! `} 
        </p> 
        <div className="center">
        <div className="center bg pa4 " >
         <input className="f4 pa2 w-70 center" type="text" name="url" onChange={oninput}/>
         <button className="w-30 grow f4 link ph3 pv2 dib white bg-blue pointer" name="detect" onClick={onsubmit}>Detect</button>
         </div>
        </div>
        </div>
       
       )


}

export default FaceDetection;